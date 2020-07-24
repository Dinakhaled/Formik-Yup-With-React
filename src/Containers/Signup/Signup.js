import React, { Component } from 'react';
import { Switch, Space, Button } from 'antd';
import { Formik, ErrorMessage, Field } from 'formik';
import { Form, Input } from 'formik-antd';
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
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required('This field is required.'),
  });

  render() { 
    return ( 
      <div style={{width: '400px'}}>
        <h1>Sign Up</h1>
      <Formik
          initialValues={{
          fullName: '', 
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
              <Input name='fullName' />
              <ErrorMessage name='fullName' />
              <label>Email</label>
              <Input name='email' value={values.email} />
              <ErrorMessage name='email' />
              <label>Password</label>
              <Input name='password' />
              <ErrorMessage name='password' />
              <label>Confirm Password</label>
              <Input name='confirmPassword' />
              <ErrorMessage name='confirmPassword' />
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