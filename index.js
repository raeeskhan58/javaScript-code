// let name ="raees";
// let age=23;
// let myGreet=function(name,age){
//     if(age===23){
//         console.log(name,age)
//     }
// }
// let val=myGreet(name,age);
// console.log(val);

// let myObj={
//     name:"raees",
//     age:23,
//     game:function(){
//         return "gta"
//     }
// }
// console.log(myObj.game());


// // scopes in js

// var i=0;
// console.log(i);
// if(i==0){
//     let i=23;
//     console.log(i);
// }

// let name1=function(name,age){
//        console.log(`my name is ${name} and my age is ${age}`);
// }
// name1("raees",23);
// let val1=name1;
// console.log(val1);


// let a =window;
// window.prompt("hellow raees");
// console.log(a);





// let str='javaScript';
// let links=document.links;
// console.log(links);
// let href;
// Array.from(links).forEach(function(element){
//   href=element.href;
//   if(href.includes(str)){
//     console.log(links);
//   }
//   else{
//     console.log("javascript links not found");
//   }
// });


// let str='phython';
// let links=document.links;
// console.log(links);
// let href;
// Array.from(links).forEach((element)=>{
//      href=element.href;
//      if(href.includes(str))
//      console.log(href);
//      else{
//       console.log("links not found");
//      }
// });
// function func1(name,address,age){
//           //  console.log(name,address,age);
// }
// func1("raees","bajkata");
// let arr=[12,13,14,15,16,17,18,19,20];
// let num=arr.toString();
// arr.pop();
// arr.unshift(1232);
// delete arr[1];
// arr[1]=123232
// console.log(arr);
// let arr1=[1,2,3];
// let arr2=[4,5,6];
// let arr3=arr1.concat(arr2);
// console.log(arr3);

// let arr=[1,2,3,45,6,7,8,9,10,11,12,13,14,15];
// arr.splice(1,8,1250,1260,1270);
// console.log(arr);

// let students=[{name:"raeeskhan","status":"single"}];
// // for(let i=0;i<=students.length;i++){

// //     console.log(students[i]);
// // }
// console.log();
// console.log(students);



// const arr = [
//     {"name": "Rahul", "score": 89},
//        {"name": "Vivek", "score": 88},
//        {"name": "Rakesh", "score": 75},
//        {"name": "Sourav", "score": 82},
//        {"name": "Gautam", "score": 91},
//        {"name": "Sunil", "score": 79},
//     ];
//     console.log(arr);
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         console.log(element);
        
//     }


//     let numberArr = [
//         ["raees", 20, 60,34,35] ,
//         ["shakhalid", 10, 52],
//         ["salman", 5, 24],
//         ["nazar", 28, 43],
//         ["israr", 16, 51]
//       ];
      
//       var sum = 0;
//       numberArr.forEach((row) => {
//         row.forEach((element) => {
//         });
//     });
//     console.table(numberArr);
//       console.log("The sum of all elements in the array is:" + sum); // returns "The sum of all elements in the array is: 380"


// let num=[12,13,14,15,16];
// console.log(num.length);
// delete num[0]; //here we use the delete operator which dont effect on the length of an array
// console.log(num.length);
// let raees=(a,b)=>{
//   return a-b;
// }
// let arr1=[2,4,7,3,12,1,9,90,123,124];
// arr1.sort(raees);
// console.log(arr1);

// let arr3=[12,13,14,15,16,17,18]
// let deletedVal=arr3.splice(1,3,122,123,124);
// console.log(deletedVal);

// let arr=[1,2,3,4,5,6];
// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   console.log(element);
  
// }
// arr.forEach((element)=>{
// console.log(element*element);
// })

// let arr=[10,20,30,40,50,60,70];
// for(let i of arr){

  // console.log(i)
// }
// for(let i of arr){
//   console.log(i);
// }
// for(let i in arr){
//   console.log(i);
// }
// let students=[name=>"raees",village=>"bajkata"];
// for(let item of students){
//   console.log(item);
// }
// for(let item in students){
//   console.log(item);
// }

// let obj={
//   name:"raees",
//   age:23,
//   tehsil:"gagra"
// }
// for(let key in obj){
//   console.log(`the ${key} of the object is ${obj[key]}`);
// }
// for(let i of obj){
//   console.log();
// // }
// function compare(a,b){
//   return a-b;
// }

// let arr=[22,23,4,1,5,6,89,30];
// let a=arr.map((val)=>{
//   return val+1;
  
  
// });
// console.log(a);
// let arr2=[1,2,323,43,32,23,121,21,10,11,12,13,14,15,16];
//  let b=arr.filter((val)=>{
//    return val<21;
   
// });
// console.log(b);

// let arr33=["raees","shakhalkid","israr","salman","arbaz"];
// let a22=arr33.filter((val)=>{
//    return val.startsWith('s')&&val.endsWith('d');
// });
// console.log(a22);

// let arr44=["raees","shakhalkid","israr","salman","arbaz"];

// let a4=arr44.map((val)=>{
//   if(val.startsWith('s')&&val.endsWith('n')){
//     return val;
//   }
  
// });
// console.log(a4);


// // now this is for array reduce method

// let arr55=[1,2,3,4,5,2,3,4,51];
// let a5=arr55.reduce((h1,h2,h3)=>{
//     return h3+2
// });
// console.log(a5)


// let arr=[1,2,3,4,5,6];
// let a=prompt("enter the number");
// a=Number.parseInt(a);
// arr.push(a);
// console.log(arr);

// let arr2=[12,13,14,15,16];
// let a;
// do{
//   a=prompt("enter your number loser");
//   a=Number.parseInt(a);
//   arr2.push(a);
// }
// while(a!=0);
// console.log(arr2);

// let arr2=[12,23,42,32,89,90,100,20,50,10,20];

// let a=arr2.filter((val)=>{
//  return val%10==0;
 

// })
// console.log(a);
// function compare(a,b){
//   return a-b;
// }
// arr2.sort(compare);

//   console.log(arr2);



// console.log(arr2);

// console.log(console);
// let name='raees'
// console.assert(5>20);
// // alert("you are doing wrong");
// // prompt("my name is raees khan")
// confirm("you are reaees are not");
// console.log(document)
console.log(document);
document.body.style.backgroundColor="red";

