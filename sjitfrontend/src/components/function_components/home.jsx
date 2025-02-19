function Home(properties){
    var styling={
        textAlign:"center",
        backgroundColor:"blue",
        color:"red",
        margin:"0px"

    }
    return <>
    <div style={styling}>
        <h1>HOME PAGE</h1>
        <br></br>
        <h1 style={{color:"white"}}>Props:{properties.properties}</h1>
    </div>
    </>
    
}
export default Home;