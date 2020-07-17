import React, { Component } from 'react';
import { Input, Switch, Space } from 'antd';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <form style={{width: '400px'}}>
        <h1>Sign Up</h1>
        <Space direction="vertical" style={{width: '100%'}}>
          <label>Full Name</label>
          <Input />
          <label>Email</label>
          <Input />
          <label>Password</label>
          <Input />
          <label>Confirm Password</label>
          <Input />
          <label>Are you student?</label>
          <Switch defaultChecked/>
        </Space>
      </form>
    );
  }
}
 
export default Signup;