const fs = require("fs")

console.log("\n")

// 2.1 Asynchronus  Call Backs

fs.readFile("./dummy.txt", function(error, data){
    console.log("error : ", error)
    console.log("data : ", data)
})

console.log(fs)
// 2.2 Asynchronus Call Back with Error 

fs.readFile("./dummy.txt", function(error, data){
    console.log("error : ", error)
    console.log("data : ", data.toString())
})

// 2.3 Sync Call Back
const data = fs.readFileSync("./dummy.txt")

console.log(" sync data : ", data.toString())

console.log("\n")

// 2.4 sync with error
const data2 = fs.readFileSync("./invalid.txt")

console.log(" sync data : ", data2.toString())