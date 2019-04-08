import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header className="only-color">
          <div className="page-header-top">
              <div className="grid-row clear-fix">
                  <address>
                      <p>Official Website : <a href="https://www.medgo.fr/landing" className="site">www.medgo.fr</a></p>
                  </address>
              </div>
          </div>
        <div className="sticky-wrapper">
          <div className="sticky-menu">
            <div className="grid-row clear-fix">
              <Link to="/" className="logo">
                <img src="img/medgo_logo.png" alt=""/>
              </Link>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
