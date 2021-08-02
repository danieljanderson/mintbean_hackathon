import React from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';

export default function Message({ message, handleClearMessage }) {
  return (
    <>
    {message ? 
    <SweetAlert
      title={"Uses render props"}
      onConfirm={handleClearMessage}
      dependencies={[message]}
    >
        <p style={{color: "red", fontSize: "30px"}}>{message}</p>
     </SweetAlert> 
     : 
      null 
     }
    </>
    )
}
