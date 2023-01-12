import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useFormik} from "formik"; 
import { signUpSchema } from './schemas';



const initialValues = {
  name:"",
  email:"",
password:"",

}

const Updateitem = () => {
  

const { values,errors,handleSubmit,touched, handleChange,handleBlur} = useFormik({

initialValues: initialValues,
validationSchema: signUpSchema,
onSubmit : (values)=>{

alert("submit")

}


  })
  return (
    <>
      <div>Updateitem</div>

    
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
      <Form.Label>Name ;</Form.Label>
      <Form.Control
        type="name"
        placeholder="Enter name"
        name="name"
        autoComplete='off' 
        value={values.name} 
        onChange={handleChange}
        onBlur={handleBlur}/>

    </Form.Group>
    {
      errors.name && touched.name ?(
        <p >{errors.name}</p>
      ): null
    }


        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            autoComplete='off' 
            value={values.email} 
            onChange={handleChange}
            onBlur={handleBlur}/>

        </Form.Group>
        {
          errors.email && touched.email ?(
            <p >{errors.email}</p>
          ): null
        }
       

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"
            placeholder="Password"
            name="password" 
            autoComplete='off'
            value={values.password} 
            onChange={handleChange}
            onBlur={handleBlur}
            />
        </Form.Group>
        {
          errors.password && touched.password ?(
            <p >{errors.password}</p>
          ): null
        }

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>




    </>
  )
}

export default Updateitem