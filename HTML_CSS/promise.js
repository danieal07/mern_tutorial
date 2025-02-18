function locationfinder(loc,time){
      var location=new Promise((locFound, locNotFound) => {
      setTimeout(()=>{
        if(isLocationFound(loc,time)){
            locFound("chennai");
        }
        else{
            locNotFound(loc+" Not Found");
        }
      },time);
      })
      location.then((found)=>{console.log(found)})
      .catch((notFound)=>{console.log(notFound)})

}
isLocationFound=(loc,time)=>{
    location="chennai";
    t=1000
    if(loc===location && t<=time)
        return true;
    return false
}
locationfinder("chennai",1000);