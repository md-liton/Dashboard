import React, { useEffect, useState } from 'react'
import {
  Button,
  DatePicker,
  Form,
  Input,message, Popconfirm
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

const registration = () => {
  const navigate =useNavigate()

  const [registrationData,setRegistrationData]=useState({
    firstname : '',
    lastname:'',
    email:'',
    telephone:'',
    address:'',
    password:''
  })

  const [result , setResult]=useState("")
  const [open, setOpen] = useState(false);

  const handleChange =(e)=>{
    setRegistrationData({
      ...registrationData,[e.target.name]:e.target.value
    })
  }

  const handleSubmit =async()=>{
    try {
      const data = await axios.post('http://localhost:3000/auth/v1/authentication/registration' ,{
        firstname:registrationData.firstname,
        lastname:registrationData.lastname,
        email:registrationData.email,
        address:registrationData.address,
        password:registrationData.password
      })
      setResult(data.data);
      if(data.data == 'registrantion successfully done'){
        message.success(data.data + ' Please verify your email');
        setRegistrationData('')
        setTimeout(()=>{
          navigate('/login')
        },3000)
      }else{
        message.info(data.data)
      }
    } catch (error) {
      console.log(error);
      
    }
  }
  // console.log(result);

 

  return (
    <>
    
    <Form
    {...formItemLayout}
    variant="filled"
    style={{
      maxWidth: 600,
      margin:'0 auto',
      marginTop:'80px'
    }}
  >
    
    <Form.Item
      label="First Name"
      name="First Name"
      rules={[
        {
          required: true,
          message: result.data,
        },
      ]}
    >
      
      <Input placeholder='First Name' name='firstname' onChange={handleChange}/>
    </Form.Item>
    <Form.Item
      label="Last Name"
      name="Last Name"
      rules={[
        {
          required: true,
          message: result.data,
        },
      ]}
    >
      <Input placeholder='Last Name' name='lastname' onChange={handleChange}/>
    </Form.Item>
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
      <Input placeholder='Email' name='email' onChange={handleChange} />
    </Form.Item>
    <Form.Item
      label="Telephone"
      name="Telephone"
      rules={[
        {
          required: true,
          message: result.data,
        },
      ]}
    >
      <Input placeholder='Telephone' name='telephone' onChange={handleChange} />
    </Form.Item>
    <Form.Item
      label="Address"
      name="Address"
      rules={[
        {
          required: true,
          message: result.data,
        },
      ]}
    >
      <Input.TextArea placeholder='Address' name='address' onChange={handleChange}/>
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
      <Input placeholder='Password' name='password' onChange={handleChange}/>
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
        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
        Sign Up
      </Button>
      </Popconfirm>
      <Link to='/login'>
      <Button style={{marginLeft:'20px',border:'1px solid #1677ff'}}  >
        Go To Login
      </Button>
      </Link>
      
    </Form.Item>
    
  </Form>
  
    </>
  )
}

export default registration