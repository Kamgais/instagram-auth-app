import { Request, Response } from "express";
import { UserDto } from "../dtos/user-dto";
import { UserMapper } from "../mappers/user-mapper";
import { CreateUserInput } from "../schemas/user-schema";
import {
  create,
  existWithEmail,
  existWithUsername,
  findUserByEmail,
  findUserById,
  
} from "../services/user-service";
import { OutPutType } from "../utils/output-type";
import sendgrid from "@sendgrid/mail";
import { signJwt, verifyJwt } from "../utils/jwt-utils";
import path from "path";
import ejs from "ejs";
import nodemailer from 'nodemailer';
import { JwtPayload } from "jsonwebtoken";
import { sendEmail } from "../utils/send-email";
import base64url from "base64url";
import { Session } from "../models/session-model";

export class AuthController {
  // create user handler
  static async createUserHandler(
    req: Request<{}, {}, CreateUserInput>,
    res: Response<OutPutType<UserDto>>
  ): Promise<Response> {
    try {
      const userWithUsername = await existWithUsername(req.body.username);
      if (userWithUsername) {
        return res.status(403).json({ message: "username not available" });
      }

      const userWithEmail = await existWithEmail(req.body.email);
      if(userWithEmail) return res.status(403).json({ message: "email not available" });
      const user = await create(req.body);

      const userResponse = UserMapper.toDto(user);
      // generate confirmation token
      const confirmationToken = signJwt(
        { userId: user.id },
        { expiresIn: "5m" }
      );
      const confirmationLink = `${process.env.SERVER_ADRESS}/auth/confirm?token=${base64url.encode(confirmationToken)}`;
      const data = { confirmationLink };
      const emailTemplatePath = path.join(__dirname, "../views/email.ejs");
      const html = await ejs.renderFile(emailTemplatePath, data);
      const isSend = await sendEmail(user.email, html);
      return res.status(200).json(userResponse);
    } catch (error: any) {
      console.log(error);
      return res.status(500).json({ message: error.message });
    }
  }


  static async confirmEmailHanler (req: Request, res: Response): Promise<any> {
      try {
        const token = req.query.token;
        if(!token) return res.status(404).send('no authorisation')
        const {decoded, expired} = verifyJwt(base64url.decode(token as string));
        if(!decoded && expired) return res.status(401).send('The link is already expired')
       const {userId} = decoded as JwtPayload;
        const user = await findUserById(userId);
        if(!user) return res.status(404).send('User not Found')
        user.isEmailConfirmated = true;
        await user.save()
        return res.status(200).render('successConfirmation')


      } catch (error: any) {
        return res.status(500).send(error.message)
      }
  }


  static async forgotPasswordHandler(req: Request, res: Response): Promise<Response> {
    try {
      const {email} = req.body;
      if(!email) return res.status(404).json({message: 'email is required'})
      const user = await findUserByEmail(email);
      if(!user) return res.status(400).json({message: 'user don\'t exist'});
      const resetToken = signJwt({userId: user.id}, {expiresIn: '20m'})
      const encodedToken = base64url.encode(resetToken)
       const resetLink = `${process.env.CLIENT_ADDRESS}/reset-password/${encodedToken}`
       const data = { resetLink , name: user.username };
      const emailTemplatePath = path.join(__dirname, "../views/resetPassword.ejs");
      const html = await ejs.renderFile(emailTemplatePath, data);
      const send = await sendEmail(user.email, html);
      return res.status(200).json({message: 'mail sent. you can check your mails'})

    } catch (error: any) {
      return res.status(500).json({message: error.message})
    }
  }


  static async resetPasswordHandler(req:Request, res: Response): Promise<Response> {
    try {
      const {userToken} = req.query;
      const {password} = req.body;
      const token = base64url.decode(userToken as string)
      if(!userToken) return res.status(401).json({message: 'no permissions'})
      const {decoded, expired} = verifyJwt(token as string)
      if(!decoded && expired) return res.status(401).json({message: 'link is already expired'})
      if(!decoded && !expired) return res.status(401).json({message: 'no permissions'})
      const {userId} = decoded as JwtPayload;
      const user = await findUserById(userId);
      if(!user) return res.status(404).json({message: 'no corresponding user found'});
      user.password = password;
      await user.save();
      return res.status(200).json({message: 'password successfull reset'})
    } catch (error) {
      return res.status(500).json({message: 'interal server error'})
    }
  }



}
