console.log("my name is raees khan and ");
let add=function(a,b){
    return a+b;
}
console.log(add(3,4));
let mul=function(a,b){
    return a/b;
}
console.log(mul(4,2));

function fun1(name,age){
    this.name=name;
    this.age=age;
    console.log(name,age);
}

console.log(fun1("raees khan" ,2332));

let myGreet=function(name,thank="thanks god !"){
    let msg=`my name is ${name} and i am very happy on this day and i would like to say ${thank} for saving me`;
}

let val=myGreet("raees","thanks alot god i am not able");
console.log(val);