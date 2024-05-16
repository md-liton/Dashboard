import React, { useEffect, useState } from 'react'
import { Button, Space, Table, Tag } from 'antd';
import axios from 'axios';
import { render } from 'react-dom';


const AllVariants = () => {

    const [variants ,setVariants]= useState([])
    const columns = [
        {
            title: 'Serial',
            dataIndex: 'Serial',
            key: 'serial',
            render:(_,record,index)=>(
                <p>{index+1}</p>
            )
          },
      {
        title: 'Variant Name',
        dataIndex: 'variant name',
        key: 'variantname',
        render:(_,record,index)=>(
            <p>{record.name}</p>
        )
      },
      {
        title: 'Images',
        dataIndex: 'imagese',
        key: 'images',
        render:(_,record,index)=>(
          <img style={{width:"40px"}} src={record.images} alt="" />
        )
      },
      {
        title: 'Main Product',
        dataIndex: 'mainproduct',
        key: 'mainproduct',
        render:(_,record,index)=>(
            <p>{record.mainproduct.name}</p>
        )
      },
      {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <Space size="middle">
            <Button type="primary" >
                    Edite
                  </Button>
            <Button  type="primary" style={{background:"red"}} >
                    Delete
                  </Button>
          </Space>
        ),
      },
    ];

    useEffect(()=>{
        async function variantData(){
            const AllVariantsData = await axios.get('http://localhost:3000/auth/v1/product/getallvariants')
            setVariants(AllVariantsData.data);
        }
        variantData()
    },[])
    console.log(variants,'alll');



  return (
    <div>
        <Table columns={columns} dataSource={variants} />
    </div>
  )
}

export default AllVariants