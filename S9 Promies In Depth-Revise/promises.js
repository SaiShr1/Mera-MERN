
const fs = require ("fs")

function readFilep (pathName, options){

    const promise = new Promise(func(resolve, reject){

        fs.readFile (path, options, func(err, data){

            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
    return promise
        }
        


