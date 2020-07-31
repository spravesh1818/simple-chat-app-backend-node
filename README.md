## Simple Chat Application Server using Node

This is a simple socketio server for creating chat application.



## Instructions to install

Clone this repository.
Go to the command prompt
Use the command 
## `npm install`

This will install all the required dependencies for the application to run


Then again in the command use the command:
## `npm start`

This will start the application and automatically open the application in the default browser.


Note:The instructions written above assumes that nodejs and node package manager are installed in the system.If not installed you can go to this [link](https://nodejs.org/en/download/) and download it.




## Features
This application is only the frontend of the application.It uses the socketio-client package to communicate with the socketio server.


This is a simple application and has two pages.

`Login Page`
This is where the user enters the username and room name.
This page contains simple custom validations
When the user presses the Sign In button,the user is sent to the chatscreen


`Chat Screen`
This is where all the chat messages are shown.
Basically there are three panels.
A.The header:This shows the current chat room and has a exit room button which can be used to exit the current room

B.The chat screen:Here is where all the chat messages and the message composer is shown.The user can send message as well as see other's messages.The chat is scrolled to show the latest message.

C.The online users panel:This is the panel where all the online users that are in the room are shown.


This was a quick effort and is in no way perfect.But it will be from now on in active development so keep an eye for an update.

The application is responsive as flexbox was used to design the frontend but still needs some polish.

All the components are broken down into smaller sub components making the code cleaner.

Tests are not yet written.Will have to learn and write them

## CONFIGURATION

By default the react application works on the port 3000;
But this can be changed since react uses environment variable.
Before running the code go to the terminal and use the command:

For macOs and Linux
## `export PORT=5000`

For windows

## `env:PORT=5000`

now when you run `npm start` the application will run on port 5000
