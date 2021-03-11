import React from "react";
import "./verify.css"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import logo from "../../assets/img/logo.png"
import { useHistory } from "react-router";

export const Verify = () => {
    const history = useHistory();
    return (
        <div className="verify">
            <div className="header">
                <img className="logo" src={logo} alt=""/>
            </div>
            <div className="content-card mx-auto bg-white">
                <h1 className="text-center text-xl font-bold">Verify your Phone number</h1>
                <span className="text-center d-block font-light h1-desc text-lg">
                    <span className="">  When you tap “Continue”, The Auntie Network</span>    <br />
                    will send a text with verification code. Message and data rates may apply. The verified <br/> phone number can be used to log in. <br /> 
                    <a className="font-semibold text-gray pointer"> Learn what happens when your number changes. </a> 
                </span>
                <PhoneInput
                    placeholder="Enter phone number"
                    value={"value"}
                    className="mx-auto"
                    defaultCountry="NG"
                    onChange={()=>null}/>
                        {/* <div className="country-opt"></div>
                        <input className="flex-grow-1" placeholder="Enter your phone number"/> */}

                <div className='d-flex justify-content-center align-items-center'>
                    <button onClick={()=> history.push("/verify4digit")} className="mx-auto btn-pry"> Continue </button>
                </div>
            </div>
             <div className="footer">
                    <span className="text-gray">© 2020. The Auntie Network, All Rights Reserved.</span>
                </div>
        </div>
    )
}


export const Verify4digit = () => {
    return (
        <div className="verify">
            <div className="header">
                <img className="logo" src={logo} alt=""/>
            </div>
            <div className="content-card mx-auto bg-white">
                <h1 className="text-center text-xl font-bold">Verify your Phone number</h1>
                <span className="text-center d-block  h1-desc text-lg">
                    <span className=""> Please enter the 4-digit code sent to you at <a className="font-bold text-gray underline"> +1 354 112 2376</a> </span>
                </span>
                <div className='d-flex justify-content-center align-items-center input-cont mx-auto'>
                        <input maxLength={1} className="input text-center four-digit" placeholder=""/>
                        <input maxLength={1} className="input text-center four-digit" placeholder=""/>
                        <input maxLength={1} className="input text-center four-digit" placeholder=""/>
                        <input maxLength={1} className="input text-center four-digit" placeholder=""/>
                </div>
                <div className="d-flex justify-content-center align-items-center resend-cont">
                    <span className="text-center font-bold text-sex-pink pointer">Didn’t get a code ?  Resend</span>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <button className="mx-auto btn-pry"> Verify </button>
                </div>
               
            </div>
             <div className="footer">
                    <span className="text-gray">© 2020. The Auntie Network, All Rights Reserved.</span>
                </div>
        </div>
    )
}