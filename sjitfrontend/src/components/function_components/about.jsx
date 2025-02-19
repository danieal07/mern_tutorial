import { useState } from "react"

function about(){
    const [text, setText] = useState("");

    return (
      <div>
        <input 
          type="text" 
          value={text} 
          onChange={(event) => setText(event.target.value)} 
          placeholder="Type something..."
        />
        <p>You typed: {text}</p>
      </div>
    );
}
export default about