export default (blogs = [], action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return action.payload;
        case "CREATE":
            return [...blogs, action.payload];
        case "UPDATE": //if any blog is updated updated that blog and return ,if not return all the blog without updating
            return blogs.map((blog)=>blog._id === action.payload._id ? action.payload : blog)
        default:
            return blogs;
    }
}