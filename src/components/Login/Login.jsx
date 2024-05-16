import React, { useState } from 'react'
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Select,
  TreeSelect, message, Popconfirm, Switch
} from 'antd';
import axios from 'axios';
const { RangePicker } = DatePicker;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};


const Login = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Form
    {...formItemLayout}
    variant="filled"
    style={{
      maxWidth: 600,
      margin:'0 auto',
      marginTop:'80px'
    }}
  >
    <h1 style={{textAlign:'center'}}>Login</h1>
    <Form.Item
      label="Email"
      name="Email"
      rules={[
        {
          required: true,
          message: 'asdfasf',
        },
      ]}
    >
      <Input placeholder='Email' name='email'  />
    </Form.Item>
    
    <Form.Item
      label="Password"
      name="Password"
      rules={[
        {
          required: true,
          message: 'asdfsdf',
        },
      ]}
    >
      <Input placeholder='Password' name='password' />
    </Form.Item>

   





    <Form.Item
      wrapperCol={{
        offset: 6,
        span: 16,
      }}
    >
      
      <Popconfirm
        open={open}
        okText="Yes"
        cancelText="No"
      >
        <Button type="primary" htmlType="submit" >
        Login
      </Button>
      </Popconfirm>
    </Form.Item>
  </Form>
    </div>
  )
}

export default Login