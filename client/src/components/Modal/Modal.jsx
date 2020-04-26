import React, { useState } from 'react';
import './Modal.css';


const Modal = (props) => {
    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <div className="modal-body">
                    <h2>{props.mainText}</h2>
                    <h2>{props.secondText}</h2>
                </div>
            </div>
        </div>
    )
}

export default Modal;


