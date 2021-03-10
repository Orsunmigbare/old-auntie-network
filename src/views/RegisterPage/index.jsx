import React, { Component } from "react";
import "./register.css";
import logo from "../../assets/img/logo.png";
import splash from "../../assets/img/register/splash-image.png";
export class RegisterComponent extends Component {
  render() {
    return (
      <div>
        <div className="d-md-flex h-md-100 align-items-center">
          <div className="col-md-5 p-0 bg-indigo h-md-100">
            <div className="logo-position">
              <img src={logo} alt="auntie logo" />
            </div>
            <div className="d-md-flex align-items-center h-100 p-5 justify-content-center">
              <div className="pt-5 pb-5">
                <img src={splash} alt="splash" className="splash-image" />
                <h1>The Auntie Network</h1>
                <h2>Find the perfect match.</h2>
                <p>
                  Seriously, when did marriage become so hard? Finally there’s a
                  network to make it easy again. A network filled with aunties.
                  The Auntie Network
                </p>
                <h3>
                  Radha Patel, <span>Founder at Auntie Network</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-7 p-0 h-md-100">
            <div className="d-md-flex align-items-center h-md-100 p-5 registerarea justify-content-center">
              <div className="pt-5 pb-5">
                <h1>Create an Account</h1>
                <button className="signupemail">
                  <img className="position-social-logo" src={logo} alt="social logo" />
                  Sign Up with Email
                </button>
                <span className="breaking-or">Or</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RegisterComponent;
