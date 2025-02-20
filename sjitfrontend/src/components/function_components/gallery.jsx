import { useState } from "react"

function Gallery(){
    const [count,setcount]=useState(0);
    const styling={
        width:"50px",
        height:"50px",
        padding:"10px",
        margin:"30px",
    }
    return <>
        <div> <h1>Number of Count:{count}</h1></div>
        <br></br>
        <button style={styling} onClick={()=>setcount(count+1)}>+</button>
        <button style={styling} onClick={()=>setcount(count-1)}>-</button>
        <button style={styling} onDoubleClick={()=>setcount(0)}>reset</button>
        </>
}
export default Gallery