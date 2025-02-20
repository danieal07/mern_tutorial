function Login(){
    const inputbox={
        width:"400px",
    }
    return <>
    <h1>LOGIN</h1>
    <label for="name">Enter the email:</label>
    <input style={inputbox}type="email" className="name" placeholder="ENTER THE EMAIL"></input>
    <br></br>
    <br></br>
    <label for="name">Enter the password :</label>
    <input style={inputbox}type="password" className="name" placeholder="ENTER THE PASSWORD"></input>
    </>
}
export default Login