import React, { useState, useRef } from "react";
import "./Header.scss";

import Logo from "../UI/Logo/Logo";
import BurgerMenu from "../UI/BurgerMenu/BurgerMenu";
import Menu from "../UI/Menu/Menu";

import logo from "../../assets/react-wpgraphql-logo.svg";
import { getLinkList } from "../../misc/shared/link-list";

const Header = props => {
  const [menuToggled, setMenuToggled] = useState(false);

  const targetElToDisplay = useRef(null);

  const menuClickHandler = e => {
    setMenuToggled(prev => !prev);
  };
  return (
    <section className="HeaderWrap">
      <header className="Header">
        <Logo src={logo} alt="React WP GraphQl Logo" />
        <BurgerMenu handleClick={menuClickHandler} toggled={menuToggled} />
      </header>
      <div ref={targetElToDisplay} className="HeaderWrap__slot -menu">
        <Menu
          linklist={getLinkList()}
          visible={menuToggled}
          touchTargetStyles={{
            borderBottom: "1px solid #ccc"
          }}
        />
      </div>
    </section>
  );
};

export default Header;
