// console.log("my name is raees khan and ");
// let add=function(a,b){
//     return a+b;
// }
// console.log(add(3,4));
// let mul=function(a,b){
//     return a/b;
// }
// console.log(mul(4,2));

// function fun1(name,age){
//     this.name=name;
//     this.age=age;
//     console.log(name,age);
// }

// console.log(fun1("raees khan" ,2332));

// let myGreet=function(name,thank="thanks god !"){
//     let msg=`my name is ${name} and i am very happy on this day and i would like to say ${thank} for saving me`;
// }

// let val=myGreet("raees","thanks alot god i am not able");
// console.log(val);






// Arrays in js 
let arr=[12,13,14,15,16,17];
// arr.forEach((element,index)=>{
// console.log(`the index of ${element} number is ${index} in ${arr}`);
// });

let obj1={
    name:"raees",
    village:"bajkata",
    tehsil:"gagra"
}

function raees(arr,obj){
    if(Array.isArray(arr)){
        arr.forEach((element,index)=>{
            console.log(`the index of ${element} number is ${index} in ${arr}`);
            });
            for(let values in obj1){
                console.log(`the ${values} in obj1 =${obj1[values]}`)
            }
    }
    
}
raees(arr);

// let arr=[12,13,14,15,16,17];
// for(let i=0;i<=arr.length;i++){
//     console.log(arr[i]);
// }
// let obj={
//     name:"raees",
//     value:"high",
//     profassion:"programer",
//     heght:"7fit"
// }

// var name="raees";
// let name="raees"
//  for(let val in obj){
//   let  name="shakhalid";
//     if(name==="shakhalid"){

//         console.log(`the ${val} of obj=${obj[val]}`);
//         console.log(name);
//     }
//  }

