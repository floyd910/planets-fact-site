import "./MobileMenu.css";
import MenuItem from "../menuItem/MenuItem";
export default function MobileMenu({ planets, showMobileMenu }) {
  return (
    <nav className="mobile-nav">
      <ul>
        {planets.map((planet) => {
          return (
            <MenuItem
              key={planet.name}
              planet={planet}
              showMobileMenu={showMobileMenu}
            />
          );
        })}
      </ul>
    </nav>
  );
}
