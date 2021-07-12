import useStyles from './style';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core"
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from "moment"
import { useDispatch } from "react-redux"
import { deleteBlog, likeBlog } from "../../../actions/blogsAct"
import tmpCoverImg from "../../../images/coverImage.png"
const Blog = ({ blog, setCurrentId }) => {
    const StyleClass = useStyles()
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'));

    const Likes = () => {
        if (blog.likes.length > 0) {
            return blog.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
                ? (
                    <><ThumbUpAltIcon fontSize="small" />&nbsp;{blog.likes.length > 2 ? `You and ${blog.likes.length - 1} others` : `${blog.likes.length} like${blog.likes.length > 1 ? 's' : ''}`}</>
                ) : (
                    <><ThumbUpAltOutlined fontSize="small" />&nbsp;{blog.likes.length} {blog.likes.length === 1 ? 'Like' : 'Likes'}</>
                );
        }

        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
    }

    return (
        <Card className={StyleClass.card}>
            <CardMedia className={StyleClass.media} image={blog.coverImage || tmpCoverImg} title={blog.title} />
            <div className={StyleClass.overlay}>
                <Typography variant="h6">{blog.creatorName}</Typography>
                <Typography variant="body2">{moment(blog.createdAt).fromNow()}</Typography>
            </div>
            <div className={StyleClass.overlay2}>
                {(user?.result?.googleId === blog.creator || user?.result?._id === blog.creator) && (
                    <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(blog._id)}><MoreHorizIcon fontSize="default" /></Button>
                )}
            </div>
            <div className={StyleClass.details}>
                <Typography variant="body2" color="textSecondary" component="h2">{blog.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={StyleClass.title} variant="h5" gutterBottom>{blog.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{blog.message}</Typography>
            </CardContent>
            <CardActions className={StyleClass.cardActions}>
                <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(likeBlog(blog._id))}> <Likes /> </Button>
                {(user?.result?.googleId === blog.creator || user?.result?._id === blog.creator) && (
                    <Button size="small" color="secondary" onClick={() => dispatch(deleteBlog(blog._id))}><DeleteIcon fontSize="small" /> Delete</Button>
                )}
            </CardActions>
        </Card>
    );
}

export default Blog;