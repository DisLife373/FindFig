import React from "react";
import './AddAddress.css'
import Address from "../Pages/Address/Address";

function AddAdress(props){

    
    function CloseePopUp() {
        props.setTrigger(false);
    }
    return (props.trigger) ? (
        <div class="popup-panel-add">
            <div class="address-frame-add">
                <div className="address-field">
                    <div class="address-header">
                        <h3 className="add-context">New Address</h3>
                    </div>
                    <div class="user-info-add">
                        <input class="input name" placeholder="Name-Lastname"></input>
                        <input class="input tel" placeholder="Telephone number"></input>
                        
                    </div>
                    <textarea class="input-address-add" placeholder="House number, Street, Sub district, District, Province, Postcode"></textarea>
                
                </div>
                <div className="button-field">
                    <button className="cancel-btn button-6" onClick={CloseePopUp}>
                        Cancel
                    </button>
                    <button className="confirm-btn button-5" onClick={CloseePopUp}>
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    ) : "";
};

export default AddAdress;