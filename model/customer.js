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
            let product
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
    static delete_data(id,cb){
        fs.readFile(file_path,(err,data)=>{
            let product = []
            let index
            if(!err){
                product = JSON.parse(data)
                product.forEach(element => {
                    if(element.srNo === id || element.carOwner === id || element.phoneNumber===id || element.simNo==id || element.location==id || element.vehicle == id || element.reg == id){
                        index = product.indexOf(element)
                    }
                    
                });
                product.splice(index,1)
                
                //carOwner simNo phoneNumber
    
                //push to json file
                fs.writeFile(file_path,JSON.stringify(product),(err)=>{
                    if(err){
                        console.log("an error occured")
                    }

                })
                
                

            }
        })
        cb()
       
    }
    static search(id,cb){
        fs.readFile(file_path,(err,data)=>{
            let product = []
            let index
            if(!err){
                product = JSON.parse(data)
                let new_product = product.forEach(element => {
                    if(element.srNo === id || element.carOwner === id || element.phoneNumber===id || element.simNo==id || element.location==id || element.vehicle == id || element.reg == id){
                        console.log(element)
                        cb(element)
                        
                    }
                    
                });
                
            }
        })
       

        
        //read the data from the storage
        //depending on the id,delete the data
        //write the resulting data back to the storage


    }
       


    
}
