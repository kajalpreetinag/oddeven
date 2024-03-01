const input = require("readline-sync")
let n = input.questionInt(" enter number: ")

if(n%2==0){
    console.log("n is even",n)
}
else{
    console.log("n is odd",n)
}