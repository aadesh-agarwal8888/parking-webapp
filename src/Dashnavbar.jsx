import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';
import park6 from './image/park6.png';
import park7 from './image/park7.png';
import park8 from './image/park8.png';
import Modal from 'react-modal';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';





const drawerWidth = 240;
const modstyle={
  content:{
    top:'50%',
  left:'50%',
  right:'auto',
  bottom:'auto',
  marginRight:'-50%',
  transform:'translate(-50%,-50%)',
}}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function Dashnavbar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
const [modalisopen,setmodalopen]=useState(false);
const [myrate,changerate]=useState({
  rate:"",
  
  
});
const inputEvent= (event)=>{
  console.log(event.target.value);
const {name,value}=event.target;
changerate((preValue)=>{
  return{...preValue,
  [name]:value,}

});
};
let cost   //cost to be used for database
const modfunction=()=>{
  setmodalopen(true);
  cost=myrate.rate;
  console.log(cost);
  
};


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Elios Tech
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Home Screen', 'Change rate', 'Maintainance', 'Support','About us'].map((text, index) => (
            <ListItem button key={text}>
              
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
    
    
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <div className="container" style={{margin:"auto"}} >
  <div className="row">
    <div className="col-sm">
      <div class="card" style={{padding:'30px'}}>
      <img class="card-img-top" src={park8} alt="Card image cap" height="200px"/>
  <div class="card-body">
    <Modal isOpen={modalisopen} style={modstyle}>
      <h2>Change Rate</h2>
      <p>You can change the rate for parking per hour</p>
      <form className={classes.form} noValidate>
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="rate"
            label="Enter Updated Rate"
            name="rate"
            autoComplete="email"
            autoFocus
            onChange={inputEvent}
            value={myrate.rate}
         
          />
        </form>
            <button className="btn btn-primary" onClick={()=> setmodalopen(false)}>Submit</button>
    </Modal>
    <h5 class="card-title">Change Rate</h5>
    <p class="card-text">You can easily change your rate for parking</p>
    <button className="btn btn-primary" onClick={()=> modfunction()}>Change Rate</button>
  </div>
</div>

    </div>
    <div className="col-sm">
      <div class="card" style={{padding:'30px'}}>
  <img class="card-img-top" src={park7} alt="Card image cap" height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Show Parking Status</h5>
    <p class="card-text">Select this to easily check status for parking slots</p>
    <button className="btn btn-primary">Check Status</button>
  </div>
</div>

    </div>
    <div className="col-sm">
      <div class="card" style={{padding:'30px'}}>
  <img class="card-img-top" src={park6} alt="Card image cap" height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Maintainance</h5>
    <p class="card-text">Now you can easily block the slots for maintanance purpose</p>
    <a href="#" class="btn btn-primary">Maintain Slots</a>
  </div>
</div>

    </div>
    
  </div>
</div>
     <div className="text-center text danger text-capitalize my-5">
        <h1> 1000 vehicles have been registered uptill now</h1>
     </div>
      </main>
    </div>
  );
}
