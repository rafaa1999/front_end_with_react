// io is a function from the 
// library socket.io-client
import io from "socket.io-client"
// connect to the sever socket 
const socket = io.connect("http://localhost:3001")

function App() {
 
  const sendMessge=()=>{
    // emit just for send events
    //emit("event_name","message")
   socket.emit("send_message",{message:"hello"})
  }
  return (
    <div>
      <input placeholder="Message"/>
      <button onClick={sendMessge}>send message</button>
    </div>
  );
}

export default App;
