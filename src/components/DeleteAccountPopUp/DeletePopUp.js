import React, { useState, useEffect } from "react";
import './DeletePopUp.css';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function DeletePopUp(props){
    const navigate = useNavigate();
    const [confirm2, setConfirm2] = useState(false);
    
    const userEmail = window.localStorage.getItem("userEmail");

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:5000/deleteAccount", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                
            },
            body: JSON.stringify({
                email: userEmail,
            })
        })
        .then((response) => {
            console.log(response);
        })
        
        
        navigate("/login");
        props.setTrigger(false);
        
        
    }
    if (props.trigger) {
        if (!confirm2) {
            return (
                <div className="popup-panel">
                    <div className="popup-delete-frame">
                        <div className="popup-delete-zone">
                            <div className="popup-delete-field">
                                <div className="popup-delete-header">
                                    <h1>Are you sure <br/>to delete your account ?</h1>
                                </div>
                                
                            </div>
                            <div className="button-field">
                                <button className="cancel-btn" type="button" onClick={() => props.setTrigger(false)}>
                                    Cancel
                                </button>
                                <button className="sure-btn" type="button" onClick={() => setConfirm2(true)}>
                                    Sure
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="popup-panel">
                    <div className="popup-delete-frame">
                        <div className="popup-delete-zone">
                            <div className="popup-delete-field">
                                <div className="popup-delete-header">
                                    <h1>Delete Confirmation</h1>
                                </div>
                                <div className="delete-info">
                                    You have selected to delete this account.
                                    <br/>
                                    If this was the action that you wanted to do, please confirm your choice, or cancel and return to the page.
                                </div>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <button className="cancel-btn" type="button" onClick={() => setConfirm2(false)}>
                                    Cancel
                                </button>
                                
                                <button className="delete-btn" type="submit" >
                                    Delete
                                </button>
                                
                            </form>
                        </div>
                    </div>
                </div>
            );
        }
    }
    else return "";
    

   
}