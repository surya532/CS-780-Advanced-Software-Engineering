import React from 'react';
import { Button } from 'react-bootstrap';
// arguments received: this.props.pricing, this.handleSubmit
//===============================================================================================//

export function standardRooms(pricing, submit) {
    return (
        <div>
            <div>
                <div>
                    <div className="roomExpandedLeftHeadline">
                        With View
                        <div id="roomPrice">
                            ${(pricing.viewStandard).toFixed(2)}/night
                        </div>
                        <h4>(Room size: 375 sq. ft)</h4>
                    </div>
                    <p className="roomExpandedRightButton">
                        <Button bsStyle="success" value="viewStandard" onClick={submit}>Book now</Button>
                    </p>
                </div>
                <div className="roomDescription">
                    <p>
                        This is a basic hotel room. Has the amenities you would typically expect. has a view of street.
                                </p>
                </div>
            </div>
            <hr />
            <div>
                <div>
                    <div className="roomExpandedLeftHeadline">
                        No View
                        <div id="roomPrice">
                            ${(pricing.noViewStandard).toFixed(2)}/night
                        </div>
                        <h4>(Room size: 325 sq. ft.)</h4>
                    </div>
                    <p className="roomExpandedRightButton">
                        <Button bsStyle="success" value="noViewStandard" onClick={submit}>Book now</Button>
                    </p>
                </div>
                <div className="roomDescription">
                    <p>
                        Basic room for those on the go. Has the same layout and amenities as the room with view.
                                            </p>
                </div>
            </div>
        </div>
    );
}