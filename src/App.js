import React, { useState } from "react";
import FileUpload from "./components/file-upload/file-upload.component";
import Navbar from './components/navigation/navbar/navbar';
import 'antd/dist/antd.css'; 
import { Button, message } from "antd";
import axios from 'axios';

function App() {
  const [newUserInfo, setNewUserInfo] = useState([]);

  const updateUploadedFiles = (files) =>
  {
    console.log(files);
    // setNewUserInfo({ ...newUserInfo, profileImages: files });
    setNewUserInfo(prevArray => [...prevArray, files])
    // setTheArray(prevArray => [...prevArray, newValue])

  }
 
  const handleSubmit = (event) => {
    event.preventDefault();
    //logic to create new user...
    // console.log(event);
    // console.log(newUserInfo);
    const formData = new FormData();
    newUserInfo.forEach(file=>{
      formData.append("arrayOfFilesName", file);
    });

    console.log("Form data is"+ formData);
    axios({
      method: "POST",
      url: 'localhost:5000/matchFiles',
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
  };


  // const onFormSubmit = (e)=>{
  //   e.preventDefault();
  //   let payload = this.state;
  //   console.log("in onFormSubmit!!! with state: ", this.state, "and payload: ", payload);
  //   axios.post('/api/art', payload)
  //   .then(function(response){
  //   console.log('saved successfully')
  // }); 


  const compareImages = ()=>{

    try {

      fetch('http://localhost:8081/imageMatch', {method: 'POST', headers: {
        'Content-Type': 'application/json',
      }})
      .then(response => response.json())
      .then(json => {
    
        if(json.success){
          message.success("Images are a Match")
        } else{
          message.success("Images are not a match")
        }
        
      }
      
      )
        .catch((error)=>{
          message.error("Internal Error");
        })
    } catch (error) {
      message.error("Internal Error");
    }


  
 
    
    console.log(newUserInfo)
  //   setTimeout(function () {
  //     message.success("Files uploaded succesfully")
  // }, 5000);


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

      <Button  type="primary" onClick={compareImages}>
              Upload and compare images
            </Button>
        
      </div>

      </form>
    </div>
  );
}

export default App;
