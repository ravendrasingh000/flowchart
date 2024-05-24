const readlinesync = require("readline-sync");
let a=readlinesync.questionInt("enter first number:");
let b=readlinesync.questionInt("enter second number:");
let c=readlinesync.questionInt("enter third number:");
let d=readlinesync.questionInt("enter fourth number:");
let f1=0,f2=0,tmax=0
if(a<c){
    f1=a
}
else{
    f1=c
}
if(b<d){                                     
    f2=b
}
else{
    f2=d
}
if(f1>f2){
    tmax=f1
}
else{
    tmax=f2
}
console.log(tmax);
