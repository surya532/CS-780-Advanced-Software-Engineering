import React, { Component } from 'react';
import { Link } from "react-router-dom";

class BasicHome extends Component {
    render() {
        document.title = 'West Inn Home page';
        return (
            <div className="ui container">
                <h1>Home Page</h1>
                <Link to='/login' className="button"> Login </Link><br />
                <Link to='/registration' className="button"> Registration</Link>
            </div>
        );
    }
}
export default BasicHome;
