import React, { useState } from "react";
import FileUpload from "./components/file-upload/file-upload.component";
import Navbar from './components/navigation/navbar/navbar';
import 'antd/dist/antd.css'; 
import { Button, message } from "antd";

function App() {
  const [newUserInfo, setNewUserInfo] = useState({
    profileImages: []
  });

  const updateUploadedFiles = (files) =>
    setNewUserInfo({ ...newUserInfo, profileImages: files });

  const handleSubmit = (event) => {
    event.preventDefault();
    //logic to create new user...
  };

  const showSuccessMessage = ()=>{
    message.success("Files uploaded succesfully")
  }

  const compareImages = ()=>{
    message.success("Files uploaded succesfully")
  }

  return (
    <div>
      <Navbar />
      <div style={{display:'flex', 'margin-top':'5%'}}>
      <div style={{width:'50%', margin: '10px'}}>

      <FileUpload
          accept=".jpg,.png,.jpeg"
          label="Upload First Image"
          multiple
          updateFilesCb={updateUploadedFiles}
        />
      </div>


    <div style={{width:'50%', margin: '10px'}}>
    <FileUpload
          accept=".jpg,.png,.jpeg"
          label="Upload Second Image"
          multiple
          updateFilesCb={updateUploadedFiles}
        />
    </div>

      </div>
      <form onSubmit={handleSubmit}>
      <div style = {{textAlign:"center"}}>

      <Button  type="primary" onClick={showSuccessMessage}>
              Upload and compare images
            </Button>
        
      </div>

      </form>
    </div>
  );
}

export default App;
