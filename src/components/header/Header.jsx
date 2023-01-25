import Logo from "../logo/Logo";
import BurgerBtn from "../burgerBtn/BurgerBtn";
import Menu from "../menu/Menu";

import "./Header.css";

export default function Header({ showMobileMenu, planets }) {
  return (
    <header>
      <Logo />
      <BurgerBtn showMobileMenu={showMobileMenu} />
      <Menu planets={planets} showMobileMenu={showMobileMenu} />
    </header>
  );
}
