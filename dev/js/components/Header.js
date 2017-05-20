import React, { Component } from 'react'



export default class Header extends Component {
  render() {
    return (
        <div className="wrapper row1">
          <header id="header" className="hoc clear">
            <div id="logo" className="fl_left">
              <h1>Code Blog</h1>
            </div>
            <div id="search" className="fl_right">
              <form className="clear" method="post" action="#">
                <fieldset>
                  <input type="search" value="" placeholder="Search Here&hellip;" />
                  <button className="fa fa-search" type="submit" title="Search"><em>Search</em></button>
                </fieldset>
              </form>
            </div>
          </header>
        </div>

    )
  }
}