import React from 'react';
import { ToastContainer as OriginalToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastContainer = () => 
{
  return (
    <OriginalToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Bounce}
    />
  );
};

export default ToastContainer;
