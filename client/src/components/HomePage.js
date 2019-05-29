import React, { Component } from "react";
import {Link} from 'react-router-dom'

class HomePage extends Component {
  render() {
    return (
      <div style={{marginTop: "50px"}} className="d-flex align-items-center flex-column"> 
        <h4>Register your business with the XXX B2B Marketplace, click next to continue.</h4>
        <p style={{color: "red"}}>Please note you must be registered with Companies House to succesfully progress with your application</p>
        <Link className="btn btn-info btn-lg" to={'/form'}>NEXT</Link>
      </div>
    );
  }
}
export default HomePage;
