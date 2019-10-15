import React, { Component, useState, useEffect } from "react";
import Navigator from "../../assets/Navigator-Icon.svg";
import Bullets from "../../assets/List.svg";
import Bell from "../../assets/Bell.svg";
import Logout from "../../assets/Logout.svg";
import NotificationFunctional from "../Functionals/NotificationFunctional";
import ThemeFunctional from "../Functionals/ThemeFunctional";
import Settings from "../../assets/Settings.svg";
import style from "../../css/HeaderFunctional.css";

const Header = props => {
  const [state, setState] = useState({
    isNotificationVisible: false,
    isThemeVisible: false,
    theme: ""
  });

  /*useEffect(() => {
    props.changeTheme(state.theme);
  }, [state.theme]);*/

  return (
    <div className={style.divHeaderContainer}>
      <div className={style.divHeaderNavigator}>
        <img src={Navigator} className={style.headerIcon} />
        <h4>SYKES NAVIGATOR</h4>
        <img
          src={Bullets}
          className={style.homeIcon}
          onClick={props.onClickHideSidebar}
        />
      </div>
      <div className={style.divHeaderNotifications}>
        <div className={style.divNotification}>
          <img
            src={Bell}
            onClick={() => setState({ isNotificationVisible: true })}
          />
          <div className={style.divCount}>3</div>
        </div>
        <div className={style.divName}>
          <h4>John Francis Ochotorina</h4>
        </div>
        <div className={style.divSettings}>
          <img
            src={Settings}
            onClick={() => setState({ isThemeVisible: true })}
          />
        </div>
        <div className={style.divLogout}>
          <img className={style.imgLogout} src={Logout} />
        </div>
      </div>
      <NotificationFunctional
        isNotificationVisible={state.isNotificationVisible}
        setState={setState}
      />
      <ThemeFunctional
        isThemeVisible={state.isThemeVisible}
        setState={setState}
      />
    </div>
  );
};

export default Header;
