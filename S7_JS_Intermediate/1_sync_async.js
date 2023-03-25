// 1.1Synchronus Code
// it cannot be run simultaneously
console.log("first")


console.log("second")


console.log("third")
console.log("");
// 1.2Asynchronus Code 
// it can be run simultaneously
// It doesn't stops the flow of the code, non-blocking execution
console.log("first")

setTimeout(function() {
    console.log("second")
},1)

console.log("third")
