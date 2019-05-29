import React, { Component } from "react";
import Icon from '@material-ui/core/Icon'


class FinishPage extends Component {
  render() {
    return (
      <div className="d-flex align-items-center flex-column" style={{marginTop: '200px'}}>
        <div><Icon className="text-success" style={{fontSize: '150px', marginBottom: "30px"}}>check_circle</Icon></div>
        <h3>Thank you for submitting your details!</h3>
      </div>
    );
  }
}

export default FinishPage;

