import React, { useState, useEffect } from "react";
import './AddressPopUp.css';
import { useLocation } from "react-router-dom";

function EditAddress(props){
    const [receiverName, setReceiverName] = useState();
    const [tel, setTel] = useState();
    const [address, setAddress] = useState();

    const userEmail = window.localStorage.getItem("userEmail");

    const UpdateData = () => {
        //GetUser();
        console.log(receiverName, tel, address);
        fetch("http://localhost:5000/editAddress", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                
            },
            body: JSON.stringify({
                email: userEmail,
                receiverName: receiverName, 
                tel: tel, 
                address: address,
            })
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data.data);
            setAddress(data.data);
        })
        
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
        UpdateData();
        props.setTrigger(false);
        window.location.reload(false);
    }

    function ClosePopUp() {
        props.setTrigger(false);
    }
    
    return (props.trigger) ? (
        <div className="popup-panel">
            <div className="popup-address-frame">
                <form onSubmit={handleSubmit}>
                {/* <form> */}
                    <div className="popup-address-field">
                        <div className="popup-address-header">
                            <h1>Edit Address</h1>
                        </div>
                        <div className="user-info">
                            <input 
                                className="input name" 
                                type="text"
                                placeholder="Name-Lastname" 
                                onChange={(e)=> setReceiverName(e.target.value)}
                                autoComplete="off"
                            ></input>
                            <input 
                                className="input tel" 
                                type="text"
                                placeholder="Tel."
                                onChange={(e)=> setTel(e.target.value)}
                                autoComplete="off"
                            ></input>
                        </div>
                        <textarea 
                            className="input-popup-address" 
                            type="text"
                            placeholder="House number, Street, Sub district, District, Province, Postcode"
                            onChange={(e)=> setAddress(e.target.value)}
                            autoComplete="off"
                        ></textarea>
                    </div>
                    <div className="button-field">
                        <button className=" button-61" type="button" onClick={ClosePopUp}>
                            Cancel
                        </button>
                        <button className="button-5" type="submit">
                            Submit
                        </button>
                        {/* <button className="submit-btn" type="button" onClick={() => UpdateData()}>
                            Submit
                        </button> */}
                    </div>
                </form>
            </div>
        </div>
    ) : "";
};

export default EditAddress;