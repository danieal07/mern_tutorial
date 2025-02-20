import { useState,useRef, useEffect} from "react"
function UseRef(){
    var[text,setText]=useState("");
    var prevRender=useRef();
    useEffect(()=>{prevRender.current=text;},[text])
    
    return<>
      <h1> ia m inside the useref</h1>
      Type your Text:<input type="text" value={text} onChange={(e)=>setText(e.target.value)}></input>
      <h2> The current render Text is {text}</h2>
      <h3>the previos render text is {prevRender.current}</h3>
    </>
}
export default UseRef