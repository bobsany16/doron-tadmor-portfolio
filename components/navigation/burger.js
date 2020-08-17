import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import Anchor from "../navigation/anchor";
import burgerData from "../data/navigationData";

class Burger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  toggleMenu() {
    this.setState((state) => ({ menuOpen: !state.isOpen }));
  }

  handleChange() {
    this.closeMenu();
  }

  _renderAnchors = (array) => {
    return array.map((item, index) => {
      return (
        <Anchor
          href={`/${item.link}`}
          title={item.section}
          headingType="h3"
          onClick={() => this.toggleMenu}
          key={index}
        />
      );
    });
  };

  render() {
    return (
      <Menu isOpen={this.state.menuOpen} right noOverlay>
        {this._renderAnchors(burgerData)}
      </Menu>
    );
  }
}

export default Burger;
