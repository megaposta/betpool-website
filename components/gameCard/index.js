import React from "react";

const GameCard = ({ item, identifier }) => {
  return (
    <div
      style={{
        borderRadius: "16px",
        position: "relative",
        height: "12em",
      }}
    >
      <img
        style={{
          borderRadius: "16px",
          objectFit: "cover",
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
        src={`https://cdn.softswiss.net/i/s3/${identifier}.png`}
        alt={item.title}
      />
      <div
        style={{
          borderRadius: "0 0 16px 16px",
          verticalAlign: "center",
          width: "100%",
          position: "absolute",
          bottom: 0,
          zIndex: 2,
          background:
            "linear-gradient(180deg, #1F2947 0%, rgba(31, 41, 71, 0.70) 100%)",
        }}
      >
        <p
          style={{
            color: "#FFF",
            textAlign: "center",
            padding: "0.5rem 1rem",
            height: "5em",
            fontSize: "13px",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "18px",
          }}
        >
          {item.title}
        </p>
      </div>
    </div>
  );
};

export default GameCard;
