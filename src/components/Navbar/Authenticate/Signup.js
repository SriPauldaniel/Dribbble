import React from 'react';

import { Form, Button, InputGroup, Col } from 'react-bootstrap';
import './Login.css'
import Google from '../Authenticate/google.png';
import Facebook from '../Authenticate/facebook.png';
function Signup() {
    return (
    <div className='signupBody' >
        
      <div className="container">
        <div className="card col-lg-6 col-12">
          <h2 className='yutoo'>Signup</h2>
          <div className="row">
            <Form>
              <Button className='col-lg-6 btns mb-2' variant="outline-info">
                <img
                  alt=""
                  src={Facebook}
                  width="18"
                  height="18"
                  className="d-inline-block align-top"
                />{' '}
                Continue With Facebook</Button>{' '}
              <Button className='col-lg-6 btns mb-2' variant="outline-info">
                <img
                  alt=""
                  src={Google}
                  width="18"
                  height="18"
                  className="d-inline-block align-top"
                />{' '}
                Continue With Google</Button>{' '}
              <Form.Label className='col-lg-6 mb-2'>or continue with your email</Form.Label>

              <InputGroup >
                <Col lg={6} className="mx-auto mb-2">
                  <Form.Control
                    placeholder="Username or email"
                  />
                </Col>
              </InputGroup>
              <InputGroup>
                <Col lg={6} className="mx-auto mb-2">
                  <Form.Control
                    placeholder="Password"
                  />
                </Col>
              </InputGroup>
              <Form.Label className='col-lg-6 mb-2'>password must be 8 characters</Form.Label>
              <Form.Label className='col-lg-6 mb-2' >Already have an account? Login</Form.Label>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup;