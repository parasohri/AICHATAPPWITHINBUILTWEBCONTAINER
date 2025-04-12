import socket from 'socket.io-client'
let socketinstance=null;
export const initializeSocket=(projectid)=>{
    console.log("..",import.meta.env.VITE_API_URL);
    socketinstance=socket(import.meta.env.VITE_API_URL,{
        auth:{
            token:localStorage.getItem('token')
        },
        query:{
            projectId:projectid
        }
        
        
    }
);
    return socketinstance;
}
export const recievemessage=(eventname,cb)=>{
socketinstance.on(eventname,cb);
console.log(22,eventname,cb);

}
export const sendmessage=(eventname,cb)=>{
    socketinstance.emit (eventname,cb);
    }