const {Router } = require("express")
const multer=require("multer")
const {Readable } = require("stream")
const readline= require("readline")
const multerConfig=multer()

const router= Router()

router.post("/",multerConfig.single("file") ,async(req,res)=>{
console.log(req.file.buffer.toString("utf-8"))
const file = req.file
const buffer = file.buffer

const ReadeableFile = new Readable()

ReadeableFile.push(buffer) 
ReadeableFile.push(null)

const productLine = readline.createInterface({
    input:ReadeableFile
 })

 for await(const line of productLine){
    const lineSplit = line.split(",")[0]
    
    console.log(lineSplit)
}

return res.send()
 })

 
 module.exports= router