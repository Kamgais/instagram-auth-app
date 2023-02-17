import { Request, Response } from "express";
import { UserLoginInput } from "../schemas/session-schema";
import { createSession } from "../services/session-service";
import { findUserByUsername } from "../services/user-service";
import bcrypt from "bcrypt";
import { signJwt } from "../utils/jwt-utils";
import { SessionDto } from "../dtos/session-dto";
import { SessionMapper } from "../mappers/session-mapper";
import { OutPutType } from "../utils/output-type";

export const createSessionHandler = async (
  req: Request<{}, {}, UserLoginInput>,
  res: Response<OutPutType<SessionDto>>
): Promise<Response> => {
  try {
    // get the user
    const user = await findUserByUsername(req.body.username);
    if (!user) {
      return res.status(404).json({ message: "username don't exist" });
    }
    const match = await bcrypt.compare(req.body.password, user!.password);
    if (!match) {
      return res.status(400).json({ message: "password is false" });
    }

    const session = await createSession(user.id);
    const accessToken = signJwt(
      { userId: user.id, session: session.id },
      { expiresIn: "15m" }
    );
    const refreshToken = signJwt(
      { userId: user.id, session: session.id },
      { expiresIn: "1y" }
    );

    res.cookie("accessToken", accessToken, {
      maxAge: 900000, // 15 mins
      httpOnly: true,
      domain: "localhost",
      path: "/",
      sameSite: "strict",
      secure: false,
    });

    res.cookie("refreshToken", refreshToken, {
      maxAge: 3.154e10, // 1 year
      httpOnly: true,
      domain: "localhost",
      path: "/",
      sameSite: "strict",
      secure: false,
    });
    const sessionResponse: SessionDto = SessionMapper.toDto(session);
    return res.status(200).json(sessionResponse);
  } catch (error: any) {
    if (error.message === "no user with this username")
      return res.status(404).json({ message: error.message });
    return res.status(500).json({ message: error.message });
  }
};
