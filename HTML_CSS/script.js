// types of loops
// 1.for 
// 2 while
// 3.do while
// 4.for in
// 5 for of
// 6 for each


const arr=[10,20,"hello",true,[40,50,60],{name:"sachin",age:45}];
object1={
    name:"sachin",
    age:45,
    mark:[10,20,30,40],
    greet(){
        console.log("hello");
    }
}
// for
// for(let i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);
// }
// for in (it will return the index)
// for( i in arr)
// {
//     console.log(arr[i]);
// }
// for([key,values] of Object.entries(object1))
// {
//     console.log(key,values);
// }
const a=()=>(console.log("hello"));
a();
Object.entries(object1).forEach(([key,value])=>console.log(key,value));
