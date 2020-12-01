import React, { Component } from "react";
import UserService from '../services/UserService'


export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.onChangePassword= this.onChangePassword.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeMobileNumber = this.onChangeMobileNumber.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    
    this.saveUser = this.saveUser.bind(this);
    this.newUser= this.newUser.bind(this);

    this.state = {
      id: null,
      password: "",
      firstName: "", 
      lastName: "",
      mobileNo:"",
      email:"",
    
      submitted: false
    };
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value
    });
  }
  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value
    });
  }
  onChangeMobileNumber(e) {
    this.setState({
      mobileNo: e.target.value
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  
  saveUser() {
    var data = {
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      mobileNo:this.state.mobileNo,
      email:this.state.email
    };


    UserService.create(data)
      .then(response => {
        this.setState({
            id:this.state.id,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            mobileNo:this.state.mobileNo,
            email:this.state.email,
            submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newUser() {
    this.state = ({
        id: null,
        password: "",
        firstName: "", 
        lastName: "",
        mobileNo:"",
        email:"",
      
        submitted: false
      });
  }

  render() {
    return (
        <div className="submit-form">
          {this.state.submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={this.newUser}>
                Add
              </button>
            </div>
          ) : (
            <div>
                 <div className="form-group">
                <label htmlFor="firstName">FirstName</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  required
                  value={this.state.firstName}
                  onChange={this.onChangeFirstName}
                  name="firstName"
                />
              </div>
              <div className="form-group">
                <label htmlFor="lasttName">LastName</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  required
                  value={this.state.lastName}
                  onChange={this.onChangeLastName}
                  name="lastName"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  className="form-control"
                  id="password"
                  required
                  value={this.state.password}
                  onChange={this.onChangePassword}
                  name="password"
                />
              </div>
  
             

              

              <div className="form-group">
                <label htmlFor="mobileNo">Mobile Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="mobileNo"
                  required
                  value={this.state.mobileNo}
                  onChange={this.onChangeMobileNumber}
                  name="mobileNo"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  required
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                  name="email"
                />
              </div>

              <button onClick={this.saveUser} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
      );
  }
}
