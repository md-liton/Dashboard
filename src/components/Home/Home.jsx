import React, { useEffect } from 'react';
import { FunnelPlotOutlined, PlusSquareOutlined, ProductOutlined,  SettingOutlined, UserOutlined, UserSwitchOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Col, Menu, Row } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Home = () => {

  const navigate = useNavigate()
  const userData =useSelector(state=>state.userDetails.value)







  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    userData.payload.data.role == 'admin' &&
    getItem('Users ', 'sub1', <UsergroupAddOutlined style={{fontSize:30}} />, [
      getItem('Machent', '1' ,<UserSwitchOutlined style={{fontSize:20}} />),
      getItem('User', '2',<UserOutlined style={{fontSize:20}}/>)
    ]),
    getItem('Product', 'sub2', <ProductOutlined style={{fontSize:25}}/>, [
      getItem('All Product', '/allproduct',<FunnelPlotOutlined style={{fontSize:20}}/>),
      getItem('Add Product', '/addproduct',<PlusSquareOutlined style={{fontSize:20}}/>),
      getItem('All Variants', '/allvariants',<PlusSquareOutlined style={{fontSize:20}}/>),
    ]),
    {
      type: 'divider',
    },
    getItem('Catagory', 'sub3', <SettingOutlined style={{fontSize:30}} />, [
      getItem('Option 9', '5'),
      getItem('Option 10', '6')
    ]),
    {
      type: 'divider',
    },
    getItem('Navigation Three', 'sub4', <SettingOutlined  />, [
      getItem('Option 9', '7'),
      getItem('Option 10', '8'),
    ])
  ];






  useEffect(()=>{
    if(!userData){
      navigate('/login')
    }
  },[])

    const onClick = (e) => {
      navigate(e.key);
      };


  return (
    <div>
          
      <Row>
        <Col span={5}>
        <Menu
              onClick={onClick}
              style={{
                  width: 256,
              }}
              mode="inline"
              items={items}
          />
        </Col>
        <Col span={19}><Outlet/></Col>
      </Row>
    </div>
  )
}

export default Home