import { Button, Input ,Select, message, Popconfirm} from 'antd'
import React, { useEffect, useState } from 'react'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState,convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import axios from 'axios';

const confirm = (e) => {
  console.log(e);
  message.success('Click on Yes');
};
const cancel = (e) => {
  console.log(e);
  message.error('Click on No');
};


const AddProduct = () => {

    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [productName,setProductName] = useState('')
    const [storeName,setStoreName]=useState([])
    const [price,setPrice]=useState('')
    const [storee,setStoree]=useState('')
    

    
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const tagRender = (props) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };

  };

  useEffect(() => {
    async function fetchData() {
      let arr = []
      const allstore = await axios.get('http://localhost:3000/auth/v1/merchent/allstore')
      // setAllStoreData(allstore.data)


      allstore.data.map((item) => {
        arr.push({
          value: item._id,
          label: item.storename
        })
      })
      setStoreName(arr)
    }
    fetchData()
  }, [])

  const handleProductName =(e)=>{
    setProductName(e.target.value);
  }


  const handleSave =async()=>{

    const productUpload = await axios.post('http://localhost:3000/auth/v1/product/creatproduct',
      {
        name: productName,
        description: draftToHtml(convertToRaw(editorState.getCurrentContent())),
        store:storee,
      }
  )
  message.success(productUpload.data);
  // setTimeout(() => {
  //   location.reload()
  // }, 2000);

}

  const handleCancel =()=>{
    location.reload()
  }



  
  return (
    <div>
        <h2>Product Name</h2>
        <Input placeholder="input your product name" onChange={handleProductName}/>
        <h2>Description</h2>
        <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
      />
        <h2>Price</h2>
        <Input placeholder="input your product name"  onChange={(e)=>setPrice(e.target.value)} />
      <h2>store Name</h2>
      <Select
      onChange={(e)=>setStoree(e)}
        mode="single"
        tagRender={tagRender}
        style={{
          width: '70%',
        }}
        options={storeName}
      />

  <div style={{marginTop:'15px'}}>
  {/* <Popconfirm
    title="Delete the task"
    description="Are you sure to delete this task?"
    onConfirm={handleSave}
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
  >
    <Button danger>Delete</Button>
  </Popconfirm> */}
  <Button onClick={handleSave} type="primary">Save</Button>
  <Button type="primary"  danger style={{marginLeft:'15px'}} onClick={handleCancel}>Cancel</Button>
  </div>
    </div>
  )
}

export default AddProduct