import { Request, Response } from "express";
import { UserDto } from "../dtos/user-dto";
import { UserMapper } from "../mappers/user-mapper";
import { CreateUserInput } from "../schemas/user-schema";
import {
  create,
  findUserByEmail,
  findUserByUsername,
} from "../services/user-service";
import { OutPutType } from "../utils/output-type";
import sendgrid from "@sendgrid/mail";
import { signJwt } from "../utils/jwt-utils";
import path from "path";
import ejs from "ejs";

export class AuthController {
  // create user handler
  static async createUserHandler(
    req: Request<{}, {}, CreateUserInput>,
    res: Response<OutPutType<UserDto>>
  ): Promise<Response> {
    try {
      const userWithUsername = await findUserByUsername(req.body.username);
      if (userWithUsername)
        return res.status(403).json({ message: "username not available" });

      const userWithEmail = await findUserByEmail(req.body.email);
      if (userWithEmail)
        return res.status(403).json({ message: "email not available" });
      const user = await create(req.body);

      const userResponse = UserMapper.toDto(user);
      // generate confirmation token
      const confirmationToken = signJwt(
        { userId: user.id },
        { expiresIn: "5m" }
      );
      const confirmationLink = `${process.env.SERVER_ADDRESS}/auth/confirm-email?token=${confirmationToken}`;
      const data = { confirmationLink };
      const emailTemplatePath = path.join(__dirname, "../templates/email.ejs");
      const html = await ejs.renderFile(emailTemplatePath, data);
      // send the confirmation email
      sendgrid.setApiKey(process.env.SENDGRID_APIKEY as string);
      const msg = {
        to: user.email,
        from: "cyrilkamgais1203@gmail.com",
        subject: "Confirm your email",
        html: html,
      };
      await sendgrid.send(msg);

      console.log("Email send");
      return res.status(200).json(userResponse);
    } catch (error: any) {
      console.log(error);
      return res.status(500).json({ message: error.message });
    }
  }
}
