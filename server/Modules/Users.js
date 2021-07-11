import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    naame:{
        type:String,
        require: true
    },
    email:{
        type:String,
        require: true
    },
    password:{
        type:String,
        require: true
    },
})

const Users = mongoose.model('user',userSchema)

export default Users 