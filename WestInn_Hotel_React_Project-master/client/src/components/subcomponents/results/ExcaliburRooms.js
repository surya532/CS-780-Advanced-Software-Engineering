import React from 'react';
import { Button } from 'react-bootstrap';
// arguments received: this.props.pricing, this.handleSubmit
//===============================================================================================//

export function excaliburRooms(pricing, submit) {
    return (
        <div className="excaliburContainer">
            <div>
                <div>
                    <div className="roomExpandedLeftHeadline">
                        Executive Suite
                        <div id="roomPrice">
                            ${(pricing.executiveSuite).toFixed(2)}/night
                        </div>
                        <h4>(Room size: 986 sq. ft.)</h4>
                    </div>
                    <p className="roomExpandedRightButton">
                        <Button bsStyle="success" value="executiveSuite" onClick={submit}>Book now</Button>
                    </p>
                </div>
                <div className="roomDescription">
                    <p>
                        One king bed, city view. Free $50 bar voucher, concierge service and exclusive valet parking.
                        Hot tub inside of room. A stay you will remember.
                    </p>
                </div>
            </div>
            <hr />
            <div>
                <div>
                    <div className="roomExpandedLeftHeadline">
                        Bachelor Suite
                        <div id="roomPrice">
                            ${(pricing.bachelorSuite).toFixed(2)}/night
                        </div>
                        <h4>(Room size: 875 sq. ft.)</h4>
                    </div>
                    <p className="roomExpandedRightButton">
                        <Button bsStyle="success" value="bachelorSuite" onClick={submit}>Book now</Button>
                    </p>
                </div>
                <div className="roomDescription">
                    <p>
                        Great for accommodating a large number of guests. Complimentary bottle of champagne.
                        One king bed, city view. Free $25 bar voucher, concierge service.</p>
                </div>
            </div>
        </div>
    );
}