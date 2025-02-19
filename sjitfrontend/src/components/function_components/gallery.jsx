import { useState } from "react"

function Gallery(){
    const [count,setcount]=useState(0);
    return <>
        <div> <h1>Number of Count:{count}</h1></div>
        <br></br>
        <button onClick={()=>setcount(count+1)}>+</button>
        </>
}
export default Gallery