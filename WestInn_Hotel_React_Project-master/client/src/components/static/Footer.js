import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';


class Footer extends Component {
    state = { googleMapShow: false };

    render() {
        return (
            <div className="footerContainer">

                <Grid id="centeredGoogleMap">
                </Grid>
                <Grid id="centeredFooterText">
                    <Row>
                        <Col sm={2} md={2}>{' '}</Col>
                        <Col sm={8} md={8}>
                            <br />
                            2330 N Oliver Street, Wichita, KS, 67220
                                <br />
                            <br />
                            © 2019 Chakradhar Reddy
                                <br />
                            <hr id="footerBar" />
                        </Col>
                        <Col sm={2} md={2}>{' '}</Col>
                    </Row>
                </Grid>
                <div></div>
            </div>
        );
    }
}

export default Footer;