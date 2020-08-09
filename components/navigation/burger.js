import React, { useState } from 'react';
import { slide as Menu } from "react-burger-menu";
import Anchor from "../navigation/anchor";

const Burger = ({ children, props }) => {

const [open, setOpen] = useState(false);

const handleChange = () => {
    setOpen = false;
}
  return (
    <Menu isOpen={open} right noOverlay {...props}>
      <Anchor href="/about" title="ABOUT" headingType="h3" />
      <Anchor href="/" title="RESUMÉ" headingType="h3" />
      <Anchor href="/" title="PROJECTS" headingType="h3" />
      <Anchor href="/" title="GLOBAL SCALE" headingType="h3" />
      <Anchor href="/" title="CONTACT" headingType="h3" />
    </Menu>
  );
};

export default Burger;
