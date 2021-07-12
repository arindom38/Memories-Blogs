import mongoose from "mongoose"
import Blogs from "../Models/Blogs.js"

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
         const blog = req.body
         const newblog = new Blogs({...blog,creator: req.userId,createdAt:new Date().toISOString()})
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

export const deleteBlog = async (req,res) => {
    const {id: _id} = req.params

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("No Blog Found with such id")
    }
    await Blogs.findByIdAndRemove(_id)
        .then(result=>{
            res.status(200).json({message: 'Blog is Deleted succesfully'})
        })
        .catch(err=>{
            console.log(err)
        })
}

export const likeBlog = async (req,res) => {
    const {id: _id} = req.params
    
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("No Blog Found with such id")
    }

    const blog = await Blogs.findById(_id)
    const updatedBlog = await Blogs.findByIdAndUpdate(_id,{likeCount : blog.likeCount+1},{new:true}) 

    res.json(updatedBlog)
}