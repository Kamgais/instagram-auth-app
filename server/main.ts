import express, { Application } from "express";
import  { connect } from "./src/utils/connectToDB";
import authRouter from './src/routes/auth-route';
import sessionRouter from './src/routes/session-route';
import dotenv from 'dotenv';
import cors from 'cors';
import session from 'express-session';
import passport from "passport";
import './src/configs/passport-config';
import { User } from "./src/models/user-model";


const app: Application = express();
app.use(cors({
    origin: ['http://localhost:5173','http://127.0.0.1:5173'],
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
    credentials: true
}))
dotenv.config()


app.use(session({
  secret: 'my-secret',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, maxAge: 3600000 } // 1 hour

}))


app.use(passport.initialize())
app.use(passport.session())

// Serialize and deserialize user objects
passport.serializeUser((user, done) => {
    console.log(user, 'hey')
    done(null, user);
   });
   
   passport.deserializeUser((user: any, done) => {
    done(null, user);
   });
// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the directory for the views
app.set('views', './src/views');
app.use(express.json())






app.listen(process.env.PORT || 5000 , async() => {
    console.log('server start...')
    await connect();
})

app.use('/api/auth', authRouter)
app.use('/api/session', sessionRouter)