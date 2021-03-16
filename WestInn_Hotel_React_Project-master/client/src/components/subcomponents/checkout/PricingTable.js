import React from 'react';
import { Table } from 'react-bootstrap';


// this function generates the entire JSX table on checkout page
// pricing for everything can be easily changed in the reducers/pricing.js file
// arguments received: this.state, this.props.itinerary, this.props.pricing, this.handleAddonChange, this.totalCostDynamic())
//===============================================================================================//

export function pricingTable(state, itinerary, pricing, handleAddonChange, totalCostDynamic) {
    return (
        <Table striped bordered condensed>
            <thead id="tableHeader">
                <tr>
                    <th>Item/Description:</th>
                    <th id="costAlignRight">Cost:</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Room base charge (${state.roomCost.toFixed(2)} x {itinerary.numNights} nights)</td>
                    <td id="costAlignRight">${(state.roomCost * itinerary.numNights).toFixed(2)}</td>
                </tr>
                <tr>
                    <td>Cleaning fee (${pricing.cleaningCost.toFixed(2)} x {itinerary.numNights} nights)</td>
                    <td id="costAlignRight">${(pricing.cleaningCost * itinerary.numNights).toFixed(2)}</td>
                </tr>
                <tr>
                    <td>K. S. occupancy tax ({(pricing.occupancyTax * 100).toFixed(3)}%)</td>
                    <td id="costAlignRight">${(((state.roomCost + pricing.cleaningCost) * itinerary.numNights) * pricing.occupancyTax).toFixed(2)}</td>
                </tr>
                <tr>
                    <td>K. S. tourism tax ({(pricing.tourismTax * 100).toFixed(3)}%)</td>
                    <td id="costAlignRight">${(((state.roomCost + pricing.cleaningCost) * itinerary.numNights) * pricing.tourismTax).toFixed(2)}</td>
                </tr>
                <tr>
                    <td> </td>
                    <td> </td>
                </tr>
                <tr id="tableHeader">
                    <td>Optional addons (all prices includes sales tax):</td>
                    <td> </td>
                </tr>
                <tr>
                    <td>
                        <label>
                            <input name="carePackage" type="checkbox" onChange={handleAddonChange} />
                            &nbsp;Jacuzzi (${(pricing.carePackageCost).toFixed(2)} * number of nights)
                        </label>
                    </td>
                    <td id="costAlignRight">{state.carePackageCost}</td>
                </tr>
                <tr>
                    <td>
                        <label>
                            <input name="lateCheckout" type="checkbox" onChange={handleAddonChange} />
                            &nbsp;Swimming pool usage (${(pricing.lateCheckoutCost).toFixed(2)} * number of nights)
                        </label>
                    </td>
                    <td id="costAlignRight">{state.lateCheckoutCost}</td>
                </tr>
                <tr>
                    <td>
                        <label>
                            <input name="shuttleRide" type="checkbox" onChange={handleAddonChange} />
                            &nbsp;Meals (${(pricing.shuttleRideCost).toFixed(2)} * number of nights)
                        </label>
                    </td>
                    <td id="costAlignRight">{state.shuttleRideCost}</td>
                </tr>
                <tr>
                    <td>
                        <label>
                            <input name="breakfast" type="checkbox" onChange={handleAddonChange} />
                            &nbsp;Additional Bed (${(pricing.breakfastCost).toFixed(2)} * number of nights)                        </label>
                    </td>
                    <td id="costAlignRight">{state.breakfastCost}</td>
                </tr>
                {/* <tr>
                    <td>
                        <label>
                            <input name="luggageHold" type="checkbox" onChange={handleAddonChange} />
                            &nbsp;Luggage hold (FREE!!) (leave your luggage with us before and/or after your stay)
                        </label>
                    </td>
                    <td id="costAlignRight">{state.luggageHoldCost}</td>
                </tr> */}
                <tr id="totalHighlight">
                    <td>TOTAL</td>
                    <td id="costAlignRight">${totalCostDynamic} USD</td>
                </tr>
            </tbody>
        </Table>
    );
}