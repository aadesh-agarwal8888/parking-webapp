import React,{useState,useEffect} from 'react';
import './App.css'; 
import {BrowserRouter,Switch,Route} from "react-router-dom";
import FirstSignIn from './FirstSignIn';
import SignIn from './SignIn';
import Home from './Home';
import Error from './Error';
import Navbar from './Navbar';
import About from './About';
import Contactus from './Contactus';
import Dashboard from './Dashboard';
import Slotstatus from './Slotstatus';
import Slotmanipulate from './Slotmanipulate';


const App= ()=> {
  return( <>
    <div>
      <Switch>
        <Route path="/" exact component={Home}  />
        <Route path='/FirstSignIn' component={FirstSignIn}  />
        <Route path='/SignIn' component={SignIn}  />
        <Route path='/About' component={About}  />
        <Route path='/Contactus' component={Contactus}  />
        <Route path="/home" exact component={Dashboard} />
        <Route path='/home/slots/manipulate' exact component = {Slotmanipulate}/>
        <Route path='/home/slots' exact component = {Slotstatus} />
        <Route component={Error}/>
      </Switch>
    </div>
   </>
  );
};

export default App;



 
/* function App() {
  const [myDate,setDate] =useState(new Date().toLocaleTimeString());
  const changeDate = ()=>{
    setDate(new Date().toLocaleTimeString())
  }
  setInterval(changeDate,100000);
  return (
<div>
<h1 className="h1"> { myDate } </h1>
<button onMouseEnter={changeDate} onMouseOut={changeDate}>click here</button>
</div>
    )
}*/
/*
function App(){
const [myInfo,setName]=useState({
  fname:"",
  lname:"",
  email:"",
});
const [name,setNames]=useState();
const [lname,setlName]=useState();
const [fullname,setFullNames]=useState();
const [lastname,setLastNames]=useState();

const inputEvent= (event)=>{
  console.log(event.target.value);
  setNames(event.target.value);
}
const inputEvent2= (event)=>{
  console.log(event.target.value);
  setlName(event.target.value);
}

const onsubmit= (event)=>{
   event.preventDefault();
   setFullNames(name);
   setLastNames(lname);
  alert('Form Submitted');
}
return(
<form onSubmit={onsubmit}>
<div><h1> Hello,{fullname} {lastname}  </h1>
<input type='text'
placeholder='Enter Your First Name'
name='fname'
onChange={inputEvent}
value={name}

/>
<input type='text'
placeholder='Enter Your Last Name'
name='lname'
onChange={inputEvent2}
value={lname}
/>
<input type='text'
placeholder='Enter Your Email'
name='email'
onChange={inputEvent}
defaultValue=""
/>
<button type="submit"> Click Here </button>
</div>
</form>
);
}
export default App;                 
function App() {
  const [myInfo,setInfo]=useState({
    fname:"",
    lname:"",
    email:"",
  });
  useEffect(()=>{
    document.title=myInfo.fname
  });
  const inputEvent= (event)=>{
    console.log(event.target.value);
  const {name,value}=event.target;
  setInfo((preValue)=>{
    return{...preValue,
    [name]:value,}

  });
  };
   

  const inputEvent= (event)=>{
    console.log(event.target.value);
   // setInfo(event.target.value);
   const value=event.target.value;
   const name=event.target.name;
   setInfo((preValue)=>{
if(name === 'fname'){
return{
  fname:value,
lname:preValue.lname,
email:preValue.email,};
};
if(name === 'lname'){
  return{
    fname:preValue.fname,
  lname:value,
  email:preValue.email,};
  };
  if(name === 'email'){
    return{
      fname:preValue.fname,
    lname:preValue.lname,
    email:value,};
    };
      
});
  }
  const onsubmit= (event)=>{
    event.preventDefault();
    if(myInfo.fname==="Sourav" && myInfo.lname==="Ranalkar")
    {alert('Login Successfull');}
    else{alert('Login Failed');}
    
   
 }
 

  return(
    <form onSubmit={onsubmit}>
    <div style={{margin:"25px",backgroundColor:"#281D2A"}}>
  <h1 style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>Hello,{myInfo.fname} {myInfo.lname} {myInfo.email}</h1>
<p style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
<input type='text'
placeholder='Enter Your First Name'
name='fname'
onChange={inputEvent}
value={myInfo.fname}

/></p>
<p style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
<input type='text'
placeholder='Enter Your Last Name'
name='lname'
onChange={inputEvent}
value={myInfo.lname}
/></p>
<p style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
<input type='text'
placeholder='Enter Your Division Name'
name='email'
onChange={inputEvent}
value={myInfo.email}
/>
</p>
<p style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >

<button type="submit" > Click Here </button>
</p>
    </div>
    </form>
  )
};
export default App;

*/