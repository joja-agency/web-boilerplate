import React, { Component } from "react";
import logosvg from "../assets/img/logo.svg";
import { Link } from "react-router-dom";

class Logo extends Component {
  
  componentDidMount() {}

  render = () => {
    return (
      <div className="logoNav">
        <Link to="/">
          <div id="logo" ref="logosvg">
            <img src={logosvg} alt="" />
          </div>
        </Link>
      </div>
    );
  };
}

export default Logo;
