import React, { Component } from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'


export default class LearningHeader extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2"><a className="  node-js lang-logo " href="/images/technology/nodejs"> </a></div>
                    <div className="col-md-2"><a className="  ruby lang-logo" href="/images/technology/ruby"> </a></div>
                    <div className="col-md-2"><a className="  java lang-logo" href="/images/technology/java"> </a></div>
                    <div className="col-md-2"><a className="  php lang-logo" href="/images/technology/php"> </a></div>
                    <div className="col-md-2"><a className="  python lang-logo" href="/images/technology/python"> </a></div>
                    <div className="col-md-2"><a className="  clojure lang-logo" href="/images/technology/clojure"> </a></div>
                </div>
                <div className="row bottom-buffer">
                    <div className="col-md-12 "> </div>
                </div>

            </div>
        );
    }
}