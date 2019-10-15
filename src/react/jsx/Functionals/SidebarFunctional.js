import React, { useState } from "react";
import { TiDocumentText } from "react-icons/ti";
import Home from "../../assets/Home-Black.svg";
import Inbox from "../../assets/Inbox.svg";
import Outbox from "../../assets/Outbox.svg";
import Urgent from "../../assets/Urgent.svg";
import Ideas from "../../assets/Ideas.svg";
import TaskIcon from "../../assets/Task.svg";
import style from "../../css/SidebarFunctional.css";

const styleSlideSidebarToLeft = {
  transition: "all .3s ease-out",
  marginLeft: "-15%"
};

const styleSlideSidebarToRight = {
  transition: "all .3s ease-out",
  marginRight: "-15%"
};

const Menu = props => {
  return (
    <div className={style.divMenuContainer}>
      <div className={style.divIcon}>
        <img src={props.icon} />
      </div>
      <div className={style.divText}>
        <h5>{props.text}</h5>
      </div>
      {props.hasNotification ? (
        <div className={style.divNotif}>
          {props.hasOnDateNotif ? (
            <div className={`${style.divNotifBody} ${style.divGreenNotif}`}>
              <label className={style.notifLabel}>{props.value}</label>
            </div>
          ) : (
            ""
          )}

          {props.hasDueDateNotif ? (
            <div className={`${style.divNotifBody} ${style.divRedNotif}`}>
              <label className={style.notifLabel}>{props.value}</label>
            </div>
          ) : (
            ""
          )}

          {props.hasSLANotif ? (
            <div className={`${style.divNotifBody} ${style.divPurpleNotif}`}>
              <label className={style.notifLabel}>{props.value}</label>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

const Tasks = props => {
  return (
    <div className={style.divTasksContainer}>
      <div className={style.divTaskBody}>
        <h5>{props.task}</h5>
      </div>
    </div>
  );
};

const withMenu = WrappedMenu => props => {
  return <WrappedMenu {...props} />;
};

const withTasks = WrappedTask => props => {
  return <WrappedTask {...props} />;
};

const Sidebar = props => {
  const { isSideBarHidden } = props;
  const styleIconTheme = {
    width: "14%",
    height: "75%",
    color: props.theme,
    cursor: "pointer"
  };
  let HOCMenu = withMenu(Menu);
  let HOCTasks = withTasks(Tasks);

  return (
    <div
      className={style.divDashboardSideBar}
      style={isSideBarHidden ? { ...styleSlideSidebarToLeft } : {}}
    >
      <div className={style.divMenu}>
        <HOCMenu icon={Home} text={"Home"} hasNotification={false} />
        <HOCMenu
          value={5}
          icon={Inbox}
          text={"Sykes"}
          hasNotification={true}
          hasOnDateNotif={false}
          hasDueDateNotif={true}
          hasSLANotif={true}
        />
        <HOCMenu
          value={3}
          icon={Outbox}
          text={"Client"}
          hasNotification={true}
          hasOnDateNotif={true}
          hasDueDateNotif={false}
          hasSLANotif={true}
        />
        <HOCMenu
          value={2}
          icon={Urgent}
          text={"Urgent"}
          hasNotification={true}
          hasOnDateNotif={false}
          hasDueDateNotif={true}
          hasSLANotif={false}
        />
        <HOCMenu icon={Ideas} text={"Ideas"} hasNotification={false} />
        {/*<HOCMenu icon={Feedback} text={"Feedback"} />*/}
      </div>
      <div className={style.divTasks}>
        <div className={style.divHeader}>
          <TiDocumentText style={styleIconTheme} />
          <h4>Tasks Lists</h4>
        </div>
        <div className={style.divBody}>
          <HOCTasks task={"Global Employee Survey"} />
          <HOCTasks task={"Integrity in the workplace"} />
          <HOCTasks task={"Annual Physical Exam"} />
          <HOCTasks task={"Stratton introducer updates"} />
          <HOCTasks task={"Stratton introducer updates"} />
          <HOCTasks task={"Stratton introducer updates"} />
          <HOCTasks task={"Stratton introducer updates"} />
          <HOCTasks task={"Global Employee Survey"} />
          <HOCTasks task={"Integrity in the workplace"} />
          <HOCTasks task={"Annual Physical Exam"} />
          <HOCTasks task={"Stratton introducer updates"} />
          <HOCTasks task={"Stratton introducer updates"} />
          <HOCTasks task={"Stratton introducer updates"} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
