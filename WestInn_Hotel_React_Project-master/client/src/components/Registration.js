import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Redirect } from 'react-router';
import axios from 'axios';

// import Button from '@material-ui/core/Button';
class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            redirect: false,
            response: {}
        }
    }

    onChangeEmail = (e) => {
        this.setState({ ...this.state, email: e.target.value })
    }
    onChangeUsername = (e) => {
        this.setState({ ...this.state, username: e.target.value })
    }
    onChangePassword = (e) => {
        this.setState({ ...this.state, password: e.target.value })
    }

    handleSave = async () => {
        if (this.state.email === "" || this.state.username === "" || this.state.password === "") {
            alert("Please enter the details");
            this.setState({ ...this.state, redirect: false })
        } else {
            const obj = {
                email: this.state.email,
                username: this.state.username,
                password: this.state.password,
            };
            console.log("Object is " + obj)
            await axios.post('http://localhost:4000/hotelRS/add', obj)
                .then((res) => {
                    console.log(res.data);
                    this.setState({ response: res.data })
                });
            if (this.state.response.hotelRS === "success") {
                alert("Registered Successfully");
            } else {
                alert("unable to register, please try again");
            }
            this.setState({ ...this.state, redirect: true })
        }
    }
    render() {
        document.title = 'West Inn Registration';
        if (this.state.redirect) {
            return <Redirect push to="/" />;
        }
        return (
            <div className="container">
                <div className="itineraryTable">
                    <br />
                    <h3>Registration</h3>
                    <br />
                    <Table striped bordered condensed>
                        <tbody>
                            <tr>
                                <td>Username</td>
                                <td id="costAlignRight">
                                    <input style={{ "width": "100%" }} type="text" placeholder="Enter Username" id="username" name="Username" value={this.state.username} onChange={(e) => this.onChangeUsername(e)} required />
                                </td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td id="costAlignRight">
                                    <input style={{ "width": "100%" }} type="text" placeholder="Enter Email" id="email" name="email" value={this.state.email} onChange={(e) => this.onChangeEmail(e)} required />
                                </td>
                            </tr>
                            <tr>
                                <td>Password</td>
                                <td id="costAlignRight">
                                    <input style={{ "width": "100%" }} type="password" placeholder="Enter password" id="password" name="password" value={this.state.password} onChange={(e) => this.onChangePassword(e)} required />
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <button onClick={() => this.handleSave()}>Register</button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        );
    }
}

export default Registration;
