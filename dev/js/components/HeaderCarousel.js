import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-bootstrap/lib/Carousel';
import CarouselItem from 'react-bootstrap/lib/CarouselItem';
import CarouselCaption from 'react-bootstrap/lib/CarouselCaption';
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'



export default class ControlledCarousel extends Component {

    constructor(props) {
        super(props)
        this.state = { index: 0, direction: null };
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }

    render() {
        return (
                <Grid bsStyle="height:200px ">
                    <Row>
                        <Col >
                            <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect} >
                                <Carousel.Item>
                                    <img height={200} alt="900x500" src="/images/backgrounds/background.png" />
                                    <Carousel.Caption>
                                        <article>
                                            <div className="overlay inspace-30 btmspace-30">
                                                <h2 className="heading">Promotion</h2>
                                                <p>
                                                    Description
                                </p>
                                            </div>
                                            <footer>
                                                <ul className="nospace inline pushright">
                                                    <li><a className="btn" href="pages/gallery.html">Read More</a></li>
                                                </ul>
                                            </footer>
                                        </article>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Grid>
        );
    }
}

const gridStyle = {
    backgroundcolor: 'blue',
    // backgroundImage: 'url(' + imgUrl + ')',
    backgroundImage: "background-color:#000000 -webkit-radial-gradient(50% top, circle, rgba(84,90,182,0.6) 0%, rgba(84,90,182,0) 75%),-webkit-radial-gradient(right top, circle, #794aa2)"
};

