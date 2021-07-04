import useStyles from './style';
import { useState } from 'react';
import {useDispatch} from "react-redux"
import {createBlog} from "../../actions/blogsAct"
import FileBase from "react-file-base64"
import {Typography,TextField,Button,Paper}  from "@material-ui/core";
const Form = () => {
    const StyleClass = useStyles()
    const [postData,setPostData] = useState({ creator: '',title: '', coverImage: '',message:'',tags: '' })
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(createBlog(postData))
    }
    const clear = () => {

    }
    return ( 
        <Paper className={StyleClass.paper}>
            <form autoComplete="off" noValidate className={`${StyleClass.root} ${StyleClass.form}`} onSubmit={(e)=>handleSubmit(e)} >
                <Typography variant="h6">Create A Memory</Typography>
                <TextField name = "creator" variant="outlined"  label="Creator" fullWidth value={postData.creator} onChange={(e)=> setPostData({...postData,creator: e.target.value}) }></TextField>
                <TextField name = "title" variant="outlined"  label="Title" fullWidth value={postData.title} onChange={(e)=> setPostData({...postData,title: e.target.value}) }></TextField>
                <TextField name = "message" variant="outlined"  label="Message" fullWidth value={postData.message} onChange={(e)=> setPostData({...postData,message: e.target.value}) }></TextField>
                <TextField name = "tags" variant="outlined"  label="Tags" fullWidth value={postData.tags} onChange={(e)=> setPostData({...postData,tags: e.target.value}) }></TextField>
                <div className={StyleClass.fileInput}> <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({...postData,coverImage:base64})}></FileBase> </div>
                <Button className={StyleClass.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
     );
}
 
export default Form;