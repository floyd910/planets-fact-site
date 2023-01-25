import "./Menu.css";
import MenuItem from "../menuItem/MenuItem";
export default function Menu({ planets, showMobileMenu }) {
  return (
    <nav className="navbar">
      <ul>
        {planets.map((planet, counter) => {
          return (
            <MenuItem
              key={planet.name}
              planet={planet}
              showMobileMenu={showMobileMenu}
              counter={counter}
            />
          );
        })}
      </ul>
    </nav>
  );
}
