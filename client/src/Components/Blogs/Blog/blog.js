import useStyles from './style';
import { Card, CardActions, CardContent, CardMedia, Button, Typography,CircularProgress } from "@material-ui/core"
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from "moment"
import {useDispatch} from "react-redux"
import {deleteBlog,likeBlog} from "../../../actions/blogsAct"
import tmpCoverImg from "../../../images/coverImage.png"
const Blog = ({ blog,setCurrentId }) => {
    const StyleClass = useStyles()
    const dispatch = useDispatch()

    return (
        <Card className={StyleClass.card}>
            {/* {blog.coverImage ? (<CardMedia className={StyleClass.media} image={blog.coverImage} title={blog.title} />) : <CircularProgress />} */}
            <CardMedia className={StyleClass.media} image={blog.coverImage || tmpCoverImg} title={blog.title} />
            <div className={StyleClass.overlay}>
                <Typography variant="h6">{blog.creatorName}</Typography>
                <Typography variant="body2">{moment(blog.createdAt).fromNow()}</Typography>
            </div>
            <div className={StyleClass.overlay2}>
                <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(blog._id)}><MoreHorizIcon fontSize="default" /></Button>
            </div>
            <div className={StyleClass.details}>
                <Typography variant="body2" color="textSecondary" component="h2">{blog.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={StyleClass.title} variant="h5" gutterBottom>{blog.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{blog.message}</Typography>
            </CardContent>
            <CardActions className={StyleClass.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(likeBlog(blog._id))}><ThumbUpAltIcon fontSize="small" /> &nbsp; Like &nbsp; {blog.likeCount} </Button>
                <Button size="small" color="primary" onClick={() => dispatch(deleteBlog(blog._id))}><DeleteIcon fontSize="small" /> Delete</Button>
            </CardActions>
        </Card>
    );
}

export default Blog;