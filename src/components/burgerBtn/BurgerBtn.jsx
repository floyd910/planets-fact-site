import burger from "../../assets/icon-hamburger.svg";

export default function BurgerBtn({ showMobileMenu }) {
  return (
    <button className="burger-btn" onClick={() => showMobileMenu()}>
      <img src={burger} alt="Hamburger menu icon" />
    </button>
  );
}
