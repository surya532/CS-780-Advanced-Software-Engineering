import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import { Redirect } from 'react-router';
import axios from 'axios';

import emailjs from 'emailjs-com';
class Confirmation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stage: 1,
            name: "",
            email: "", address: "", card_num: "", exp: "",
            redirect: false
        };
    }
    // async componentDidMount() {
    //     await axios.get('http://localhost:4000/hotelRS/edit/' + this.props.selected_Order._id)
    //         .then(response => {
    //             console.log("Response is given as :" + response)
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         })
    // }
    nameChange = (e) => {
        this.setState({ ...this.state, name: e.target.value })
    }
    emailChange = (e) => {
        this.setState({ ...this.state, email: e.target.value })
    }
    addressChange = (e) => {
        this.setState({ ...this.state, address: e.target.value })
    }
    cardChange = (e) => {
        this.setState({ ...this.state, card_num: e.target.value })
    }
    expChange = (e) => {
        this.setState({ ...this.state, exp: e.target.value })
    }
    handleClick = () => {
        this.setState({ ...this.state, stage: 0 })
        console.log(this.state.name + this.state.email)
    }
    handleClick_1 = () => {
        this.setState({ ...this.state, redirect: true })
    }
    saveDataClick = async () => {
        const obj = {
            name: this.state.name,
            email: this.state.email,
            stay_start_date: this.props.itinerary.enterDate,
            stay_end_date: this.props.itinerary.exitDate,
            room_type: this.props.itinerary.roomType
        };
        console.log("Object is " + obj)
        await axios.post('http://localhost:4000/hotelRS1/add', obj)
            .then((res) => {
                console.log(res.data);
                this.setState({ response: res.data })
            });
        if (this.state.response.hotelRS1 === "success_1") {
            alert("Data Saved Successfully");
        } else {
            alert("unable to save data, please try again");
        }
        this.setState({ ...this.state, stage: 0 });
    }
    sendEmailClick = () => {
        const templateParams = {
            from_name: "Hotel West Inn",
            subject: "Confirmation",
            rec_email: this.state.email !== null ? this.state.email : null,
            message_html: "Your Reservation at West Inn is confirmed and your stay date starts from " + this.props.itinerary.enterDate + " to " + this.props.itinerary.exitDate,
            to_name: this.state.name !== null ? this.state.name : null,
        };

        emailjs.send('gmail', 'template_Bl9jrsNb', templateParams, 'user_bLarFHLTfyHL5M51XRyq9')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert("Email Sent Successfully")
            }, (err) => {
                console.log('FAILED...', err);
            });
        this.setState({ ...this.state, stage: 0 });
    }
    render() {
        if (this.state.redirect) {
            return <Redirect push to="/" />;
        }
        window.scrollTo(0, 0);

        return (

            <div className="container">

                <div>
                    {this.state.stage === 1 && <Grid>
                        <Row>
                            <Col sm={3} md={4}><hr /></Col>
                            <Col sm={6} md={4}>
                                <div id="centeredHeading">
                                    <h3>Enter Details</h3>
                                </div>
                            </Col>
                            <Col sm={3} md={4}><hr /></Col>
                        </Row>
                    </Grid>}
                    {this.state.stage !== 1 && <Grid>
                        <Row>
                            <Col sm={3} md={4}><hr /></Col>
                            <Col sm={6} md={4}>
                                <div id="centeredHeading">
                                    <h3>Confirmation</h3>
                                </div>
                            </Col>
                            <Col sm={3} md={4}><hr /></Col>
                        </Row>
                    </Grid>}
                </div>
                {this.state.stage === 1 &&
                    <div className="itineraryTable">
                        <h3>Your Details:</h3>
                        <Table striped bordered condensed>
                            <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td id="costAlignRight">
                                        <input style={{ "width": "100%" }} type="text" id="name" value={this.state.value} name="name" onChange={(e) => this.nameChange(e)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Email address</td>
                                    <td id="costAlignRight">
                                        <input style={{ "width": "100%" }} type="text" id="email" value={this.state.email} name="email" onChange={(e) => this.emailChange(e)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Address</td>
                                    <td id="costAlignRight">
                                        <input style={{ "width": "100%" }} type="text" id="address" value={this.state.address} name="address" onChange={(e) => this.addressChange(e)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Card Number</td>
                                    <td id="costAlignRight">
                                        <input style={{ "width": "100%" }} type="text" id="card_num" value={this.state.card_num} name="card_num" onChange={(e) => this.cardChange(e)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Expiration</td>
                                    <td id="costAlignRight">
                                        <input style={{ "width": "100%" }} type="text" id="exp" value={this.state.exp} name="exp" onChange={(e) => this.expChange(e)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td />
                                    <td>
                                        {/* <button onClick={() => this.sendEmailClick()}>SUBMIT</button> */}
                                        <button onClick={() => this.handleClick()}>SUBMIT</button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                }
                {this.state.stage !== 1 &&
                    <div className="itineraryTable">
                        <h3>Your Itinerary:</h3>
                        <Table striped bordered condensed>
                            <tbody>
                                <tr>
                                    <td>Confirmation number</td>
                                    <td id="costAlignRight">E949SBH0021</td>
                                </tr>
                                <tr>
                                    <td>Email address</td>
                                    <td id="costAlignRight">{this.state.email}</td>
                                </tr>
                                <tr>
                                    <td>Total cost of stay</td>
                                    <td id="costAlignRight">${this.props.itinerary.totalCostOfStay}</td>
                                </tr>
                                <tr>
                                    <td>Room type</td>
                                    <td id="costAlignRight">{this.props.itinerary.roomType}</td>
                                </tr>
                                <tr>
                                    <td>Number of adult guests</td>
                                    <td id="costAlignRight">{this.props.itinerary.numAdults}</td>
                                </tr>
                                <tr>
                                    <td>Check-in Date:</td>
                                    <td id="costAlignRight">{this.props.itinerary.enterDate}</td>
                                </tr>
                                <tr>
                                    <td>Check-out Date</td>
                                    <td id="costAlignRight">{this.props.itinerary.exitDate}</td>
                                </tr>
                                <tr>
                                    <td>Length of stay</td>
                                    <td id="costAlignRight">{this.props.itinerary.numNights} nights</td>
                                </tr>
                            </tbody>
                        </Table>

                        <Table striped bordered condensed>
                            <tbody>
                                <tr>
                                    <td><h4>Optional addons:</h4></td>
                                    <td>{' '}</td>

                                </tr>
                                <tr>
                                    <td>Jacuzzi</td>
                                    <td id="costAlignRight">{this.props.itinerary.carePackage.toString()}</td>
                                </tr>
                                <tr>
                                    <td>Swimming pool usage</td>
                                    <td id="costAlignRight">{this.props.itinerary.lateCheckout.toString()}</td>
                                </tr>
                                <tr>
                                    <td>Meals</td>
                                    <td id="costAlignRight">{this.props.itinerary.shuttleRide.toString()}</td>
                                </tr>
                                <tr>
                                    <td>Additional Bed</td>
                                    <td id="costAlignRight">{this.props.itinerary.luggageHold.toString()}</td>
                                </tr>
                            </tbody>
                        </Table>
                        <br />
                        <Table striped bordered condensed>
                            <tbody>
                                <tr>
                                    <td><button onClick={() => this.saveDataClick()}>SAVE DATA</button></td>
                                    <td><button onClick={() => this.sendEmailClick()}>SEND EMAIL</button></td>
                                    <td><button onClick={() => this.handleClick_1()}>CLOSE</button></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                }
                <br />

            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        itinerary: state.itineraryReducer.itinerary,
        pricing: state.pricingReducer
    };
}

export default connect(mapStateToProps)(Confirmation);

