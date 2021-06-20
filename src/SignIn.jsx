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
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Elios Tech
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignIn() {

  const history = useHistory();

  const classes = useStyles();

  const [myInfo1,setInfo1]=useState({
    email:"",
    password:""
  });

  const [unauth, setUnauth] = useState({
    "unauthorized": false,
  })
  
  const submitEvent= (event)=>{
    console.log("Handling");
    axios.post("http://localhost:9090/login",
      {
        "username": myInfo1.email,
        "password": myInfo1.password
      }
    )
    .then(response => {
      history.replace("/home");
    })
    .catch(error => {
      console.log(error)
      setUnauth(() => {
        return{
          "unauthorized": true
        }
      })
    })
  };
 
  const inputEvent= (event)=>{
    const {name,value}=event.target;
    setInfo1((preValue)=>{
      return{...preValue,
      [name]:value,
    }
  });
  };

  const unauthTag = () => {
    if (unauth.unauthorized) {
      return (
        <h10 style={{color: 'red'}}>
          *Incorrect Username or Password
        </h10>
      );
    }
  }
 
  return (
    <div>
    <Navbar />
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={inputEvent}
            value={myInfo1.email}
         
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
            onChange={inputEvent}
            value={myInfo1.password}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            {unauthTag()}
          </div>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submitEvent}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/FirstSignIn" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
       </Container>
    </div>
  );
}

export default SignIn;