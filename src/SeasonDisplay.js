import React from "react";

const seasonConfig = {
  summer: { text: "Let's hit the bitch!", iconName: "sun" },
  winter: { text: "burr, sex with the bitch!", iconName: "snowflake" }
};

const getSeason = (lat, month) => {
  if (month > 3 && month < 10) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth() + 1);
  const {text,iconName} = seasonConfig[season];
  
  return (
    <div>
      <i className={`${iconName} loading icon`}></i>
      <h1>{text}</h1>
      <i className={`${iconName} loading icon`}></i>
    </div>
  );
};

export default SeasonDisplay;
