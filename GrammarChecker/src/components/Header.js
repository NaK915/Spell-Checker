import React from "react";
class Header extends React.Component {
  render() {
    return (
      //whatever you return, there must be one root element
      //because when you render, you are rendering ONE element
      <header id="header">
        {" "}
        <h2 id="site-name">
        Spell Checker
        </h2>
      </header>
    );
  }
}
export default Header;
