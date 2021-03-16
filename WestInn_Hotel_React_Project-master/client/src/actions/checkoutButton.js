import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
class CheckoutButton extends Component {
    constructor(props) {
        super(props);
        this.state = { redirect: false, openDialog: false };
    }
    buttonClick = () => {
        this.setState({ ...this.state, openDialog: true })
    }
    render() {
        if (this.state.redirect) {
            return <Redirect push to="/confirmation" />;
        }
        if (this.state.openDialog) {
            return <Redirect push to="/confirmation" />;
        }
        return (
            <div>
                <Button bsStyle="success" onClick={() => this.buttonClick()}>
                    Book my stay now!
                    </Button>
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
export default connect(mapStateToProps)(CheckoutButton);