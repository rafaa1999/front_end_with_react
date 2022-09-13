import { useEffect,useState } from "react"
// io is a function from the 
// library socket.io-client
import io from "socket.io-client"
// connect to the sever socket 
const socket = io.connect("http://localhost:3001")



function App() {

  const [message , setMessage]=useState("")
  const [messageReceive , setMessageReceive]=useState("")
  const sendMessge=()=>{
    // emit just for send events
    //emit("event_name","message")
    socket.emit("send_message",{message})
  }
   // get the date from the server
  useEffect (()=>{
    socket.on("receive_message",(data)=>{
        setMessageReceive(data.message)
    })
  },[socket])

  return (
    <div>
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
