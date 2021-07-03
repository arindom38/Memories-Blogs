import useStyles from './style'
import Blog from "./Blog/blog"
import { useSelector } from 'react-redux'
const Blogs = () => {
    const StyleClass = useStyles()
    const blogs = useSelector((state)=> state.blogs) 

    console.log(blogs)

    return ( 
        <div className="Blogs">
            <h2>ALl Blogs :</h2>
            <Blog />
        </div>
     );
}
 
export default Blogs;