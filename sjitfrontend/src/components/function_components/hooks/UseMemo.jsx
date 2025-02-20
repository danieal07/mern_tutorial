import { useState, useMemo } from "react";

import(useState);
const UseMemo = () => {
  var [number, setNumber] = useState(0);
  var [theme, setTheme] = useState(true);
  var Styling = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
  };
  
  function doublenumber(num){
    return Number(num*2);
  }
 
  return (
    <>   
      <div style={Styling}>
      <button onClick={()=>setTheme(!theme)}>toogle theme</button>
        <h1>this is Use Demo</h1>
        Number Box:
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <h3>the number is {number}</h3>
        <h3>the number is doubled {doublenumber(number)}</h3>
      </div>
    </>
  );
};
export default UseMemo;
