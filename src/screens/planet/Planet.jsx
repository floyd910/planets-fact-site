import { useState } from "react";
import PlanetImg from "../../components/planetImg/PlanetImg";
import MobileMenu from "../../components/mobileMenu/MobileMenu";
import Header from "../../components/header/Header";
import Parameter from "../../components/parameter/Parameter";
import InfoTypes from "../../components/infoTypes/InfoTypes";
import source from "../../assets/icon-source.svg";
import bg from "../../assets/background-stars.svg";

import "./Planet.css";
import "../../styles.css";
export default function Planet({ planet, planets, index }) {
  const [infoType, setInfoType] = useState("Overview");
  const infoTitles = ["Overview", "Structure", "Surface"];
  const chooseInfo = (info) => {
    setInfoType(info);
  };
  const [mobileMenuDisplay, setMobileMenuDisplay] = useState(false);

  const showMobileMenu = (navLinkPressed) => {
    navLinkPressed ? newPage() : setMobileMenuDisplay(!mobileMenuDisplay);
  };

  const newPage = () => {
    setInfoType("Overview");
    window.scrollTo(0, 0);
    setMobileMenuDisplay(false);
  };

  let params = ["rotation", "revolution", "radius", "temperature"];

  const myStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    objectFit: "cover",
    backgroundPosition: "center",
    paddingBottom: mobileMenuDisplay ? "0px" : "47px"
  };
  return (
    <div className="planet-page" style={myStyle}>
      <Header showMobileMenu={showMobileMenu} planets={planets} />
      {mobileMenuDisplay ? (
        <MobileMenu planets={planets} showMobileMenu={showMobileMenu} />
      ) : (
        <div className="content">
          <div className="info-types-mb">
            <InfoTypes
              infoType={infoType}
              chooseInfo={chooseInfo}
              infoTitles={infoTitles}
              index={index}
            />
          </div>

          <div className="planet-info">
            <PlanetImg planet={planet} infoType={infoType} index={index} />
            <div className="planet-text-control">
              <div className="planet-text">
                <h2>{planet.name}</h2>
                <p className="description">
                  {infoType.toLowerCase() !== "surface"
                    ? planet[infoType.toLowerCase()].content
                    : planet.geology.content}
                </p>
                <div className="source">
                  <p>Source : </p>
                  <a
                    href={
                      infoType.toLowerCase() !== "surface"
                        ? planet[infoType.toLowerCase()].source
                        : planet.geology.source
                    }
                  >
                    Wikipedia
                  </a>
                  <img alt="Source icon" src={source} />
                </div>
              </div>
              <div className="info-types-l-size">
                <InfoTypes
                  infoType={infoType}
                  chooseInfo={chooseInfo}
                  infoTitles={infoTitles}
                  index={index}
                  largeScreen={true}
                />
              </div>
            </div>
          </div>
          <div className="params">
            {params.map((prm, ind) => {
              return (
                <Parameter ind={ind} key={prm} prm={prm} planet={planet} />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
