import { useState } from "react"

function Child1(){
    var [num,setNum]=useState(0);
    return <>
    <h1> I am in child1</h1>
    Enter the number<input type ="number"  value={num} onChange={(e)=>setNum(e.target.value)}/> 
    <h1>the entered value is : {num} </h1>
    </>
}
export default  Child1