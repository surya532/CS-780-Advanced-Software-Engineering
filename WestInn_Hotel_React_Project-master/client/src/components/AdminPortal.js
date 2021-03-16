import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import { Redirect } from 'react-router';
import axios from 'axios';

class AdminPortal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            reservations: []
        }
    }
    async componentDidMount() {
        await axios.get('http://localhost:4000/hotelRS1')
            .then(response => {
                this.setState({ ...this.state, reservations: response.data });
                console.log(this.state.reservations);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    handleClose = () => {
        this.setState({ ...this.state, redirect: true });
    }
    render() {
        if (this.state.redirect) {
            return <Redirect push to="/" />;
        }
        window.scrollTo(0, 0);
        return (
            <div className="container">
                <div>
                    <Grid>
                        <Row>
                            <Col sm={3} md={4}><hr /></Col>
                            <Col sm={6} md={4}>
                                <div id="centeredHeading">
                                    <h3>Admin Portal</h3>
                                </div>
                            </Col>
                            <Col sm={3} md={4}><hr /></Col>
                        </Row>
                    </Grid>
                </div>
                {this.state.reservations && this.state.reservations.length > 0 &&
                    <div className="itineraryTable">
                        <h3>West Inn Reservations:</h3>
                        <Table striped bordered condensed>
                            <thead style={{ "text-align": "center", "fontSize": "medium", "fontVariant": "all-petite-caps", "fontFamily": "sans-serif" }}>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Start Date</td>
                                <td>End Date</td>
                                <td>Room Type</td>
                            </thead>
                            <tbody>

                                {this.state.reservations
                                    && this.state.reservations.length > 0
                                    && this.state.reservations.map((listValue, index) => {
                                        return (
                                            <tr style={{ "text-align": "center", "fontSize": "medium", "fontVariant": "all-petite-caps", "fontFamily": "inherit" }}>
                                                <td>{listValue.name && listValue.name !== "" ? listValue.name : "N/A"}</td>
                                                <td>{listValue.email && listValue.email !== "" ? listValue.email : "N/A"}</td>
                                                <td>{listValue.stay_start_date && listValue.stay_start_date !== "" ? listValue.stay_start_date : "N/A"}</td>
                                                <td>{listValue.stay_end_date && listValue.stay_end_date !== "" ? listValue.stay_end_date : "N/A"}</td>
                                                <td>{listValue.room_type && listValue.room_type !== "" ? listValue.room_type : "N/A"}</td>
                                            </tr>)
                                    })}
                            </tbody>
                        </Table>
                        <br />
                        <button onClick={() => this.handleClose()}>CLOSE</button>
                    </div>
                }
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

export default connect(mapStateToProps)(AdminPortal);

