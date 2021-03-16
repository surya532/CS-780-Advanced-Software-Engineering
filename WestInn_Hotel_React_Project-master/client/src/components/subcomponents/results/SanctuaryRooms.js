import React from 'react';
import { Button } from 'react-bootstrap';
// arguments received: this.props.pricing, this.handleSubmit
//===============================================================================================//

export function sanctuaryRooms(pricing, submit) {
    return (
        <div>
            <div>
                <div>
                    <div className="roomExpandedLeftHeadline">
                        <div id="roomPrice">
                            Villa ${(pricing.villaSanctuary).toFixed(2)}/night
                        </div>
                        <h4>(Room size: 466 sq. ft.)</h4>
                    </div>
                    <p className="roomExpandedRightButton">
                        <Button bsStyle="success" value="villaSanctuary" onClick={submit}>Book now</Button>
                    </p>
                </div>
                <div className="roomDescription">
                    <p>
                        Ideal for a getaway in the city. Has two very comfortable beds. Free access to our gym.

                    </p>
                </div>
            </div>
            <hr />
            <div>
                <div>
                    <div className="roomExpandedLeftHeadline">
                        Priority
                        <div id="roomPrice">
                            ${(pricing.prioritySanctuary).toFixed(2)}/night
                        </div>
                        <h4>(Room size: 424 sq. ft.)</h4>
                    </div>
                    <p className="roomExpandedRightButton">
                        <Button bsStyle="success" value="prioritySanctuary" onClick={submit}>Book now</Button>
                    </p>
                </div>
                <div className="roomDescription">
                    <p>
                        Nice room on a budget. Not remodeled like our Villa rooms but still nice. Free access to our gyms.
                    </p>
                </div>
            </div>
        </div>
    );
}