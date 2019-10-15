import React, { useState, useEffect } from "react";
import style from "../../css/ThemeFunctional.css";

const Theme = props => {
  const styleColor = {
    height: "85%",
    width: "55%",
    background: props.color
  };

  return (
    <div
      className={style.divThemeBody}
      onClick={() => {
        props.setColor(props.color);
      }}
    >
      <div className={style.divLabel}>{props.text}</div>
      <div style={styleColor}></div>
    </div>
  );
};

const withTheme = WrappedTheme => props => {
  return <WrappedTheme {...props} />;
};

const ThemeFunctional = props => {
  const [color, setColor] = useState("#039be5");
  const HOCTheme = withTheme(Theme);

  /*useEffect(() => {
    props.setState({
      theme: color
    });
  }, [color]);*/

  return (
    <div
      className={style.divContainer}
      style={props.isThemeVisible ? { display: "flex" } : { display: "none" }}
    >
      <div className={style.divHeader}>
        <p onClick={() => props.setState({ isNotificationVisible: false })}>
          X
        </p>
      </div>
      <div className={style.divBody}>
        <HOCTheme text={"Red"} color={"#e51b23"} setColor={setColor} />
        <HOCTheme text={"Blue"} color={"#039be5"} setColor={setColor} />
        <HOCTheme text={"Green"} color={"#4cb050"} setColor={setColor} />
        <HOCTheme text={"Purple"} color={"#9d27b0"} setColor={setColor} />
      </div>
    </div>
  );
};

export default ThemeFunctional;
