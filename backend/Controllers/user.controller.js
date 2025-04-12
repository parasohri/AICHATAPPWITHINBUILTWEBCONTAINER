import User from "../models/user.model.js";
import * as userService from'../Services/user.service.js'
import {validationResult} from 'express-validator'
//import redisClient from "../Services/redis.service.js";
export const createUserController= async(req,res)=>{
    const errors=validationResult(req);
    // if(!errors.isEmpty()){
    //     return res.status(400).json({errors:errors.array()})
    // }
    try{
        const user=await userService.createUser(req.body);
        const token=await user.generateJWT();
        res.status(201).json({user,token});
    }
    catch(error){
        res.status(400).send(error.message);
        console.log(error.message);
        
    }
}
export const signin=async(req,res)=>{
    const {email,password}=req.body;
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    try{
        const user=await User.findOne({email}) 
        if (!user) {
            return res.status(401).json({
                errors: 'Invalid credentials'
            })
        }
        const check=await user.isValidPassword(password)
        if(!check){
          return res.status(401).json({
                errors: 'Invalid credentialsss'})
            
        }
         const token=user.generateJWT();
    
        
       return res.status(201).json({user,token});
    }
    catch(error){
        console.log("as",error.message);
        res.status(400).send(error.message);
       
        
    }
}
export const profileController = async (req, res) => {

    res.status(200).json({
        user: req.user
    });

}

export const logout=async(req,res)=>{
    try {

        const token = req.cookies.token || req.headers.authorization.split(' ')[ 1 ];

        redisClient.set(token, 'logout', 'EX', 60 * 60 * 24);

        res.status(200).json({
            message: 'Logged out successfully'
        });


    } catch (err) {
        console.log(err);
        res.status(400).send(err.message);
    }

}
export const getAllUsersController = async (req, res) => {
    try {

        const loggedInUser = await User.findOne({
            email: req.user.email
        })
        console.log("s",loggedInUser);
        

        const allUsers = await userService.getAllUsers({ userId: loggedInUser._id });
//console.log(allUsers);

        return res.status(200).json({
            users: allUsers
        })

    } catch (err) {

        console.log(err)

        res.status(400).json({ error: err.message })

    }
}
export const getuser=async(req,res)=>{
const t=await User.findOne({
     email:req.user.email
})
return res.status(201).json(t)
}