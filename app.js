const express=require('express');
const  app=express();


const {addUser,removeUser,getUser,getUsersInRoom}=require("./users.js");

app.get('/',function(req,res){
    res.send("Hello World");
})

server=app.listen(3000,function(){
    console.log("App listening at port 3000");
})



//socket io

const io=require('socket.io')(server);
const users=[];
const connections=[];


io.on('connection',(socket)=>{
    console.log("User connected");

    socket.on('join',({name,room},callback)=>{
        const {error,user}=addUser({id:socket.id,name,room});
        

        if(error) return callback(error);
        socket.emit('message',{user:'System',text:`${user.name},Welcome to the room ${user.room}`});
        socket.broadcast.to(user.room).emit('message',{user:'System',text:`${user.name} has joined!`});
        socket.join(user.room);
        callback();
    })

    socket.emit('message',{user:'admin',content:'Welcome to the platform guys'});

    socket.on('sendMessage',(message,callback)=>{
        const user=getUser(socket.id);
        io.to(user.room).emit('message',{user:user.name,text:message});
        callback();

    })

    socket.on('disconnect',()=>{
        console.log("User disconnected");
    })

})

