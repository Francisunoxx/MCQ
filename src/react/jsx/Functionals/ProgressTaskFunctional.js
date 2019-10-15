import React from "react";
import { withLegend } from "../HOC/LegendHOC";
import style from "../../css/ProgressTaskFunctional.css";
import { Doughnut } from "react-chartjs-2";

const styleProgressContainer = {
  flex: "1"
};

const styleProgressHeader = {
  height: "10%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const styleChart = {
  height: "90%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const Progress = props => {
  return (
    <div style={styleProgressContainer}>
      <div style={styleProgressHeader}>
        <h5>{props.text}</h5>
      </div>
      <div style={styleChart}>
        <Doughnut
          data={props.data}
          options={props.options}
          width={100}
          height={30}
        />
      </div>
    </div>
  );
};

const withProgress = WrappedProgress => props => {
  return <WrappedProgress {...props} />;
};

const ProgressTask = () => {
  let HOCLegend = withLegend();
  let HOCProgress = withProgress(Progress);
  let data = {
    datasets: [
      {
        data: [10, 20],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"]
      }
    ]
  };
  let options = { events: [] };

  return (
    <div className={style.divProgressTaskContainer}>
      <div className={style.divProgress}>
        <HOCProgress
          text={"Completion"}
          color={"#9d27b0"}
          data={data}
          options={options}
        />
        <HOCProgress
          text={"Task SLA"}
          color={"#4cb050"}
          data={data}
          options={options}
        />
      </div>
      <div className={style.divLegendBody}>
        <HOCLegend
          heightContainer={"30%"}
          heightTextContainer={"100%"}
          widthTextContainer={"45%"}
          bodyWidth={"100%"}
          width={"30%"}
          height={"30%"}
          text={"Completed"}
          bodyColor={"rgba(255, 99, 132, 0.2)"}
          borderColor={"rgba(255, 99, 132, 1)"}
        />
        <HOCLegend
          heightContainer={"30%"}
          heightTextContainer={"100%"}
          widthTextContainer={"45%"}
          bodyWidth={"100%"}
          width={"30%"}
          height={"30%"}
          text={"Open"}
          bodyColor={"rgba(54, 162, 235, 0.2)"}
          borderColor={"rgba(54, 162, 235, 1)"}
        />
      </div>
    </div>
  );
};

export default ProgressTask;
