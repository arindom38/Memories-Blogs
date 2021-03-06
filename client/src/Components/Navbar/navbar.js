import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core"
import bloglogo from "../../images/bloglogo.png"
import useStyles from './style'
import { Link, useHistory, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import decode from "jwt-decode"

const Navbar = () => {
    const classes = useStyles()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")))
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })

        history.push("/")
        setUser(null)
    }

    useEffect(() => {
        const token = user?.token

        if (token) {
            const decodedToken = decode(token)
            if (decodedToken.exp * 1000 < new Date().getTime()) {
                handleLogout()
            }
        }
        setUser(JSON.parse(localStorage.getItem("profile")))
    }, [location])

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
                        <Button className={classes.logout} variant="contained" color="secondary" onClick={handleLogout}>Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign in</Button>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;