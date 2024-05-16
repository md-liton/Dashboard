import React, { useEffect, useState } from 'react'
import { Button, Space, Table, message, Popconfirm  } from 'antd';
import axios from 'axios';



const AllProduct = () => {

  const [api,setApi]=useState([])

  const confirm = async(e) => {
    const deleted = await axios.post("http://localhost:3000/auth/v1/product/deleteproduct", {
      id:e
    })
    message.success(deleted.data);
    
  };
  const cancel = (e) => {
    message.error('Click on No');
  }

 
    useEffect( () => {
        async function products(){
          const response = await axios.get("http://localhost:3000/auth/v1/product/getallproduct")
          setApi(response.data)
        }
        products()
      },[api])

      const columns = [
        {
          title: 'Serial',
          dataIndex: 'index',
          key: 'index',
          render: (_,record,index) =>(
            <p>{index+1}</p>
          )
        },
        {
          title: 'Product Name',
          dataIndex: 'name',
          key: 'name',
          render: (_,record) =>(
            <p>{record.name}</p>
          )
        },
        {
          title: 'Images',
          dataIndex: 'image',
          key: 'image',
          render: (_, record) => (
            <img style={{width:'80px'}} src="https://istockbd.com/cdn/shop/products/iPhone-14-Pro-Deep-Purple-Price-in-Bangladesh.png?v=1663330585&width=600" alt="img" />
          ),
        },
        {
          title: 'Store Name',
          dataIndex: 'store',
          key: 'store',
          render: (_, record) => (
            <p>{record.store.storename}</p>
          ),
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <Button type="primary" >
                Edite
              </Button>
              
              <Popconfirm
                title="Delete the task"
                description="Are you sure to delete this task?"
                onConfirm={()=>confirm(record._id)}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
              >
                <Button  type="primary" style={{background:"red"}} >
                Delete
              </Button>
              </Popconfirm>
            </Space>
          ),
        },
      ]



  return (
    <div>
      <Table columns={columns} dataSource={api} />
    </div>
  )
}

export default AllProduct