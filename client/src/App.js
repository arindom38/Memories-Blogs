import { Container, Grow, Grid } from "@material-ui/core"
import Blogs from "./Components/Blogs/blogs"
import Form from "./Components/Form/form"
import useStyles from './styles'
//Hooks
import {useEffect,useState} from "react" 
import {useDispatch} from "react-redux" 
import {getblogs} from "./actions/blogsAct"
import Navbar from "./Components/Navbar/navbar"

function App() {
  const [currentId,setCurrentId] = useState(null)
  const styleClass = useStyles()
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getblogs()) //render page everytime blogs are updated
  },[currentId,dispatch]) 

  return (
    <Container maxWidth="lg">
      <Navbar />
      <Grow in>
        <Container>
          <Grid className={styleClass.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Blogs setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
