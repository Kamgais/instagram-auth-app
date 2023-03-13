import { NextFunction, Request, Response } from "express";
import { reIssueTokens, verifyJwt } from "../utils/jwt-utils";

export const authorize = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // get the tokens from req object
 // console.log(req.cookies)
  const accessToken =
    req.cookies["accessToken"] || req.headers.authorization?.split(" ")[1];
   // console.log(accessToken)
  const refreshToken = req.cookies["refreshToken"] || req.headers["x-refresh"];

  if (!accessToken) {
    return res.status(401).json({ message: "no authorization" });
  }

  if (!refreshToken) {
    return res.status(401).json({ message: "no autorisation" });
  }

  const { decoded, expired } = verifyJwt(accessToken);

  if (decoded) {
    // res.locals.user = decoded;
    return next();
  }

  if (expired && refreshToken) {
    const tokens = await reIssueTokens(refreshToken);
    if (!tokens) return res.status(401).json({ message: "no autorisation" });

    const { newAccessToken, newRefreshToken } = tokens;

    res.cookie("accessToken", newAccessToken, {
      maxAge: 3.154e10, // 1 year
      httpOnly: true,
      domain: "localhost",
      path: "/",
      sameSite: "strict",
      secure: false,
    });

    res.cookie("refreshToken", newRefreshToken, {
      maxAge: 3.154e10, // 1 year
      httpOnly: true,
      domain: "localhost",
      path: "/",
      sameSite: "strict",
      secure: false,
    });

    return next();
  }

  return res.status(401).json({ message: "no autorisation" });
};
