import React, { useState, useEffect } from "react";
import Address from "../../Pages/Address/Address";
import './AddressPopUp.css';
import { useLocation } from "react-router-dom";

export default function AddAdress(props){
    const [receiverName, setReceiverName] = useState();
    const [tel, setTel] = useState();
    const [address, setAddress] = useState();

    

    const userEmail = window.localStorage.getItem("userEmail");

    useEffect(() => {
        fetch("http://localhost:5000/getUserForAddress", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                
            },
            body: JSON.stringify({
                email: userEmail
            })
        })
        .then((response) => response.json())
        .then((data) => {
            setReceiverName(data.receiverName);
            setTel(data.tel);
            setAddress(data.address);            
        })
        
    }, []);

    

    const InsertData = async() => {
        //GetUser();
        console.log(receiverName, tel, address);
        await fetch("http://localhost:5000/addAddress", {
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
            
        })   
    }

    const UpdateData = async () => {
        await fetch("http://localhost:5000/editAddress", {
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
            
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(receiverName);
        if (receiverName != undefined) {
            UpdateData();
            console.log("Update");
        }
        else {
            InsertData();
            console.log("Inssert");
        }
        
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
                            <h1>New Address</h1>
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
                        <button className="cancel-btn button-61" type="button" onClick={ClosePopUp}>
                            Cancel
                        </button>
                        <button className="submit-btn button-5" type="submit">
                            Submit
                        </button>
                        {/* <button className="submit-btn" type="button" onClick={() => InsertData()}>
                            Submit
                        </button> */}
                    </div>
                </form>
            </div>
        </div>
    ) : "";
}