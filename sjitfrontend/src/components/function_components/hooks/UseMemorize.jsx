 import { useMemorize } from "./MemorizingHook"
const useMemorize=()=>{
      var[custID,setCustId]=useMemorize("customerID","");
      var[pass,setpass]=useMemorize("password","");
     return(
        <div>
            <h2> this is a custom hook using UseState</h2>
            CustomerID:<input type="text" value={custID} onChange={(e)=>setCustId(e.target.value)}></input>
            Password:<input type="text" value={pass} onChange={(e)=>setpass(e.target.value)}></input>
            <button>Login</button>
        </div>
     )
}
export default useMemorize