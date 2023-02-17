import express, { Application } from "express";
import  { connect } from "./src/utils/connectToDB";
import authRouter from './src/routes/auth-route';
import sessionRouter from './src/routes/session-route';
import dotenv from 'dotenv';



const app: Application = express();
dotenv.config()
app.use(express.json())





app.listen(process.env.PORT || 5000 , async() => {
    console.log('server start...')
    await connect();
})

app.use('/api/auth', authRouter)
app.use('/api/session', sessionRouter)