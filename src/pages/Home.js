import React, { Component } from 'react'
import Banner from '../components/Banner';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname:'',
            email:'',
            degree:'Doctor',
            age:'',
            location:''
        };

        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleDegreeChange = this.handleDegreeChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFirstNameChange(event) {
        this.setState({firstname: event.target.value});
    }
    handleLastNameChange(event) {
        this.setState({lastname: event.target.value});
    }
    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }
    handleDegreeChange(event) {
        this.setState({degree: event.target.value});
        console.log(this.state.degree);
    }
    handleLocationChange(event) {
        this.setState({location: event.target.value});
    }
    handleAgeChange(event) {
        this.setState({age: event.target.value});
    }

    handleSubmit(event) {
        const JsonObject = JSON.parse(JSON.stringify({
            lastname:this.state.lastname,
            firstname:this.state.firstname,
            email:this.state.email,
            age:this.state.age,
            degree:this.state.degree,
            location:this.state.location
        }));
        axios.post('https://medgoahmedbenhajserver.herokuapp.com/api/user/add',JsonObject)
            .then((res)=>{
                alert('Thank you for your submission ' + this.state.firstname + this.state.lastname);
            }).catch((error)=>{
                alert("An error has occured !");
        });
        event.preventDefault();
    }

  render() {
    return (
      <div id="home" className="page-content padding-none">
        <Banner />
          <Banner />
          <hr className="divider-color" />
          <section className="padding-section">
              <div className="grid-row clear-fix">
                  <h2 className="center-text">Register Form</h2>
                  <div className="grid-col-row">
                      <form onSubmit={this.handleSubmit}>
                          <div className="form-group">
                              <label>
                                  FirstName:
                              </label>
                              <input className="form-control" type="text" value={this.state.firstname}
                                     onChange={this.handleFirstNameChange} placeholder="Example:Ahmed" required/>
                          </div>
                          <div className="form-group">
                              <label>
                                  LastName:
                              </label>
                              <input className="form-control" type="text" value={this.state.lastname}
                                     onChange={this.handleLastNameChange} placeholder="Example:Ben Haj" required />
                          </div>
                          <div className="form-group">
                              <label>
                                  Mail:
                              </label>
                              <input className="form-control" type="email" value={this.state.email}
                                     onChange={this.handleEmailChange} placeholder="example@example.com" required />
                              <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                  anyone else.
                              </small>
                          </div>
                          <div className="form-group">
                              <label>
                                  Age:
                              </label>
                              <input className="form-control" type="number" value={this.state.age}
                                     onChange={this.handleAgeChange} required />
                          </div>
                          <div className="form-group">
                              <label>
                                  Degree:
                              </label>
                                  <select className="form-control" value={this.state.degree} onChange={this.handleDegreeChange}>
                                      <option value="Doctor">Doctor</option>
                                      <option value="Intern">Intern</option>
                                      <option value="Resident">Resident</option>
                                      <option value="Other">Other</option>
                                  </select>
                          </div>
                          <div className="form-group">
                              <label>
                                  Location:
                              </label>
                              <input className="form-control" type="text" value={this.state.location}
                                     onChange={this.handleLocationChange} placeholder="Example:Tunisia" required />
                          </div>
                          <div className="form-group">
                              <button type="submit" className="btn btn-primary">Submit</button>
                          </div>
                      </form>
                  </div>
              </div>
          </section>
      </div>
    )
  }
}
