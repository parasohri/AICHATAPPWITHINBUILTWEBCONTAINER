import mongoose from "mongoose";
export default function connect(){mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("CONNECTED TO DB");
    console.log( process.env.MONGODB_URI);
    
}).catch(error=>{
    console.log("error while connecting db",error);
    
})}