import React, { useState } from "react";
import { TiDocumentText } from "react-icons/ti";
import { TiMinus, TiPlus } from "react-icons/ti";
import TaskLists from "./TaskListsFunctional";
import TaskIcon from "../../assets/Task.svg";
import Add from "../../assets/Add.svg";
import Remove from "../../assets/Remove.svg";
import Test from "../../assets/Test.jpg";
import Checked from "../../assets/Checked.svg";
import Question from "../../assets/Question.svg";
import Garbage from "../../assets/Garbage.svg";
import style from "../../css/OnGoingTaskFunctional.css";

const styleHideTaskBody = {
  overflow: "hidden",
  maxHeight: 0,
  transition: "0.5s ease"
};

const styleShowTaskBody = {
  maxHeight: "50vh",
  transition: "0.5s ease"
};

const s = {
  width: "100%",
  height: "80.7vh"
};

const OnGoingTask = props => {
  const styleIconTheme = { width: "2%", height: "75%", color: props.theme , cursor: "pointer"};
  const styleCollapse = {
    marginLeft: "auto",
    cursor: "pointer",
    width: "2%",
    height: "75%",
    color: props.theme
  };
  const styleBorderColor = {
    borderBottom: "solid " + props.theme + " 1px"
  };
  let ss = {};

  if (props.isDashboardHidden && !props.isTaskHidden) {
    ss = s;
  } else if (props.isTaskHidden) {
    ss = { ...styleHideTaskBody };
  } else if (!props.isTaskHidden) {
    ss = { ...styleShowTaskBody };
  }
  return (
    <div className={style.divTasksList}>
      <div className={style.divHeader} style={styleBorderColor}>
        <TiDocumentText
          style={styleIconTheme}
          onClick={() => {
            props.history.push("/task");
          }}
        />
        <h4>Tasks</h4>
        {!props.isTaskHidden ? (
          <TiMinus style={styleCollapse} onClick={() => props.onClickTasks()} />
        ) : (
          <TiPlus style={styleCollapse} onClick={() => props.onClickTasks()} />
        )}
      </div>
      <div className={style.divBody} style={ss}>
        <div className={style.divFirst}>
          <TaskLists />
        </div>
        <div className={style.divSecond}>
          <div className={style.divActions}>
            <img src={Checked} className={style.checked} />
            <img src={Question} />
            <img src={Garbage} className={style.garbage} />
          </div>
          <div className={style.divNextCurrentTask}>
            <img src={Test} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnGoingTask;
