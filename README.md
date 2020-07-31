## Simple Chat Application Server using Node

This is a simple socketio server for creating chat application.
This project is a minimalist application.Currenlty there are many errors but I am actively developing it.But the basic idea of a chat room servers are in place.This server can broadcast messages to the required chat-room when the user sends a messages.This chat-room saves and retrieves message from the sqlite database.Sqlite is used because this is not a final build and is just for development purpose.


## Instructions to install

Clone this repository.
Go to the command prompt
Use the command 
## `npm install`

This will install all the required dependencies for the application to run


Then again in the command use the command:
## `node app.js`

This will start the application and the server starts to listen on port 5000.


Note:The instructions written above assumes that nodejs and node package manager are installed in the system.If not installed you can go to this [link](https://nodejs.org/en/download/) and download it.




## Features
This application is only the backend/server of the application.It uses the socketio package to communicate with the socketio client that is deployed in the frontend.You can download the frontend by clicking 
[link](https://github.com/spravesh1818/simple-chat-app-frontend-react)


This is a simple application and only has a main server file called app.js.Here all the other required modules are imported and used.

`express` is used to create a http server
`Sequelize` is used for database access.
`socketio` is used for creating a socketio server.

These two are the basic packages of the application

Communication is done with the client via different relevent events that are created in the server like join,message etc.


`Application contents and their use`
There is a users.js to manage users in the server.
And there is connection.js to manage the database connection.


`What the application can Do`
All the previous messages of the given room are sent everytime a user joins the room.
When a client sends a message it is saved to the server database and then relayed to the clients.
Also the online users are updated as soon as a user enters or leaves a room using a socketio event.


`Errors and Exception`
I am aware of few errors and exceptions.I have not written the code to manage the errors and exceptions currently.This application will be active development from now on and thus,these errors and exceptions will be handled in the near future.


## CONFIGURATION

I have currently setup the application to listen at port no 5000 but it can be changed in the app.js

For database sqlite is for the development purposes.Also since this is a small application migrations are not used.
