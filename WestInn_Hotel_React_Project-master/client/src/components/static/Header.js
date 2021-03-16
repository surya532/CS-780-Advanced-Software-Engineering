import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
class Header extends Component {
    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand style={{ "width": "500px" }}>
                            <br />
                            West Inn Hotel Reservation System
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>

            </div>
        );
    }
}

export default Header;