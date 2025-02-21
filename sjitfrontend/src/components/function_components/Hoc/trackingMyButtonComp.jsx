const tracKingMyButtonComp =(Component)=>{
    
    return(props)=>{
        const handleClick=()=>{
            alert("the tracking  button")
        }
        return(
            <form onclick={handleClick}>
               Email:<input type="text"></input>
               Password:<input type="text"></input>
              <Component {...props}/>
            </form>
        )
    }
}
export default tracKingMyButtonComp