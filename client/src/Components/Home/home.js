import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { getblogs } from "../../actions/blogsAct"
import { Container, Grow, Grid } from "@material-ui/core"
import Blogs from "../Blogs/blogs"
import Form from "../Form/form"
import useStyles from "./style"

const Home = () => {
    const [currentId, setCurrentId] = useState(null)
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getblogs()) //render page everytime blogs are updated
    }, [currentId, dispatch])
    return (
        <Grow in>
            <Container>
                <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Blogs setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
}

export default Home;