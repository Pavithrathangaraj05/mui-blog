import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form } from 'react-bootstrap';
const Formsbs = () => {
  return (
    <div>
      <Container>
        <h3>Contact from</h3>
        <Form style={{maxWidth:'500px'}}>
            <Form.Group className='mb-3'>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' placeholder='Enter Your Name'></Form.Control>

            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Phone</Form.Label>
                <Form.Control type='number' placeholder='Enter Your Name'></Form.Control>

            </Form.Group>
            <Button variant='container' color='error'>send</Button>
        </Form>
      </Container>
    </div>
  )
}

export default Formsbs
