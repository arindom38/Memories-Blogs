import useStyles from './style'
import Blog from "./Blog/blog"
import {Grid,CircularProgress} from "@material-ui/core"
import { useSelector } from 'react-redux'

const Blogs = ({setCurrentId}) => {
    const StyleClass = useStyles()
    //fetching data using redux selector
    const blogs = useSelector((state)=> state.blogs) 

    return ( 
       !blogs.length ? <CircularProgress /> : (
           <Grid className={StyleClass.container} container alignItems="stretch" spacing={3}>
            {blogs.map((blog)=>(
                <Grid key={blog._id} item xs={12} sm={6} md={6}>
                    <Blog blog={blog} setCurrentId={setCurrentId} />
                </Grid>
            ))}
           </Grid>
       )
     );
}
 
export default Blogs;