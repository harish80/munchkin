import React from 'react';
import ReactDOM from "react-dom";
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

export default class Footer extends React.Component {

    render() {
        return (
            <Grid className="wrapper row6 bgded">
                <Row >
                    <Col lg={6} xs={6} md={4}>
                        <ul className="faico clear">
                            <li><a className="faicon-facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a className="faicon-pinterest" href="#"><i className="fa fa-pinterest"></i></a></li>
                            <li><a className="faicon-twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a className="faicon-dribble" href="#"><i className="fa fa-dribbble"></i></a></li>
                            <li><a className="faicon-linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
                            <li><a className="faicon-google-plus" href="#"><i className="fa fa-google-plus"></i></a></li>
                            <li><a className="faicon-vk" href="#"><i className="fa fa-vk"></i></a></li>
                            <li><a className="faicon-youtube" href="#"><i className="fa fa-youtube"></i></a></li>
                        </ul>
                        <a id="backtotop" href="#start"><i className="fa fa-chevron-up"></i></a>

                    </Col>
                </Row>
                <Row className="row footer-bottom-buffer">
                    <Col className="col-md-8">
                    </Col>
                    <Col className="col-md-4 ">
                        <p >Copyright &copy; 2016 - All Rights Reserved - <a href="#">Domain Name</a></p>
                    </Col>
                </Row>
            </Grid>

        );

    }
}