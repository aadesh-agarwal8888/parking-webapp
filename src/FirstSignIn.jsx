import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';  
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Navbar from './Navbar';
import { LocalGasStation } from '@material-ui/icons';
import { useHistory } from 'react-router';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/Copyright">
        Elios Tech
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
} 

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0),
  },
}));

export default function FirstSignIn() {
  const classes = useStyles();
  const [myInfo,setInfo]=useState({
    email:"",
    uniqid:"",
    password:"",
    conformpassword:""
  });
  const inputEvent= (event)=>{
    console.log(event.target.value.email);
  const {name,value}=event.target;
  setInfo((preValue)=>{
    return{...preValue,
    [name]:value,}

  });
  };
 

  return (
    <div>
      <Navbar />
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            autoFocus
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            name='email'
            onChange={inputEvent}
            value={myInfo.email}
          />
           <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="uniqid"
            label="Unique Id"
            name="uniqid"
            autoComplete="uniqid"

            name='uniqid'
            onChange={inputEvent}
            value={myInfo.uniqid}
          />
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            name='password'
            onChange={inputEvent}
            value={myInfo.password}
          />
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Confirm Password"
            type="password"
            id="confirmpassword"
            autoComplete="current-password"
            name='confirmpassword'
            onChange={inputEvent}
            value={myInfo.confirmpassword}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item xs6>
              <Link href="/SignIn" variant="body2">
               Direct Login
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={3}>
        <Copyright />
      </Box>
        </Container> 
    </div>
  );
}
