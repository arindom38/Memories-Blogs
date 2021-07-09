import {TextField,Grid,InputAdornment,IconButton} from "@material-ui/core"
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"
//a commonn tempalte for all kind of inputs
const Input = ({name,handleChange,label,type,ishalf,autoFocus,handleShowPass}) => {
    return ( 
        <Grid item xs={12} sm={ishalf ? 6 :12}>
            <TextField
                 name={name}
                 onChange={handleChange}
                 variant="outlined"
                 required
                 fullWidth
                 label={label}
                 autoFocus={autoFocus}
                 type={type}
                // icons for showing suggestions
                 InputProps={name === "password" ? {
                     endAdornment : (
                         <InputAdornment position="end">
                            <IconButton onClick={handleShowPass}>
                                {type === "password" ? <Visibility /> : <VisibilityOff/>}
                            </IconButton>
                         </InputAdornment>
                     )
                 }:null}
            />
        </Grid>
     );
}
 
export default Input;