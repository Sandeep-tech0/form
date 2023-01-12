import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Additem = () => {
  return (
    <>
    <div><h1>Add item</h1></div>
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Product id.
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="number" placeholder="2" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
      <Form.Label column sm={2}>
        Product Categery
      </Form.Label>
      <Col sm={10}>
        <Form.Control type="text" placeholder="phones" />
      </Col>
    </Form.Group>
      


      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Price
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="number" placeholder="Redmi 10" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Quentity
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="number" placeholder="1000" />
        </Col>
      </Form.Group>

     

     

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Sign in</Button>
        </Col>
      </Form.Group>
    </Form>



  </>

  )
}

export default Additem