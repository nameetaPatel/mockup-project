import React, { useState } from "react";
import "./Model.css";
function Model(){

    const [modal,setModal]=useState(false);
    const toggleModal=()=>{
        setModal(!modal)
    }


return(
    <>
        <button onClick={toggleModal} className="btn-modal">
        Create
        </button>
        {modal&&(
            <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
                <h2>Hello</h2>
                <button className="Close-modal"
                onClick={toggleModal}>Close</button>
            </div>
        </div> 
        )}
       
    </>
)

}


export default Model;