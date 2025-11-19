/*const product ={
  name :"Ball pen",
  rating:4,
  offer:5,
  price:270,

};
console.log(product);
const profile ={
  name:"shrdha khapra",
  isfollow:false,
  followers:123,
  following:123,
  
};
console.log(profile);*/
//conditional stae,ant 
/*let age = 16; 
if (age >=18){
  console.log("you can vote");
}
if (age<18){ 
  console.log("you cannot vote");
}*/
/*let mode ="dark";

let color;
if (mode ==="dark"){
    color ="black";}
if (mode==="light" ){
  color ="white";
}
console.log(color);*/
/*let num =prompt("enter a number;");

if (num % 5 === 0){
  console.log(num, "is multiple of 5");
} else{console.log(num, "is not a multiple of 5");
} */
/*let score = 75;
let grade ;
if (score>= 90 && score<=100){
  grade="A";
}
else if ( score>=70 && score<=89){
  grade="B";
}else if (score>=60 && score<=69){
  grade="C";
}else if(score>=50 && score<=59){ 
  grade="D";
}else if(score>= 0 && score<=49){
  grade ="F";
}
console.log( "grade:",grade);*/
/*for(let i=1;i<=10;i++){
  console.log("i=",i)}*/
/* let sum=0
 for (let i=1;i<=5;i++){
  sum = sum+i; 
 } 
 console.log("sum=",sum);
 console.log("loop has ended");*/
/* let str="sumaya"; 
 for (let i of str  )
  console.log(i);*/
  /* for (let num = 0 ;num <=100; num++) {
    if ( num%2!==0)
    console.log("num=",num);
  }*/
/*let gameNum =25;
let userNum =Number(prompt("guess the number "));
while (userNum !==gameNum) {
  userNum = Number(prompt("you entered wrong number,guess again:"));
}
console.log("congratulations,you entered the right number ");*/
/*let fullName = prompt("enter your fullname without spaces" );
let userName ="@"+fullName + fullName.length;
console.log(userName );*/
/*let marks=[85,97,44,37,76,60];
let sum=0;
for (let val of marks){
  sum +=val;
}
let avg = sum /marks.length;
console.log(`avg marks of the class=${avg}`
);*/

/*let items =[250,645,300,900,50];
for ( let val of items
){console.log(val);}*/
//let foodItems =[2,3,4,5 ]
//foodItems.splice(3,2,6);
//let companies =["boomberg","microsoft","uber","IMB","netflix"]
//companies.shift ();
//companies.splice(2,1,"ola");
//companies.push("amazon");
/*function myFunction(){
  console.log("sumaya");
  console.log("happy");
}
myFunction();*/
//function sum(a,b){
  //console.log(a+b);}
//function sum();
 
function countVowels(str){
  let count = 0;

  for (const char of str) {
    if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u")
      {
        count++;
      }
}
//console.log("count");

//}countVowels("sumaya");
let arr =["dhaka","barishal","khulna"];
arr.forEach((val) ==>{
 console.log(val.toupperCase());
});
  