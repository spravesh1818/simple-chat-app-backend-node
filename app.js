const express = require('express');
const app = express();


const { addUser, removeUser, getUser, getUsersInRoom } = require("./users.js");
const { Room } = require("./connection.js");


app.get('/', function (req, res) {
    res.send("Hello World");
})

server = app.listen(5000, function () {
    console.log("App listening at port 3000");
})


//socket io

const io = require('socket.io')(server);

io.on('connection', (socket) => {
    socket.on('join', ({ name, room }, callback) => {        
        const { error, user } = addUser({ id: socket.id, name, room });
        const users = getUsersInRoom(room);
        if (error) return callback(error);
        socket.emit('message', { user: 'System', text: `${user.name},Welcome to the room ${user.room}` });
        Room.create({ room: user.room, user: "System", message: `${user.name},Welcome to the room ${user.room}` });
        socket.broadcast.to(user.room).emit('message', { user: 'System', text: `${user.name} has joined!` });
        socket.broadcast.to(user.room).emit('usersInRoom', { users });
        socket.join(user.room);
        socket.emit('usersInRoom', { users });
        const messages=Room.findAll({
            where:{
                room:room
            }
        })
        messages.then((res)=>{
            const allMessages=[];
            for(i=0;i<res.length;i++){
                const user=res[i].dataValues.user;
                const text=res[i].dataValues.message;
                allMessages.push({user,text})
            }
            socket.emit('loadAllMessages',allMessages);
        }).catch(err=>console.log(err));
        callback();
    })

    socket.on('sendMessage', ({ message }, callback) => {
        const user = getUser(socket.id);
        Room.create({ room: user.room, user: user.name, message: message });
        io.to(user.room).emit('message', { user: user.name, text: message });
        callback();
    })

    socket.on('disconnect', () => {
        console.log('User disconnected');
        const user = removeUser(socket.id);
        const users = getUsersInRoom(user.room);
        socket.broadcast.to(user.room).emit('message', { user: 'System', text: `${user.name} has left!` });
        io.in(user.room).emit('usersInRoom', { users });
    })

})

