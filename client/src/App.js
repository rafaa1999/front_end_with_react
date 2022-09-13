// io is a function from the 
// library socket.io-client
import io from "socket.io-client"
// connect to the sever socket 
const socket = io.connect("http://localhost:3001/")

function App() {
 
  const sendMessge=()=>{
  //  socket.emit()
  }
  return (
    <div>
      <input placeholder="Message"/>
      <button onClick={sendMessge}>send message</button>
    </div>
  );
}

export default App;
