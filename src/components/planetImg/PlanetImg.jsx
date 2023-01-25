import "./PlanetImg.css";
import MediaQuery from "react-responsive";
export default function PlanetImg({ planet, infoType, index }) {
  var imagePath =
    infoType.toLowerCase() === "structure"
      ? planet.images.internal
      : planet.images.planet;

  var imagePath2 =
    infoType.toLowerCase() === "surface" ? planet.images.geology : null;

  const dimension = [
    { mob: "111px", planshet: "184px", desktop: "290px" },

    { mob: "154px", planshet: "253px", desktop: "400px" },

    { mob: "173px", planshet: "285px", desktop: "450px" },

    { mob: "129px", planshet: "213px", desktop: "336px" },

    { mob: "224px", planshet: "369px", desktop: "582px" },

    { mob: "256px", planshet: "422px", desktop: "666.09px" },

    { mob: "176px", planshet: "290px", desktop: "458px" },

    { mob: "173px", planshet: "285px", desktop: "450px" }
  ];

  // planshetScreen ? alert("tablet") : alert("desktop");
  return (
    <div className="hero-images">
      <MediaQuery minWidth={768} maxWidth={1239}>
        <div
          className="img-place"
          style={{
            width: dimension[index].planshet,
            height: dimension[index].planshet
          }}
        >
          <img className="planet-img" src={imagePath} alt={planet.name} />
          {imagePath2 && (
            <img
              className="planet-img-geology"
              src={imagePath2}
              alt={planet.name}
            />
          )}
        </div>
      </MediaQuery>

      <MediaQuery maxWidth={767}>
        <div
          className="img-place"
          style={{ width: dimension[index].mob, height: dimension[index].mob }}
        >
          <img className="planet-img" src={imagePath} alt={planet.name} />
          {imagePath2 && (
            <img
              className="planet-img-geology"
              src={imagePath2}
              alt={planet.name}
            />
          )}
        </div>
      </MediaQuery>
      <MediaQuery minWidth={1240}>
        <div
          className="img-place"
          style={{
            width: dimension[index].desktop,
            height: dimension[index].desktop
          }}
        >
          <img className="planet-img" src={imagePath} alt={planet.name} />
          {imagePath2 && (
            <img
              className="planet-img-geology"
              src={imagePath2}
              alt={planet.name}
            />
          )}
        </div>
      </MediaQuery>
    </div>
  );
}
