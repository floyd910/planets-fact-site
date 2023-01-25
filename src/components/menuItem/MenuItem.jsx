import { useState } from "react";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import chevron from "../../assets/icon-chevron.svg";
import "./MenuItem.css";

export default function MenuItem({ planet, showMobileMenu, counter }) {
  const [hovered, setHovered] = useState(false);
  const borderStyle = [
    { borderTop: "4px solid #419EBB" },
    { borderTop: "4px solid #EDA249" },
    { borderTop: "4px solid #6D2ED5" },
    { borderTop: "4px solid #D14C32" },
    { borderTop: "4px solid #D83A34" },
    { borderTop: "4px solid #CD5120" },
    { borderTop: "4px solid #1EC1A2" },
    { borderTop: "4px solid #2D68F0" }
  ];
  return (
    <>
      <MediaQuery minWidth={1240}>
        <li
          style={
            hovered
              ? borderStyle[counter]
              : { borderTop: "4px solid transparent" }
          }
        >
          {/* Non-mobile navbar link 
      is using onclick 
      showMobileMenu function only to call
      nextPage function which will setInfoType
      back to "Overview" */}

          <Link
            onClick={() => showMobileMenu(true)}
            className="nav-link"
            to={`/${planet.name}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <span className="planet">
              <span
                className="planet-icon"
                style={{ background: `${planet.color}` }}
              ></span>
              {planet.name}
            </span>
            <img src={chevron} alt="Chevron right icon" />
          </Link>
        </li>
      </MediaQuery>
      <MediaQuery maxWidth={1239}>
        <li>
          {/* Non-mobile navbar link 
     is using onclick 
     showMobileMenu function only to call
     nextPage function which will setInfoType
     back to "Overview" */}

          <Link
            onClick={() => showMobileMenu(true)}
            className="nav-link"
            to={`/${planet.name}`}
          >
            <span className="planet">
              <span
                className="planet-icon"
                style={{ background: `${planet.color}` }}
              ></span>
              {planet.name}
            </span>
            <img src={chevron} alt="Chevron right icon" />
          </Link>
        </li>
      </MediaQuery>
    </>
  );
}
