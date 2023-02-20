import passport from 'passport';
import googleAuth from 'passport-google-oauth20';
import { create, findUserByEmail, findUserById } from '../services/user-service';


const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: '1511726345-kmqtdbdf4lr3dk4hbd1m2k7mi6tkk1nv.apps.googleusercontent.com',
    clientSecret:'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',
    callbackURL: "/api/auth/google/callback"
  },
 async function(accessToken: any, refreshToken: any, profile: any, cb: any) {
     try {
        
    const userFromDB = await findUserByEmail(profile.emails![0].value)
    console.log(userFromDB)
     if(!userFromDB) {
        try {
            const newUser =  await create({
                username: profile.displayName,
                email: profile.emails![0].value,
                fullName: profile.name?.familyName as string,
                password: Math.random().toString(),
                id: +profile.id
            })
            return cb(null, newUser )  
        } catch (error) {
          console.log(error)  
        }
      

       
     }

     return cb(null, userFromDB)
     
   
     } catch (error: any) {
        cb(error, {message: 'Internal Server Error'})
     }
  }
));