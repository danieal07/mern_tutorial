import { useState } from "react";
function UseCallback(){
  var [number, setNumber] = useState(0);
  var [theme, setTheme] = useState(true);
  var Styling = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
  };
  
  function doublenumber(num){
    return Number(num*2);
  }
  var numlist=()=>{
       return [number*2,number*4,number*6]
  }
  return (
    <>   
       {/* <img src=""></img> */}
      <div style={Styling}>
      <button onClick={()=>setTheme(!theme)}>toogle theme</button>
        <h1>this is Use Demo</h1>
        Number Box:
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <h1>the input value is :{number}</h1>
        <h1>the input value of numlist : 
            {numlist().map((element,index)=><h2 key={index}>{element}</h2>)}
        </h1>
       
      </div>
    </>
  );
}
export default UseCallback