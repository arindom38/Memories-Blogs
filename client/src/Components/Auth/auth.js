import { useState } from "react";
import { Avatar, Button, Paper, Grid, Typography, Container } from "@material-ui/core"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import useStyles from "./style"
import Input from "./input";
const Auth = () => {
    const [showPass, setShowPass] = useState(false)
    const [isSignup,setIsSignUp] = useState(false)
    const classes = useStyles()

    const handleSubmit = () => {

    }
    const handleChange = () => {

    }
    const handleShowPass = () => setShowPass(!showPass)

    const switchMode = () =>{
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
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autofocus ishalf/>
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} autofocus ishalf/>
                                </>
                            )
                        }
                        <Input name="email" label="Email" type="email" onChange={handleChange} />
                        <Input name="password" label="Password" type={showPass ? "text": "password"} onChange={handleChange} handleShowPass={handleShowPass} />
                        { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />} 
                    </Grid>
                        <Button  fullWidth className={classes.submit} type="submit" variant="contained" color="primary">{isSignup ? "Sign Up": "Sign In"}</Button>
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