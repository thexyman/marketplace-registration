import React, { Component } from "react";

import API from '../API'

const initialState = {
  username: "",
  email: "",
  companyName: "",
  number: "",
  type: "",
  status: "",
  address: "",
  usernameError: "",
  emailError: "",
  companyNameError: "",
  numberError: "",
  addressError: "",
  serverError: ""
};


class Form extends Component {

  state = {
    username: "",
    email: "",
    companyName: "",
    number: "",
    type: "",
    status: "",
    address: "",
    usernameError: "",
    emailError: "",
    companyNameError: "",
    numberError: "",
    addressError: "",
    serverError: ""
  }

  getCompanyDetails = (e) => {
    e.preventDefault()

    API.getCompanyDetails(this.state.companyName)
      .then(resp => {
        console.log(resp.items)
        const {company_number, company_status, company_type, address_snippet} = resp.items[0]
        this.setState({
          number: company_number,
          type: company_type,
          status: company_status,
          address: address_snippet,
        })
      })
  }

  generateInput = (field) => {
    return (
      <input
        value={this.state[field]}
        onChange={(e) => this.setState({[e.target.name]: e.target.value})}
        name={field}
        className={`form-control ${this.state[`${field}Error`] ? 'is-invalid' : null}`}
        placeholder={`Enter ${field}`} />
    )
  }

  validate = () => {
    let usernameError = !this.state.username && "Username cannot be empty"
    let emailError = !this.state.email.includes('@') && "Invalid Email"
    let companyNameError = !this.state.companyName && "Company name cannot be empty"
    let numberError = !this.state.number && "Company number cannot be empty"
    let addressError = !this.state.address && "Company address cannot be empty"
    
    if (usernameError || emailError || companyNameError || numberError || addressError ) {
      this.setState({usernameError, emailError, companyNameError, numberError, addressError})
      return false
    }
    return true
  }

  submitDetails = (e) => {
    e.preventDefault()
    const isValid = this.validate()

    if (isValid) {
      API.submitDetails(this.state)
        .then(resp => {
          if (resp.errmsg) {
            console.log("Resp:", resp)
            this.setState({serverError: `${resp.errmsg.includes('duplicate') ? `Record already exists, please check details`: `Server error: ${resp.errmsg}` }` })
          } else {
            // clear form
            this.setState(initialState)
            this.props.history.push('/finish')
          }
        })
    }
    
  }
  
  render() {
    const {companyName} = this.state
    return (
      <div style={{margin: "auto", width: "600px", marginTop: "50px"}}>

        <form onSubmit={this.submitDetails} className="needs-validation" >

          <h4>Please fill out the fields below to register your company to the XXX platform.</h4>

          {this.state.serverError && <div className="alert alert-danger">{this.state.serverError}</div>}
          
          <div className="form-group">
            <label>Username</label>
            {this.generateInput('username')}
            <div className="invalid-feedback">{this.state.usernameError}</div>
          </div>

          <div className="form-group">
            <label>Email Address</label>
            {this.generateInput('email')}
            <div className="invalid-feedback">{this.state.emailError}</div>
          </div>

          <div className="form-group">
            <label>Company Name</label>
            {this.generateInput('companyName')}
            <div className="invalid-feedback">{this.state.companyNameError}</div>
            <small className="text-muted">Please make sure you accurately enter the registered company name to use autofill option</small>
          </div>

          <button
            disabled={companyName ? false : true}
            style={{marginBottom: "20px"}}
            className="btn btn-success"
            onClick={this.getCompanyDetails}>
              Autofill remaining fields
          </button>

          <div className="form-group">
            <label>Company Number</label>
            {this.generateInput('number')}
            <div className="invalid-feedback">{this.state.numberError}</div>
          </div>

          <div className="form-group">
            <label>Company Type</label>
            {this.generateInput('type')}
          </div>

          <div className="form-group">
            <label>Company Status</label>
            {this.generateInput('status')}
          </div>

          <div className="form-group">
            
            <label>Company Address</label>
            {this.generateInput('address')}
            <div className="invalid-feedback">{this.state.addressError}</div>
          </div>

          <button
            
            style={{marginBottom: "20px"}}
            className="btn btn-primary"
            onClick={this.submitDetails}>
              Submit Details
          </button>

        </form>      
        
      </div>
    );
  }
}
export default Form;

