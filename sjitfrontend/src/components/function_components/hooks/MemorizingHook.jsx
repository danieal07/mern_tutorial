import { useEffect, useState } from "react";
export const useMemorize=(key,value)=>{
    var[text,setText]=useState(()=>{
        var jsonvalue=localStorage.getItem(key)
        if(jsonvalue!==null){
            return JSON.parse(jsonvalue)
        }
        return value
    });
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify)
    },[key,value])
    return [text,setText]
}