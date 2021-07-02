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
         await Blogs.save(newblog)
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