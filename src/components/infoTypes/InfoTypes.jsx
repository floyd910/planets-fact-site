import "./InfoTypes.css";

export default function InfoTypes({
  chooseInfo,
  infoTitles,
  infoType,
  index,
  largeScreen
}) {
  const borderStyle = [
    { borderBottom: "4px solid #419EBB" },
    { borderBottom: "4px solid #EDA249" },
    { borderBottom: "4px solid #6D2ED5" },
    { borderBottom: "4px solid #D14C32" },
    { borderBottom: "4px solid #D83A34" },
    { borderBottom: "4px solid #CD5120" },
    { borderBottom: "4px solid #1EC1A2" },
    { borderBottom: "4px solid #2D68F0" }
  ];

  const bgStyle = [
    { background: "#419EBB" },
    { background: "#EDA249" },
    { background: "#6D2ED5" },
    { background: "#D14C32" },
    { background: "#D83A34" },
    { background: "#CD5120" },
    { background: "#1EC1A2" },
    { background: "#2D68F0" }
  ];

  return (
    <>
      {!largeScreen ? (
        <div className="info-types">
          {infoTitles.map((info) => {
            return (
              <button
                style={
                  infoType.toLowerCase() !== info.toLowerCase()
                    ? {
                        borderBottom: "transparent 4px solid"
                      }
                    : borderStyle[index]
                }
                key={info}
                onClick={() => chooseInfo(info)}
              >
                <p>{info}</p>
              </button>
            );
          })}
        </div>
      ) : (
        <div className="info-types">
          {infoTitles.map((info, i) => {
            return (
              <button
                className={
                  infoType.toLowerCase() !== info.toLowerCase()
                    ? "non-active-btn-info"
                    : ""
                }
                style={
                  infoType.toLowerCase() === info.toLowerCase()
                    ? bgStyle[index]
                    : { background: "transparent" }
                }
                key={info}
                onClick={() => chooseInfo(info)}
              >
                {i === 0 ? (
                  <p>
                    <span>01</span>
                    <span>{info}</span>
                  </p>
                ) : i === 1 ? (
                  <p>
                    <span>02</span>
                    <span>Internal Structure</span>
                  </p>
                ) : (
                  <p>
                    <span>03</span>
                    <span>Surface Geology</span>
                  </p>
                )}
              </button>
            );
          })}
        </div>
      )}
    </>
  );
}
