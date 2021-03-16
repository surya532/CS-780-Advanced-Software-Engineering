import React from 'react';
import { Table } from 'react-bootstrap';
import { Redirect } from 'react-router';
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            redirect: false,
            redirect_admin: false,
            users: []
        }
    }
    // async componentDidMount() {
    //     document.title = 'Export Data';
    //     await axios.get('http://156.26.97.138:4000/printOrder')
    //         .then(response => {
    //             this.setState({ ...this.state, orders: response.data });
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         })
    // }
    onChangeUsername = (e) => {
        this.setState({ ...this.state, username: e.target.value })
    }
    onChangePassword = (e) => {
        this.setState({ ...this.state, password: e.target.value })
    }
    handleClick_1 = async () => {
        if (this.state.username === "" || this.state.password === "") {
            alert("Please enter the details");
            this.setState({ ...this.state, redirect: false })
        } else {
            await axios.get('http://localhost:4000/hotelRS')
                .then(response => {
                    this.setState({ ...this.state, users: response.data });
                    console.log(this.state.users);
                })
                .catch(function (error) {
                    console.log(error);
                })
            if (this.state.username === "admin" && this.state.password === "admin") {
                this.setState({ ...this.state, redirect_admin: true })
            }
            if (this.state.users && this.state.users !== "") {
                if (this.state.users.length > 0) {
                    this.state.users.map((listValue, index) => {
                        console.log("Username is " + this.state.username);
                        console.log("Password is " + this.state.password);
                        if ((listValue.username === this.state.username) && (listValue.password === this.state.password)) {
                            console.log("login Successful");
                            this.setState({ ...this.state, redirect: true })
                        } else {
                            console.log("login failure");
                            this.setState({ ...this.state, redirect: false })
                        }
                    })
                }
            }
            // if (x > 0) {
            //     alert("Login Failure, please check the credentials");
            //     return <Redirect push to="/login" />;
            // }
        }
    }
    render() {
        document.title = 'West Inn Login';
        if (this.state.redirect) {
            return <Redirect push to="/landing" />;
        }
        if (this.state.redirect_admin) {
            return <Redirect push to="/admin_Portal" />;
        }
        return (
            <div className="container">
                <div className="itineraryTable">
                    <br />
                    <h3>Login</h3>
                    <br />
                    <Table striped bordered condensed>
                        <tbody>
                            <tr>
                                <td>Username</td>
                                <td id="costAlignRight">
                                    <input style={{ "width": "100%" }} type="text" placeholder="Enter Username" id="username" name="username" value={this.state.username} onChange={(e) => this.onChangeUsername(e)} required />
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
                                    <button onClick={() => this.handleClick_1()}>Login</button>
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

export default Login;
