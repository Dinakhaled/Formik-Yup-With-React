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
        .required('This field is required.')
  });

  render() { 
    return ( 
      <div style={{width: '400px'}}>
        <h1>Sign Up</h1>
      <Formik
          initialValues={{
          fullName: '', 
          email: '',  
          password: ''
        }}
        validationSchema={this.SignupSchema}
        onSubmit={values => {
          console.log(values);
        }}
      >
      {({errors, handleChange, handleBlur, touched}) => (
          <Form>
            <Space direction="vertical" style={{width: '100%'}}>
              <label>Full Name</label>
              {/* <Input onChange={handleChange} onBlur={handleBlur} name='fullName' /> */}
              <Field name="fullName" component={Input} />
              <ErrorMessage name="fullName">
                {errMsg => <span className="errorMessage">{errMsg}</span>}
              </ErrorMessage>
              <label>Email</label>
              <Input onChange={handleChange} onBlur={handleBlur} name='email' />
              <ErrorMessage name="email">
                {errMsg => <span className="errorMessage">{errMsg}</span>}
              </ErrorMessage>
              <label>Password</label>
              <Input onChange={handleChange} onBlur={handleBlur} name='password' />
              <ErrorMessage name="password">
                {errMsg => <span className="errorMessage">{errMsg}</span>}
              </ErrorMessage>
              <label>Confirm Password</label>
              <Input onChange={handleChange} />
              <label>Are you student?</label>
              <Switch onChange={handleChange} defaultChecked/>
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