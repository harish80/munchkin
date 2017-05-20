import React, { Component } from 'react'
import Registration from '../components/Registration'
import Login from '../components/Login'
import Header from '../components/Header'
import MenuNavBar from '../components/MenuNavBar';
import HeaderCarousel from '../components/HeaderCarousel';
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Footer from '../components/Footer'
import HeaderThumbnail from '../components/HeaderThumbnail'
import About from '../components/About'
import LearningHeader from '../components/LearningHeader'


class MainPage extends Component {
  render() {
    return (
      <Grid >
        <Row >
          <Registration />
        </Row>
        <Row >
          <Login />
        </Row>
        <Row   >
          <Header />
        </Row>
        <Row >
          <MenuNavBar />
        </Row>
        <Row>
          <LearningHeader />
        </Row>
        <Row  >
          <HeaderCarousel />
        </Row>

        <Row >
          <HeaderThumbnail />
        </Row>
        <Row>
          <About />
        </Row>
        <Row >
          <Footer />
        </Row>
      </Grid>
    )
  }
}

export default MainPage
