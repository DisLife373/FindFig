import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";
import "./Sell.css";
import Nav from "../../components/Nav/Nav";
import Popup from "../../components/Popup";
import ButtonMenu from "../../components/ButtonList/ButtonList";

function SellPage(){
    const [buttonPopup, setButtonPopup] = useState(false);
    const [input, setInput] = useState({
        fname: '',
        lname: '',
        email: '',
        barcode: '',
        manufacturer: '',
        figureName: '',
        figureGrade: '',
        boxGrade: '',
        note:''
    })
    function handleChange(event){
        const {name, value} = event.target;
        setInput(prevInput =>{
            return{
                ...prevInput,
                [name]: value
            }
        })

    }
    
    function handleClick(event) {
        event.preventDefault();
        const newRequire = {
            fname: input.fname,
            lname: input.lname,
            email: input.email,
            barcode: input.barcode,
            manufacturer: input.manufacturer,
            figureName: input.figureName,
            figureGrade: input.figureGrade,
            boxGrade: input.boxGrade,
            note: input.note
        }
       axios.post('http://localhost:5000/Sell',newRequire)
       .then(response => {
        console.log(response);
       
        
    })
    .catch(error => {

        console.error(error);
    });
        setButtonPopup(true);
    }



    return(
        <div id="wrapper">
            <header id="header">
                <Nav topic="Sell"
                back="https://cdn.discordapp.com/attachments/787359617280770051/1183513820220629092/3.png?ex=65889c23&is=65762723&hm=b608f4b0dafa79e069345c1fd46fb2256b13299db710a859f027b85295bcbe44&"
                account="https://cdn.discordapp.com/attachments/787359617280770051/1183513819427913778/1.png?ex=65889c23&is=65762723&hm=285dc6cb6f325e96a63deb650d157bb45a6fddce1731e5766d15215239f0685b&"
                cart="https://cdn.discordapp.com/attachments/787359617280770051/1183513819981549639/2.png?ex=65889c23&is=65762723&hm=db11b00f36b56189d04437dad86744125c2456a9d7e4b7e95cc617f33e2e8efb&"
                ></Nav>
            </header>
            <div style={{position:"absolute", paddingLeft:"40px"}}>
            <div className="nav-index">
            <a href="/">
              <div className="nav-menu-item active-nav">
                <div className="flex centerY">
                        <img className="icon-nav-index" src='https://cdn.discordapp.com/attachments/787359617280770051/1185561359820271638/16.png?ex=65900f0e&is=657d9a0e&hm=2f8e9d7eba40fd0e42fcb16e15e7f5cefa903b4d6c772842de1a23da6879e656&' alt="home" />
                    
                </div>
                <div style={{paddingLeft: "15px"}}>Home</div>
              </div>
              </a>
            <a href="/account">
              <div className="nav-menu-item" >
                <div className="flex centerY">
                    
                        <img className="icon-nav-index" src='https://cdn.discordapp.com/attachments/787359617280770051/1185561360084516884/17.png?ex=65900f0e&is=657d9a0e&hm=2f00dae461fd86c9ca1e2b28e2afa51ec1f628cc08c73f50c84289f8ce2142f2&' alt="showcase" />
                   
                </div>
                <div style={{paddingLeft: "15px"}}>Account</div>
              </div>
               </a>
                <a href="/sell">
              <div style={{backgroundColor:"#4636FC"}} className="nav-menu-item" >
                <div className="flex centerY">
                        <img className="icon-nav-index"  src='https://cdn.discordapp.com/attachments/787359617280770051/1185561359329542174/14.png?ex=65900f0e&is=657d9a0e&hm=d372af8fdee019b18f1eb6e696b55a47bb64232144b7201a7a279bcb34587d76&' alt="sell" />
                </div>
                <div  style={{position:"absolute", paddingLeft:"40px", color:"white"}}>Sell</div>
              </div>
              </a>
            </div>
        </div>
            <main id="main-sell">
                
                <div className="row page-wrapper">
                    
                    
                    <div id="content" className="large-12 col" role="main">
                        
                        <header className="entry-header text-center">
                            <h1 className="entry-title header-style">Sell With Us</h1>
                            <div className="is-divider meduim"></div>
                        </header>
                        <div className="entry-content">
                            <div className="information-container col" >
                                <h2 className="quote text-center">Sell us your pre-owned figures. We'll find them a new home.</h2>
                                <div className="information-to-seller">
                                    <div className="information-container-section">
                                        <h3 className="header-style">How This Works</h3>
                                        <ol className="info-list">
                                            <li>Fill out the form below and we'll send you a preliminary quote</li>
                                            <li>Accept the initial quote? Ship it however you like!</li>
                                            <li>We inspect the figures and send you a final quote</li>
                                            <li>Accept the final quote? We will send you a payment</li>
                                        </ol>
                                    </div>
                                    <div className="information-container-section">
                                        <h3 className="header-style">We cannot accept the following:</h3>
                                        <ul className="accept-list">
                                            <li>Figures without original boxes or packaging</li>
                                            <li>Figures with missing/broken/repaired parts</li>
                                            <li>Figures that smell like smoke</li>
                                            <li>Sticky figures due to plasticizer and/or oils</li>
                                        </ul>
                                    </div>
                                    <div className="is-divider large"></div> 
                                </div>  
                            </div>
                            <div className="seller-info  col">
                                <h3 className="text-center header-style">Let's get started.</h3>
                                
                                <form className="seller-input">
                                    <h4 className="header-style">Seller's Information</h4>
                                    <div className="small-box">
                                        <div className="input-box small">
                                            <p>First Name<span className="frm_required">*</span></p>
                                            <input onChange={handleChange} className="input-address" name="fname" value={input.fname} type="text" placeholder="first name" required ></input>
                                        </div>
                                        <div className="input-box small">
                                            <p>Last Name<span className="frm_required">*</span></p>
                                            <input onChange={handleChange} className="input-address" name="lname" value={input.lname} type="text" placeholder="last name" required></input>
                                        </div>  
                                    </div>
                                    <div className="large-box">
                                        <div className="input-box large">
                                            <p>Email<span className="frm_required">*</span></p>
                                            <input onChange={handleChange} className="input-address" name="email" value={input.email} type="email" placeholder="email" required></input>
                                        </div>
                                    </div>
                                    <h4 className="header-style">Figure's Information</h4>
                                    <div className="information-to-seller grading col">
                                        <div className="information-container-section item-grade">
                                            <h5>Item Grading</h5>
                                            <div><strong>S:</strong> Like new. Figure may shows no sign of wear.</div>
                                            <div><strong>A:</strong> Minor signs of wear. May have light scratches/paint loss.</div>
                                            <div><strong>B:</strong> Moderate wear. May have mild scratches/paint loss.</div>
                                            <div><strong>C:</strong> Fairly worn. May have fairly severe scratches/paint loss.</div>
                                        </div>
                                        <div className="information-container-section box-grade">
                                            <h5>Box Grading</h5>
                                            <div><strong>S:</strong> Like new. Never opened and still manufacturer sealed.</div>
                                            <div><strong>A:</strong> May have very minor wear.</div>
                                            <div><strong>B:</strong> May have lightly worn corners, and/or dents.</div>
                                            <div><strong>C:</strong> May have fairly worn corners, dents, and/or tears.</div>
                                        </div>
                                    </div>
                                    <div className="mini-box">
                                        <div className="input-box mini">
                                            <div className="input-box-inner">
                                                <p>Barcode<span className="frm_required">*</span></p>
                                                <input onChange={handleChange} className="input-address" name="barcode" required value={input.barcode} type="text" placeholder="barcode" ></input>
                                            </div>
                                            <div className="input-box-inner">
                                                <p>Manufacturer<span className="frm_required">*</span></p>
                                                <input onChange={handleChange} className="input-address" name="manufacturer" value={input.manufacturer} type="text" placeholder="manufacturer" required></input>
                                            </div>
                                            <div className="input-box-inner">
                                                <p>Figure name<span className="frm_required">*</span></p>
                                                <input onChange={handleChange} className="input-address" name="figureName" value={input.figureName} type="text" placeholder="figure name" required></input>
                                            </div>
                                            <div className="input-box-inner">
                                                <p>Figure grade<span className="frm_required">*</span></p>
                                                <select onChange={handleChange} className="input-address" name="figureGrade" value={input.figureGrade}>
                                                    <option value=""> </option>
                                                    <option value="S">S</option>
                                                    <option value="A">A</option>
                                                    <option value="B">B</option>
                                                    <option value="C">C</option>
                                                </select>
                                            </div>
                                            <div className="input-box-inner"> 
                                                <p>Box grade<span className="frm_required">*</span></p>
                                                <select onChange={handleChange} className="input-address" name="boxGrade" value={input.boxGrade}>
                                                    <option value=""> </option>
                                                    <option value="S">S</option>
                                                    <option value="A">A</option>
                                                    <option value="B">B</option>
                                                    <option value="C">C</option>
                                                </select>
                                            </div>
                                            <div className="input-box-inner">
                                                <p>Notes<span className="frm_optional">(optional)</span></p>
                                                <input onChange={handleChange} className="input-address" name="note" value={input.note} type="text" placeholder="notes"></input>
                                            </div>
                                            {/* <div className="clone-form">
                                                <div className="btn-add-form">
                                                    <button className="button-28" role="button">Add Items</button>
                                                </div>
                                                <div className="btn-rm-form">
                                                    <button className="button-29" role="button">Remove Above</button>
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="checkbox-wrapper-42 consent-check">
                                            <input id="cbx-42" type="checkbox" required/>
                                            <label className="cbx" htmlFor="cbx-42"></label>
                                            <label required className="lbl" htmlFor="cbx-42">I consent to having FindFig collect my Name and Email(s)</label>
                                        </div>
                                        <div className="submit-form">
                                            <div className="btn-add-form">
                                                    <button onClick={handleClick} className="button-28" id="submit-sell" name="submit" role="button">SUBMIT</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
            </main>
        </div>
    );
};
export default SellPage;
