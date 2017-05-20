import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Rating from 'react-rating';


export default class HeaderThumbnail extends Component {

  render() {
    return (
      <Grid bsClass="width:100% ; background-color:#3C4348;" >
        <Row>
          <Col lg={12} xs={6} md={4}>
          <h3>Thumbnail label</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            <Thumbnail src="images/demo/gallery/01.png" alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Description</p>
              <p>
                <Button bsStyle="primary">Details</Button>&nbsp;
              </p>
              <Rating />
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src="images/demo/gallery/01.png" alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Description</p>
              <p>
                <Button bsStyle="primary">Details</Button>&nbsp;
              </p>
              <Rating />
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src="images/demo/gallery/01.png" alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Description</p>
              <p>
                <Button bsStyle="primary">Details</Button>&nbsp;
              </p>
              <Rating />
            </Thumbnail>
          </Col>
        </Row>
      </Grid>
    );
  }
}

