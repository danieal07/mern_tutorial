import { useState } from "react"

 
function Contact(){
    const[gender,setGender]=useState("");
    const[food,setFood]=useState([])
    const addfood=()=>{
        const f_name=document.getElementById("food_name").value;
        document.getElementById("food_name").value="";
        setFood((f)=>[...f,f_name]);
    }
    function removeElement(index){
          setFood(food.filter((element,i)=> i!=index))
    }
    return <>
    <h1> i am in the contact Page</h1>
     <label><input type="radio" name="gender" value="male" onClick={()=>setGender("male")}/>Male</label>
     <label><input type="radio" name="gender"onClick={()=>setGender("female")}/>Female</label>
     <h1> gender Selected : {gender}</h1>
    <br></br><br/><br/>
        
    <h1>list of Items Selected</h1>
    <ol> 
        {food.map((foods,index)=><li onClick={()=>removeElement(index)}>{foods}</li>)}
    </ol> 
    <input type="text" placeholder="enter the food" id="food_name"/>
    <button onClick={addfood}>submit</button>
    </>
}
export default Contact