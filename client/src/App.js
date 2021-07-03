import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core"
import bloglogo from "./images/bloglogo.png"
import Blogs from "./Components/Blogs/blogs"
import Form from "./Components/Form/form"
import useStyles from './styles'
//Hooks
import {useEffect} from "react" 
import {useDispatch} from "react-redux" 
import {getblogs} from "./actions/blogsAct"

function App() {
  const styleClass = useStyles()
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getblogs())
  },[dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar className={styleClass.appBar} position="static" color="inherit">
        <Typography className={styleClass.heading} variant="h2" align="center">Memories</Typography>
        <img className={styleClass.image} src={bloglogo} alt="Memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Blogs />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
