const input=require("readline-sync")

// hardcode

// let arr = [1,2,3,4,5,"ravendra",true]
// console.log(arr);

//user input

// let classArr = []

// for(let i=0; i<5; i++){
//     classArr[i]=input.question("Enter: ")

//                 OR

//     // let a= input.question("Enter ")
//     // classArr.push(a)
// }

// console.log(classArr);


//nested array

// let arr2= [[1,2,3,4,[true,false]],["mahavir","krishna","ravendra"]]

// console.log(arr2[0][4][1]);














// Question- FCP052


// let arr = [23, 45, 32, 25, 46,33, 71, 90];
// console.log(arr);



  //                OR


// let arr = [23, 45, 32, 25, 46,33, 71, 90];
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }
    






// Question- FCP053


// let naturalnum = [];
// for(let i = 0; i < 20; i++){                                  // wrong
//     naturalnum[i] = input.question("Enter:");
// }
// console.log(naturalnum);










// Question- FCP054

let length = input.questionInt("Define the length of Array")
let arr =[];
for(let i =0 ; i <= length; i++){
  arr[i] = input.questionInt("Enter Number");
}
// let i = arr-1
// while(i != 0 ){
//   i--;

for(let i = length-1; i >= 0; i--){

console.log(arr[i]);
} 