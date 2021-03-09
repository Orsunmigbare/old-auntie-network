import React, { Component } from "react";
import "./register.css";
export class RegisterComponent extends Component {
  render() {
    return (
      <div>
        <div className="d-md-flex h-md-100 align-items-center">
          <div className="col-md-5 p-0 bg-indigo h-md-100">
            <div className="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
              <div className="pt-5 pb-5">
                <h1 className="mb-0 mt-3 display-4">Anchor</h1>
                <h5 className="mb-4 font-weight-light">
                  Free Bootstrap UI Kit with{" "}
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-7 p-0 bg-white h-md-100 loginarea">
            <div className="d-md-flex align-items-center h-md-100 p-5 justify-content-center">
              <h1>Playground</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RegisterComponent;
