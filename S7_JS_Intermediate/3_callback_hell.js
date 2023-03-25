const fs = require("fs")

fs.readFile("./dummy.txt", function(error, data){
    console.log("error :", error)
    console.log("data: ", data.toString())

    const firstData = data

     fs.readFile("./random.txt", function(error, data){
     console.log("error :", error)
        console.log("data: ", data.toString())

     const secondData = data

        fs.readFile("./some.txt", function(error, data){
        console.log("error :", error)
         console.log("data: ", data.toString())

         console.log("merged data: ", firstData + secondData + data)

        })

    })
})

console.log("\n")


// sync

const data1 = fs.readFileSync("./dummy.txt")
const data2 = fs.readFileSync("./random.txt")
const data3 = fs.readFileSync("./some.txt")

console.log("merged data: ", data1 + data2 + data3)

console.log("\n")

// different way to do for async

let dataOne, dataTwo
console.log("\n underlined values: ", dataOne, dataTwo)

fs.readFile("./dummy.txt", function (error, data) {
    dataOne = data.toString()
})

fs.readFile("./random.txt", function (error, data) {
    dataTwo = data.toString()
})

console.log(" different merged data : ", dataOne + dataTwo)