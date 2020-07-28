var express=require('express');
var app=express();


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

    socket.on('join',({name,room})=>{
        console.log(name);
        console.log(room);
    })

    socket.on('disconnect',()=>{
        console.log("User disconnected");
    })

})

