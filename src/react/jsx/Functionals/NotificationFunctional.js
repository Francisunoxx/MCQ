import React from "react";
import style from "../../css/NotificationFunctional.css";

const Notification = props => {
  return (
    <div
      className={style.divNotificationContainer}
      style={
        props.isNotificationVisible ? { display: "flex" } : { display: "none" }
      }
    >
      <div className={style.divHeader}>
        <p onClick={() => props.setState({ isNotificationVisible: false })}>
          X
        </p>
        <h5>NOTIFICATIONS (3)</h5>
      </div>
      <div className={style.divBody}>
        <div className={style.divNotif}>
          <div className={style.divCircle}></div>
          You have 10 Sykes Notification
        </div>
        <div className={style.divNotif}>
          <div className={style.divCircle}></div>
          You have 10 Client Notification
        </div>
        <div className={style.divNotif}>
          <div className={style.divCircle}></div>
          You have 10 Urgent Notification
        </div>
      </div>
    </div>
  );
};

export default Notification;
