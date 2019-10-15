import React from "react";
import style from "../../css/LegendHOC.css";

const Legend = props => {
  const styleLegend = {
    height: props.height,
    width: props.width,
    background: props.bodyColor,
    border: "solid 1px " + props.borderColor
  };

  const styleLegendBody = {
    height: props.heightContainer,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  };

  const styleBody = {
    width: props.bodyWidth
  };

  const styleTextContainer = {
    width: props.widthTextContainer,
    height: props.heightTextContainer,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  const styleLabel = {
    marginRight: "5px"
  };

  return (
    <div style={{ ...styleLegendBody, ...styleBody }}>
      <div style={styleTextContainer}>
        <label>{props.text}</label>
      </div>
      <div style={styleLegend}></div>
    </div>
  );
};

export const withLegend = () => props => {
  return <Legend {...props} />;
};
