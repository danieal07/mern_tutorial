import axios from "axios";
import { useEffect, useState } from "react";

const UseEffectApi=()=>{
    const [post,setPost]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").
        then((res)=>setPost(res.data)).
        catch((err)=>console.log("Could'nt read the api error",err))},[])
    return<>
        <h1>This is useEffect example with Api</h1>
        <h2>we are going to fetch data from JSON placeholder and display the data</h2>
        <ol>
            {post.map((pos) => (
                <li key={pos.id}>{pos.title}</li>
            ))}
        </ol>
    </>
}
export default UseEffectApi;
