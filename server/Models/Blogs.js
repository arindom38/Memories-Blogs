import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    message:{
        type: String,
        require: true
    },
    creatorName: String,
    creator:{
        type: String,
        require: true
    },
    tags:{
        type: [String],
    },
    coverImage:{
        type:String
    },
    likes: {
        type: [String],
        default: []
    },
    likeCount:{
        type: Number,
        default: 0
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
})

const Blogs = mongoose.model("Blog",blogSchema)

export default Blogs