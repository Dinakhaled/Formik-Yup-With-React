import React, { Component } from 'react';
import { Input, Switch, Space, Button } from 'antd';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as yup from 'yup';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  SignupSchema = yup.object().shape({
    fullName: yup.string().required('This field is required.'), 
    email: yup.string().email().required('This field is required.'), 
    password: yup.string()
      .min(6, 'Password is too short.')
      .max(10, 'Password is too long.')
      .required('This field is required.'),
    confirmPassword: yup.string()
      .min(6, 'Password is too short.')
      .max(10, 'Password is too long.')
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('This field is required.'),
  });

  render() { 
    return ( 
      <div style={{width: '400px'}}>
        <h1>Sign Up</h1>
      <Formik
          initialValues={{
          fullName: 'Dina Elghndour', 
          email: '',  
          password: '',
          confirmPassword: ''
        }}
        validationSchema={this.SignupSchema}
        onSubmit={values => {
          console.log(values);
        }}
      >
      {({errors, handleChange, handleBlur, touched, values}) => (
          <Form>
            <Space direction="vertical" style={{width: '100%'}}>
              <label>Full Name</label>
              <Input onChange={handleChange} onBlur={handleBlur} name='fullName' value={values.fullName} />
              <span className='errorMessage'>{errors.fullName && touched.fullName && errors.fullName}</span>
              <label>Email</label>
              <Input onChange={handleChange} onBlur={handleBlur} name='email' value={values.email} />
              <span className='errorMessage'>{errors.email && touched.email && errors.email}</span>
              <label>Password</label>
              <Input onChange={handleChange} onBlur={handleBlur} name='password' />
              <span className='errorMessage'>{errors.password && touched.password && errors.password}</span>
              <label>Confirm Password</label>
              <Input onChange={handleChange} onBlur={handleBlur} name='confirmPassword' />
              <span className='errorMessage'>{errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}</span>
              <Button htmlType='submit' style={{textAlign: 'center', width: '100%'}} type='primary'>Sign up</Button>
            </Space>
          </Form>
      )}
      </Formik>
      </div>
    );
  }
}
 
export default Signup;