import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'react-day-picker/lib/style.css';
import InputCalendar from './subcomponents/landing/InputCalendar';
import { updateNumAdults } from '../actions';
import { inputAdults } from './subcomponents/landing/InputAdults';

class Landing extends Component {

    componentWillMount() {
        window.scrollTo(0, 0);
    }

    handleNumAdultChange(event) {
        let inputNumAdults = event.target.value;
        this.props.dispatch(updateNumAdults(inputNumAdults));
    }


    render() {
        document.title = 'West Inn Reservation ';
        return (
            <div className="landingContainer">
                <div className="splashContent">
                    <div id="centerWelcomeAndCalendar">
                        <h1>Welcome to West Inn</h1>
                        <h4>A premier hotel in the heart of Downtown Wichita, KS</h4>
                        <div id="calendarPicker">
                            <InputCalendar />
                            {inputAdults(this.props, this.handleNumAdultChange.bind(this))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        itinerary: state.itineraryReducer.itinerary,
    };
}

export default connect(mapStateToProps)(Landing);