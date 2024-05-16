import { Alert, Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
   <div style={{width:500}}>
     <Alert
      message="Error"
      description="This is an error message about copywriting."
      type="error"
      showIcon
    />
    <Link to='/'>
    <Button style={{marginTop:10}} type="primary" danger>
      Primary
    </Button>
    </Link>
   </div>
  )
}

export default Error