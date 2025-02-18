async function postCode() {
    var post=new Promise((createPost) => {
        createPost("Post Created succesfully")
    },5000)
    console.log(await post);
}
postCode();