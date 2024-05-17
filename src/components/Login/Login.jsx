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
import { Link, useNavigate } from 'react-router-dom';
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
  const navigate =useNavigate()
  const [open, setOpen] = useState(false);
  const [loginData,setLoginData]=useState({
    email:'',
    password:''
  })

  const [result,setResult]=useState('')

  const handleLogin =(e)=>{
    setLoginData({...loginData,[e.target.name]:e.target.value})
  }

  const handleSignUp =async()=>{
    try {
      const data =await axios.post('http://localhost:3000/auth/v1/authentication/login',{
      email:loginData.email,
      password:loginData.password
    })
    // console.log(data.data.email);
    setResult(data.data);
    setResult(data.data);
    if(data.data.role == 'member'){
      message.info('This Admin Pannel for Admin and Merchent')
    }else{
      if(data.data.success == 'login successfully done'){
        message.success(data.data.success);
        setLoginData('')
        setTimeout(()=>{
          navigate('/')
        },2000)
      }else{
        message.info(data.data)
      }
    }
      
    } catch (error) {
      console.log(error);
    }
    
  }



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
          message: result.data,
        },
      ]}
    >
      <Input placeholder='Email' name='email' onChange={handleLogin} />
    </Form.Item>
    
    <Form.Item
      label="Password"
      name="Password"
      rules={[
        {
          required: true,
          message: result.data,
        },
      ]}
    >
      <Input placeholder='Password' name='password' onChange={handleLogin}/>
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
        <Button type="primary" htmlType="submit" onClick={handleSignUp} >
        Login
      </Button>
      </Popconfirm>
      <Link to='/registration'>
      <Button style={{marginLeft:'20px',border:'1px solid #1677ff'}}  >
        Go To Sign Up
      </Button>
      </Link>
    </Form.Item>
  </Form>
    </div>
  )
}

export default Login