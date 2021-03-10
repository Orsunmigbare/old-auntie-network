import React, { Component } from "react";
import "./index.css";
import logo from "../../assets/img/logo.png";
import splash from "../../assets/img/login/Group 452.png";
import twitter from "../../assets/img/Vector (1).png";
import facebook from "../../assets/img/color-f.png";
import google from "../../assets/img/grommet-icons_google.png";
import { Link } from "react-router-dom";
export class LoginComponent extends Component {
  render() {
    return (
      <div>
        <div className="d-md-flex h-md-100 align-items-center">
          <div className="col-md-5 p-0 bg-greene h-md-100">
            <div className="logo-positionlog">
              <img src={logo} alt="auntie logo" />
            </div>
            <div className="d-md-flex align-items-center h-100 p-5 justify-content-center">
              <div className="pt-5 pb-5">
                <img src={splash} alt="splash" className="splash-imagelog" />
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
            <div className="d-md-flex align-items-center h-md-100 p-5 loginarea justify-content-center">
              <div className="pt-5 pb-5">
                <h1>Login to your account</h1>
                <button className="loginemail">
                  <img
                    className="position-social-logo"
                    src={google}
                    alt="social logo"
                  />
                  Login with Google
                </button>
                <button className="loginemail">
                  <img
                    className="position-social-logo ff-logo"
                    src={facebook}
                    alt="social logo"
                  />
                  Login with Facebook
                </button>
                <button className="loginemail">
                  <img
                    className="position-social-logo"
                    src={twitter}
                    alt="social logo"
                  />
                  Login with Twitter
                </button>
                
                <span className="breaking-orf">Or</span>

                <h2>Request a login link ?</h2>
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="invite-box"
                />
                <div className="text-right">
                  <button className="invite-btn">
                    Next <i className="fa fa-angle-right"></i>
                  </button>
                </div>
                <p className="have-acc">
                Don’t have an account ? {" "}
                  <Link to="/" className="login-acc">
                  Create One
                  </Link>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default LoginComponent;
