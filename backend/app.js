import dotenv from 'dotenv';
import morgan from 'morgan';
dotenv.config()
import connect from './db/db.js';
import express from 'express'
import router from './Routes/user.routes.js';
import airouter from './Routes/ai.routes.js';
import projectrouter from './Routes/project.routes.js'
import cookieParser from 'cookie-parser';

import cors from 'cors'
connect();

const app=express();
//const port=process.env.PORT||3000;

app.use(cors())
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use('/users',router);
app.use('/project',projectrouter)
app.use('/ai',airouter);
app.get('/',(req,res)=>{
    res.send("hello worlds");
});
export default app;