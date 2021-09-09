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
        <p style={{color: "rgb(0,153,20)", fontSize: "30px", fontWeight: "600"}}>{message}</p>
     </SweetAlert> 
     : 
      null 
     }
    </>
    )
}
