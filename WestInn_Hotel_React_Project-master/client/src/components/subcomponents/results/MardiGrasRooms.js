import React from 'react';
import { Button } from 'react-bootstrap';
// arguments received: this.props.pricing, this.handleSubmit
//===============================================================================================//

export function mardiGrasRooms(pricing, submit) {
    return (
        <div>
            <div>
                <div>
                    <div className="roomExpandedLeftHeadline">
                        Miniature Suite
                        <div id="roomPrice">
                            ${(pricing.miniatureSuite).toFixed(2)}/night
                        </div>
                        <h4>(Room size: 725 sq. ft)</h4>
                    </div>
                    <p className="roomExpandedRightButton">
                        <Button bsStyle="success" value="miniatureSuite" onClick={submit}>Book now</Button>
                    </p>
                </div>
                <div className="roomDescription">
                    <p>
                        Pretyy good room view.
                        Hot tub inside of room.
                    </p>
                </div>
            </div>
            <hr />
            <div>
                <div>
                    <div className="roomExpandedLeftHeadline">
                        Family Special
                        <div id="roomPrice">
                            ${(pricing.familySpecialSuite).toFixed(2)}/night
                        </div>
                        <h4>(Room size: 718 sq. ft.)</h4>
                    </div>
                    <p className="roomExpandedRightButton">
                        <Button bsStyle="success" value="familySpecialSuite" onClick={submit}>Book now</Button>
                    </p>
                </div>
                <div className="roomDescription">
                    <p>
                        Ideal accomodation for a family. Luxurious feel. Stroller is already in room.
                        One king bed, city view. Free $25 bar voucher, concierge service.
                        </p>
                </div>
            </div>
        </div>
    );
}