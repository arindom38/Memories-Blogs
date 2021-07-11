import { useState } from "react";
import { useDispatch } from "react-redux";
import { Avatar, Button, Paper, Grid, Typography, Container } from "@material-ui/core"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import useStyles from "./style"
import Input from "./input";
import Icon from "./icon"
import { GoogleLogin } from "react-google-login"
import {useHistory} from "react-router-dom"

const Auth = () => {
    const [showPass, setShowPass] = useState(false)
    const [isSignup, setIsSignUp] = useState(false)
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    // Google log in
    const googleSuccess = async (res) =>{
        const result = res?.profileObj // ? means if res object is not found resutl = undefined not error
        const token = res?.tokenId

        try {
            dispatch({type: "AUTH", data: {result,token}})
            history.push("/")
        } catch (error) {
            console.log(error)
        }
    }
    const googleFailure = () =>{
        console.log("Google Sign in was unsuccessful,Please try again")
    }

    //
    const handleSubmit = () => {

    }
    const handleChange = () => {

    }
    const handleShowPass = () => setShowPass(!showPass)

    const switchMode = () => {
        setIsSignUp(previsSignup => !previsSignup)
        setShowPass(false)
    }
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autofocus ishalf />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} autofocus ishalf />
                                </>
                            )
                        }
                        <Input name="email" label="Email" type="email" onChange={handleChange} />
                        <Input name="password" label="Password" type={showPass ? "text" : "password"} onChange={handleChange} handleShowPass={handleShowPass} />
                        {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                    </Grid>
                    <Button fullWidth className={classes.submit} type="submit" variant="contained" color="primary">{isSignup ? "Sign Up" : "Sign In"}</Button>
                    <GoogleLogin
                        clientId="422748301390-8h6rinjttbpljtnuqk22fhcomi89cp03.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button className={classes.googleButton} onClick={renderProps.onClick} fullWidth color="primary" disabled={renderProps.disabled} variant="contained" startIcon={<Icon />}>Google Sign In</Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy={'single_host_origin'}
                    />
                    <Grid container justify="center">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup ? "Already have an account ? Sign In " : "Don't have any account ? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
}

export default Auth;