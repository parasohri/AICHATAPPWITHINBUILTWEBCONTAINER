import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import  jwt from "jsonwebtoken";
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        minlength:[6,'Email must be of min 6 length'],
maxlength:[30,'Email doesnot exceed 30 letter']
    },
    password:{
        required:true,
        type:String,
        minlength:[6,'password must be of min 6 length'],
    }
})
userSchema.statics.hashPassword=async function(password){
return await bcrypt.hash(password,10);
}
userSchema.methods.isValidPassword=async function (password){
    return await bcrypt.compare(password,this.password);
}
userSchema.methods.generateJWT=function(){
    return jwt.sign({email:this.email},process.env.JWT_SECRET,{expiresIn:'24h'})
}
const User=mongoose.model('user',userSchema);
export default User;