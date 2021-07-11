import mongoose from "mongoose"
import Users from "../Modules/Users.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const signIn = async (req,res) =>{
    const {email,password} = req.body
    try {
        const existingUser = await Users.findOne(email)
        
        if(!existingUser) return res.status(404).json({message: "User doesn't exist"})

        const ispassCorrect = await bcrypt.compare(password,existingUser.password)

        if(!ispassCorrect) return res.status(404).json({message: "Invalid Credential"})

        const token = jwt.sign({email:existingUser.email, id: existingUser._id},'test',{expiresIn: '1h'})

        res.status(200).json({result: existingUser,token:token})
    } catch (error) {
        res.status(500).json({message: "something went wrong"})
    }
}

export const signUp = async (req,res) =>{
    const {firstName,lastName,email,password,confirmPassword} = req.body

    try {
        const existingUser = await Users.findOne(email)
        
        if(existingUser) return res.status(400).json({message: "User Already exist"})

        //check password with confirmpassword
        if(password !== confirmPassword) return res.status(400).json({message: "Password doesn't match please try again"})

        const hashedPassword = await bcrypt.hash(password,12) //hash(pass, difficulty level)

        const newUser = await Users.create({email,name:`${firstName} ${lastName}`,password:hashedPassword})

        const token = jwt.sign({email:newUser.email, id: newUser._id},'test',{expiresIn: '1h'})

        res.status(200).json({result:newUser,token})
    } catch (error) {
        res.status(500).json({message: "something went wrong"})
    }
}