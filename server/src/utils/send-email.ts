import { signJwt } from "./jwt-utils";
import nodemailer from 'nodemailer'




export const sendEmail = async (receiver: string, emailContent: string) => {
 

    

      let transporter = nodemailer.createTransport({
        service: 'gmail', // specify the service
        auth: {
            user: process.env.EMAIL_USER, // your email address
            pass: process.env.PASSWORD_USER // your password
        }
    });

    let message = {
        from: 'instagram@clone045@gmail.com', // sender address
        to: receiver, // list of receivers
        subject: 'Confirmation Email', // Subject line
        html: emailContent // html body
    };
        try {
          await  transporter.sendMail(message)
          console.log("Email send");
          return Promise.resolve(true)
        } catch (error: any) {
           return Promise.reject({message: 'failed to send message'}) 
        }
   
       
  
       
}