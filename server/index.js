const express =require("express")
const app=express()
// we use http module
// for the use of socket.io
// coz we have a lot doc with it
const http=require("http")
// Sever is a class
const {Server}=require("socket.io")
// cors module that help us to
// connect front with backend
const cors =require("cors")
// create http server with express

// cors should be used by the express server
// cors middelware
app.use(cors())

const server = http.createServer(app)

// to deal with socket.id(features)

// connect with the http server
// and choose the frontend that 
// we deal with it and some methods
const io=new Server(server,{
    cors:{
        origin:"http://localhost:3000/",
        methods:["GET","POST"]
    }
})

 // using the backen like a layer
// to connect events
// listen to events
io.on("connection",(socket)=>{
// verification of connection front -> back
    console.log(`user connected:${socket.id}`)

})

server.listen(3001,()=>{
    console.log("server is running")
})