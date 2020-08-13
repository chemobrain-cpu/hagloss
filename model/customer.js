const path = require("path")
const fs = require("fs")
let file_path = path.join(__dirname,"..","data","data.json")


module.exports = class Customers{
    static get_data(cb){
        fs.readFile(file_path,(err,data)=>{
    if(!err){
        cb(JSON.parse(data))
    } 
})
        //read data from the file
        //if err,initiate new data
        //return in an array of file data to be uploaded in a web page

    }
    static add_data(item){
        //read data from the storage
        //add the new item to the data
        //write the whole data back to storage
        fs.readFile(file_path,(err,data)=>{
            let product = []
            if(!err){
                product = JSON.parse(data)
                product.push(item)
                fs.writeFile(file_path,JSON.stringify(product),(err)=>{
                    if(!err){
                        console.log("sucesssful")
                    }
                })
            } 
        })
    }
    static delete_data(id){
        fs.readFile(file_path,(err,data)=>{
            let product = []
            let index
            if(!err){
                product = JSON.parse(data)
                let index = product.findIndex(e=>{
                    e.id == id
                })
                if(index == -1){
                    index = product.findIndex(e=>{
                        e.phoneNumber == id
                    })
                    if(index == -1){
                        index = product.findIndex(e=>{
                            e.carOwner == id
                        })


                    }
                    if(index){
                        product.splice(index,1)
                    }

                }

                

            }
        })

        
        //read the data from the storage
        //depending on the id,delete the data
        //write the resulting data back to the storage


    }
    static modify_data(item){
        //read data from the storage
        //replace the specific data
        //return data back to the storage


    }
}
