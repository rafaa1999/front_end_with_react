import { useEffect,useState } from "react"
// io is a function from the 
// library socket.io-client
import io from "socket.io-client"
// connect to the backend 
const socket = io.connect("http://localhost:3001")



function App() {

  // for room state
  const [room,setRoom]=useState("")


  // for getting the message and sending it
  const [message , setMessage]=useState("")
  const [messageReceive , setMessageReceive]=useState("")

  const joinRoom= ()=>{
    if(room !==""){
            socket.emit("join_room",room)
    }
  }

  const sendMessge=()=>{
    // emit just for send events
    //emit("event_name","message")
    socket.emit("send_message",{message,room})
  }
   // get the date from the server
  useEffect (()=>{
    socket.on("receive_message",(data)=>{
        setMessageReceive(data.message)
    })
  },[socket])

  return (
    <div>
      <input placeholder="Room" onChange={(e)=>{
          setRoom(e.target.value)
      }}/>
      <button onClick={joinRoom}>join room</button>
      <input placeholder="Message" onChange={(e)=>{
          setMessage(e.target.value)
      }}/>
      <button onClick={sendMessge}>send message</button>
      <h1>message</h1>
        {messageReceive}
    </div>
  );
}

export default App;
