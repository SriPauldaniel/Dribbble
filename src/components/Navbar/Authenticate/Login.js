import React from 'react';
import img1 from '../Authenticate/gallery11.jpg';

import { Form, Button, InputGroup, Col } from 'react-bootstrap';
import './Login.css'
import Google from '../Authenticate/google.png';
import Facebook from '../Authenticate/facebook.png';
function Login() {
    return (
    <div className='loginBody'>
        
      <div className="container">
        <div className="card col-lg-6 col-2">
          <h2 className='yutoo'>Login</h2>
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
              <Form.Label className='col-lg-6 mb-2'>Forgot your password?</Form.Label>
              <Form.Label className='col-lg-6 mb-2' >Don't have an account? Sign Up</Form.Label>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;