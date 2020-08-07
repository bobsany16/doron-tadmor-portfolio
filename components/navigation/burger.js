import { slide as Menu } from "react-burger-menu";
import Anchor from "../navigation/anchor";

const Burger = ({ chilren, props }) => {
  return (
    <Menu right {...props}>
      <Anchor href="/about" title="ABOUT" headingType="h3" />
      <Anchor href="/" title="RESUMÉ" headingType="h3" />
      <Anchor href="/" title="PROJECTS" headingType="h3" />
      <Anchor href="/" title="GLOBAL SCALE" headingType="h3" />
      <Anchor href="/" title="CONTACT" headingType="h3" />
    </Menu>
  );
};

export default Burger;
