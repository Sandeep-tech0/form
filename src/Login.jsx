import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import App from './App'
import axios from 'axios';
const Login = () => {
    const[data,setData]=useState([])
    const[uname,setUname]=useState()
    const[password,setpassword]=useState()
    const[status,setStatus]=useState()
 async   function userLogin(e){
let  response = await axios.get(`http://192.168.0.120:3001/api/login?email=${uname}&pwd=${password}`);

console.log(response);

setData(response.data);
if(response.data.status === true)
setStatus("login");
else
setStatus("invalid");
 }
 function formHandler(e){
    e.preventDefault();
    userLogin();
 }
  return (
    <>
    <Container style={{width:"400px",backgroundColor:"lightgrey" , marginTop:"80px"}} >
    <div>
    <div>Login</div>
    


    <Form style={{backgroundColor:"lightgrey"}} onSubmit={formHandler} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={uname} onChange={(e)=>setUname(e.target.value)} type="email" placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={password} onChange={(e)=>setpassword(e.target.value)} type="password" placeholder="Password" />
      </Form.Group>
      
      {(data.status)?<App/>:status}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </Container>
    </>
  )
}

export default Login