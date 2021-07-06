import mongoose from "mongoose"
import Blogs from "../Modules/Blogs.js"

export const getblogs = async (req,res) =>{
    await Blogs.find()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err=>{
            res.status(404).json({ errMssg: err.message})
        })
}

export const createblogs =async (req,res) =>{
     if(req.body != null && req.body != ''){
         const newblog = new Blogs(req.body)
         await newblog.save()
         .then(result=>{
             res.status(201).json(result)
         })
         .catch(err=>{
             res.status(409).json({errMssg: err.messeage})
         })
     }
     else{
         res.status(404).json({ errMssg: "No Data Recieve"})
     }
}

export const updateBlog = async (req,res)=>{
    const { id: _id } = req.params
    const blog = req.body

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("No Blog Found with such id")
    }
    await Blogs.findByIdAndUpdate(_id,{...blog,_id},{new : true})
        .then(result=>{
            res.json(result)
        })
        .catch(err=>{
            console.error(err.message)
        })
}