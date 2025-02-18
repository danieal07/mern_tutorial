// // types of loops
// // 1.for 
// // 2 while
// // 3.do while
// // 4.for in(return the index)(when it is used in object it return the key)
// // 5 for of(return the actual value)
// // 6 for each


const a=[60,30,"hello",'danieal',["kabi","lan"]];
// console.log(a);
object1={
      "name":"kabilan",
      "father":"baskar",
      "age":"18",
}
// for(i in a){
//     console.log(i);
// }
// const print=(a)=>{a.forEach((element)=>{console.log(element)})};
// print(a);
// for(i in object1){
//     console.log(i);
// }
const printobj=(object1)=>(Object.entries(object1).forEach(print));
function print(a){
  console.log(a)
}
printobj(object1);
// var b=30;
// console.log(b);
// let b=40;\
const b=40;
// console.log(b);
const callback=()=>console.log("call back");
function greetting(){
    console.log("welcome");
}
function goodmorning(){
    console.log("good morning");
}
function callfun(a,callback){
   console.log(a);
   callback();
}
callfun("calling function",goodmorning);
