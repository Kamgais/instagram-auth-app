import express, { Application } from "express";
import  { connect } from "./src/utils/connectToDB";
import cookieParser from 'cookie-parser';
import authRouter from './src/routes/auth-route';
import sessionRouter from './src/routes/session-route';
import postRouter from './src/routes/post-route';
import userRouter from './src/routes/user-route';
import commentRouter from './src/routes/comment-route';
import dotenv from 'dotenv';
import cors from 'cors';
import session from 'express-session';
import passport from "passport";
import './src/configs/passport-config';
import { User } from "./src/models/user-model";


const app: Application = express();

app.use(cookieParser())
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






app.listen(process.env.PORT, async() => {
    console.log('server start...')
    await connect();
})

app.use('/api/auth', authRouter)
app.use('/api/session', sessionRouter)
app.use('/api/posts', postRouter)
app.use('/api/users', userRouter)
app.use('/api/comments', commentRouter)