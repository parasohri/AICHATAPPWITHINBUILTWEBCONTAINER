import mongoose from "mongoose";
const projectschema= new mongoose.Schema({
name:{
    type:String,
    Lowercase:true,
    required:true,
    trim:true,
    unique:true},
    users:[{
        type: mongoose.Schema.ObjectId,
    ref:'user'}
    ]
},{
    timestamps:true
})
const project=mongoose.model('project',projectschema);
export default project