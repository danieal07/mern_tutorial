// const head=document.createElement("h1");
// head.innerHTML="i am in dom eeey";
// head.style.color="red";
// head.style.backgroundColor="grey";
// head.style.width="300px";
// head.style.height="300px";
// head.style.alignItems="center";
// head.style.textAlign="center";
// head.style.justifyContent="center";
// head.style.borderRadius="10px";
// document.body.appendChild(head);
function morning(){
    return "good moorning";
}
function enjoy(b){
      let x=(morning,b)=>{
        return morning()+" "+b;
    };
    return x(morning,b);
}
console.log(enjoy(40));

