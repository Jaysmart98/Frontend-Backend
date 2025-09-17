import React from 'react';
import './Modal.css'

const Modal = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  const handleCloseOverlay = (e) => {
    if (e.target.className === 'modal-overlay') 
      onClose();        
    }
    

  return (
    <div className="modal-overlay" onClick={handleCloseOverlay}>
      <div className="modal-content">

        <div className='CloseButton'>
            <button onClick={onClose} className='btn btn-success w-75'>Close</button>
         </div>

          <div style={{ textAlign: 'center', marginBottom: '2px' }}>
            <h3>{title}</h3>
        </div>

         <div className='ChildrenContent'>
             <h3> {children} </h3>
            <div>
                <input type="text"/>
                <button>Click me</button>
            </div>
        </div>
       
      </div>
    </div>
  );
};

export default Modal