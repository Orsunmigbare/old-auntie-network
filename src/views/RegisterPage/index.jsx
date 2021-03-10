import React, { Component } from "react";
import "./register.css";
import logo from "../../assets/img/logo.png";
import splash from "../../assets/img/register/splash-image.png";
import mail from "../../assets/img/Mail.png";
import facebook from "../../assets/img/fa-brands_facebook-f.png";
import google from "../../assets/img/grommet-icons_google.png";
import twitter from "../../assets/img/Vector.png";
import { Link } from "react-router-dom";
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
                  <img
                    className="position-social-logo"
                    src={mail}
                    alt="social logo"
                  />
                  Sign Up with Email
                </button>
                <button className="signupfacebook">
                  <img
                    className="position-social-logo f-logo"
                    src={facebook}
                    alt="social logo"
                  />
                  Sign Up with Facebook
                </button>
                <button className="signupgoogle">
                  <img
                    className="position-social-logo"
                    src={google}
                    alt="social logo"
                  />
                  Sign Up with Google
                </button>
                <button className="signuptwitter">
                  <img
                    className="position-social-logo"
                    src={twitter}
                    alt="social logo"
                  />
                  Sign Up with Twitter
                </button>
                <br/>
                <span className="breaking-or">Or</span>

                <h2>Want to invite someone ?</h2>
                <input
                  type="text"
                  placeholder="fredsergio@gmail.com"
                  className="invite-box"
                />
                <div className="text-right">
                  <button className="invite-btn">
                    Send Invite <i className="fa fa-angle-right"></i>
                  </button>
                </div>
                <p className="have-acc">
                  Already have an account ? <Link to="/login" className="login-acc">Login</Link>{" "}
                </p>

                <p className="terms">By creating an account, you agree to our Terms and Conditions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RegisterComponent;
