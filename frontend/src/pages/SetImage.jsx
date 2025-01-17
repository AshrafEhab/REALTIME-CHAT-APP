import React, { useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import SetImageContainer from '../components/SetImage/SetImageContainer';
import ErrorContainer from '../components/Error/ToastContainer';


import loadingGif from './imgs/loading.gif'
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from 'axios';
import { saveImageRoute,updateImageUrlRoute } from '../utils/APIRoutes';

function SetImage() 
{
  const defaultImage="https://res.cloudinary.com/dcoifdqn5/image/upload/v1734966446/default-image_uknwpr.png";
  const location = useLocation();
  const { oldImageUrl } = location.state || defaultImage; 

  const[profileImage,setProfileImage] = useState(oldImageUrl);
  const[loading,setLoading] = useState(false);
  const navigate = useNavigate(); 
  const inputImageRef = useRef(null);
  

  const saveImage = async (formData)=>
  {
    try
    {
      const headers = 
      {
        'Authorization':`Bearer ${sessionStorage.getItem("token")}`,
        'Content-Type': 'multipart/form-data'
      }
      const {data} =  await axios.post(saveImageRoute,formData,{headers});
      const imageUrl = data.imageUrl;
      return imageUrl;
    }
    catch(error)
    {
      return 0;
    }
  }

  const handleUploadingClick = (event)=>
  {
    inputImageRef.current.click();
  }

  const handleChange= async (event)=>
  {
    try
    {
      setLoading(true);
      const formData = new FormData();
      formData.append('file', event.target.files[0]);
      const croppedImage = await saveImage(formData);
      if(croppedImage)
      {
         setProfileImage(croppedImage);
      }
      else
      {
        toast.error("Error in uploading image!");
      }
      setLoading(false);
    }
    catch(error)
    {
      toast.error("Error in uploading image!");
    }
  }
  const removeImage = ()=>
  {
    setProfileImage(defaultImage);
  }
  const skipImage = async()=>
  {
    if(oldImageUrl === "")
    {
      const headers = 
      {
        'Authorization':`Bearer ${sessionStorage.getItem("token")}`,
      }
      await axios.put(saveImageRoute,{imageUrl:defaultImage},{headers})
      navigate('/');
    }
    else
    {
      navigate('/');
    }
  }
  const verifyImage = async()=>
  {
    if((profileImage === defaultImage) && (oldImageUrl==="")) // user didn't set photo
    {
      toast.error("Please upload the image!");
    }
    else if((profileImage === defaultImage) && (oldImageUrl)) // user set photo then deleted it
    {
      const headers = 
      {
        'Authorization':`Bearer ${sessionStorage.getItem("token")}`,
      }
      await axios.put(updateImageUrlRoute,{imageUrl:defaultImage},{headers});
      navigate('/');
    }
    else //user set the photo correctly
    {
      navigate('/');
    }
  }
  return (
  <>
    <SetImageContainer>

      <h1>Profile Image</h1>
      <div className="image-container">
        <img src={profileImage} alt="" srcSet="" />
        {profileImage!==defaultImage && !loading&& <div className="fa fa-trash" onClick={removeImage}></div>}
      </div>
       {loading && <img src={loadingGif} alt="Loading..." />}
      <input type="file" name="file"  hidden ref = {inputImageRef} onChange={handleChange} />
      
      {!loading &&
      <div className="uploading-container" onClick={handleUploadingClick}>    
        <i className="fa-solid fa-upload"> </i>
        {profileImage === defaultImage && <span>Choose an image.. </span>}
        {profileImage !== defaultImage && <span>Change the image..</span>}
      </div> 
      }

      <div className="choice">
        <button 
          id = "skip"
          type="button"
          onClick={skipImage}
        >
        Skip
        </button>

         <button 
          type="button" 
          onClick={verifyImage}
         >
        Continue
        </button>

      </div>

    </SetImageContainer>
    <ErrorContainer/>
  </>)}

export default SetImage;
