import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core"
import bloglogo from "../../images/bloglogo.png"
import useStyles from './style'
import {Link} from "react-router-dom"

const Navbar = () => {
    const classes = useStyles()
    const user = null

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography className={classes.heading} component={Link} to="/" variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={bloglogo} alt="Memories" height="60" />
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                        <Button className={classes.logout} variant="contained" color="secondary">Logout</Button>
                    </div>
                ):(
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign in</Button>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;