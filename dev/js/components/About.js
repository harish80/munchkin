import React, { Component } from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

const image = 'images/demo/backgrounds/about.jpg'
const aboutStyle = {
    backgroundImage: 'url(' + image + ')'
}

export default class About extends Component {

    render() {
        return (
            <div id="Contact" >
                <Grid className="wrapper row4 bgded overlay" style={aboutStyle}>
                    <footer id="footer" className="hoc clear">
                        <Row id="cta" className="group">
                            <Col className="one_third first"><i className="fa fa-map-marker"></i>
                                <p>Find us</p>
                                <p><a href="#">Google Maps</a></p>
                            </Col>
                            <Col className="one_third"><i className="fa fa-phone"></i>
                                <p>Call us</p>
                                <p>+00 (XX) YYY ZZZ</p>
                            </Col>
                            <Col className="one_third"><i className="fa fa-envelope-o"></i>
                                <p>Email us</p>
                                <p>info@domain.com</p>
                            </Col>
                        </Row>
                        <Row className="group">
                            <Col className="one_quarter first">
                                <h6 className="title">About Us</h6>
                                <p>Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah </p>
                                <p>Again Blah Blah Blah Blah Blah Blah Blah Blah </p>
                            </Col>
                            <Col className="one_quarter">
                                <h6 className="title">Some Linksr</h6>
                                <ul className="nospace linklist">
                                    <li><a href="#">Non Working Links </a></li>
                                    <li><a href="#">Non Working Links </a></li>
                                    <li><a href="#">Non Working Links </a></li>
                                    <li><a href="#">Non Working Links </a></li>
                                    <li><a href="#">Non Working Links </a></li>
                                </ul>
                            </Col>
                            <Col className="one_quarter">
                                <h6 className="title">Some title</h6>
                                <ul className="nospace linklist">
                                    <li><a href="#">Title 1</a></li>
                                    <li><a href="#">Title 1</a></li>
                                    <li><a href="#">Title 1</a></li>
                                    <li><a href="#">Title 1</a></li>
                                    <li><a href="#">Title 1</a></li>
                                </ul>
                            </Col>
                            <Col className="one_quarter">
                                <h6 className="title">Last Quater</h6>
                                <ul className="nospace linklist">
                                    <li>
                                        <article>
                                            <h2 className="nospace font-x1"><a href="#">Some Text</a></h2>
                                            <time className="font-xs block btmspace-10" >datetime</time>
                                            <p className="nospace">end.....;</p>
                                        </article>
                                    </li>
                                    <li>
                                        <article>
                                            <h2 className="nospace font-x1"><a href="#">Links</a></h2>
                                            <time className="font-xs block btmspace-10" datetime="2045-04-05">datetime</time>
                                            <p className="nospace">blaaaaaaaaaahhhhhhhhhhh</p>
                                        </article>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </footer>
                </Grid>
            </div>
        );
    }


}