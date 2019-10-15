import React, { useState, useEffect, useRef } from "react";
import { MdDashboard, MdAutorenew } from "react-icons/md";
import { TiMinus, TiPlus } from "react-icons/ti";
import Meter from "../../assets/Dashboard.svg";
import RemoveIcon from "../../assets/Remove.svg";
import AddIcon from "../../assets/Add.svg";
import style from "../../css/TilesFunctional.css";
import { Doughnut } from "react-chartjs-2";
import { withLegend } from "../HOC/LegendHOC";
import "chartjs-plugin-datalabels";

const styleHideDashboardBody = {
  maxHeight: 0,
  transition: "0.5s ease"
};

const styleShowDashboardBody = {
  maxHeight: "50vh",
  transition: "0.5s ease"
};

const styleSelectAll = {
  color: "white",
  background: "#039be5"
};

const styleSelectedDiv = {
  color: "white",
  background: "#58c1ee",
  borderRadius: "10px"
};

const styleUnselectedDiv = {
  color: "#039be5",
  background: "white",
  borderRadius: "10px"
};

const styleFilterDiv = {
  borderRadius: "10px"
};

const styleIcon = {
  width: "2%",
  height: "75%"
};

const Item = props => {
  const data = {
    datasets: [
      {
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
        data: [65, 35]
      }
    ]
  };

  const options = {
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI,
    plugins: {
      datalabels: {
        display: true,
        color: "black",
        formatter: function(value) {
          return value + "%";
        }
      }
    },
    events: []
  };

  return (
    <div className={style.divTilesContainer}>
      <div className={style.divTilesHeader}>
        <h5>{props.header}</h5>
      </div>
      <div className={style.divTilesBody}>
        <Doughnut data={data} options={options} height={21} width={100} />
        <div className={style.divPercentage}>
          <h2>100%</h2>
        </div>
      </div>
    </div>
  );
};

const withItem = WrappedItem => props => {
  return <WrappedItem {...props} />;
};

const Tiles = props => {
  const [filter, setFilter] = useState({
    isAllClicked: true,
    isSykesClicked: null,
    isClientClicked: null
  });
  const { isAllClicked, isSykesClicked, isClientClicked } = filter;
  const divAll = useRef(null);
  const divSykes = useRef(null);
  const divClient = useRef(null);

  const styleIconTheme = { width: "2%", height: "75%", color: props.theme, cursor: "pointer" };
  const styleBorderColor = {
    borderBottom: "solid " + props.theme + " 1px"
  };
  const styleCollapse = {
    marginLeft: "auto",
    cursor: "pointer",
    width: "2%",
    height: "75%",
    color: props.theme
  };

  let HOCTiles = withItem(Item);
  let HOCLegend = withLegend();

  useEffect(() => {
    if (isAllClicked && isSykesClicked !== null && isClientClicked !== null) {
      Object.assign(divAll.current.style, styleSelectAll);
    } else if (isSykesClicked) {
      Object.assign(divSykes.current.style, styleSelectedDiv);
    } else if (isClientClicked) {
      Object.assign(divClient.current.style, styleSelectedDiv);
    }

    if (!isAllClicked && isAllClicked !== null) {
      Object.assign(divAll.current.style, styleUnselectedDiv);
    }
    if (!isSykesClicked && isSykesClicked !== null) {
      Object.assign(divSykes.current.style, styleUnselectedDiv);
    }
    if (!isClientClicked) {
      Object.assign(divClient.current.style, styleUnselectedDiv);
    }
  });

  return (
    <div className={style.divBody}>
      <div className={style.divDashboardHeader} style={styleBorderColor}>
        <MdDashboard style={styleIconTheme} />
        <h4>Dashboard</h4>
        {!props.isDashboardHidden ? (
          <TiMinus
            style={styleCollapse}
            onClick={() => props.onClickDashboard()}
          />
        ) : (
          <TiPlus
            style={styleCollapse}
            onClick={() => props.onClickDashboard()}
          />
        )}
      </div>
      <div
        className={style.divDashboardBody}
        style={
          props.isDashboardHidden
            ? { ...styleHideDashboardBody }
            : { ...styleShowDashboardBody }
        }
      >
        <div className={style.divToggleContainer}>
          <div className={style.divToggle}>
            <div
              onClick={() =>
                filter.isAllClicked
                  ? setFilter({ isAllClicked: false })
                  : setFilter({
                      isAllClicked: true,
                      isSykesClicked: false,
                      isClientClicked: false
                    })
              }
              ref={divAll}
              style={styleFilterDiv}
            >
              ALL
            </div>
            <div
              onClick={() =>
                filter.isSykesClicked
                  ? setFilter({ isSykesClicked: false })
                  : setFilter({
                      isSykesClicked: true,
                      isAllClicked: false,
                      isClientClicked: false
                    })
              }
              ref={divSykes}
              style={styleFilterDiv}
            >
              SYKES
            </div>
            <div
              onClick={() =>
                filter.isClientClicked
                  ? setFilter({ isClientClicked: false })
                  : setFilter({
                      isClientClicked: true,
                      isSykesClicked: false,
                      isAllClicked: false
                    })
              }
              ref={divClient}
              style={styleFilterDiv}
            >
              CLIENT
            </div>
          </div>
        </div>
        <div className={style.divChartContainer}>
          <HOCTiles
            header={"Completion"}
            completionCompleted={"20%"}
            attestationCompleted={"50%"}
            slaCompleted={"30%"}
            completionOpen={"20%"}
            attestationOpen={"50%"}
            slaOpen={"30%"}
          />
          <HOCTiles
            header={"SLA"}
            completionCompleted={"20%"}
            attestationCompleted={"50%"}
            slaCompleted={"30%"}
            completionOpen={"20%"}
            attestationOpen={"50%"}
          />
        </div>
        <div className={style.divLegends}>
          <HOCLegend
            heightContainer={"100%"}
            widthTextContainer={"100%"}
            bodyWidth={"10%"}
            width={"30%"}
            height={"40%"}
            text={isAllClicked ? "Sykes" : "Completed"}
            bodyColor={"rgba(255, 99, 132, 0.2)"}
            borderColor={"rgba(255, 99, 132, 1)"}
          />
          <HOCLegend
            heightContainer={"100%"}
            widthTextContainer={"100%"}
            bodyWidth={"10%"}
            width={"30%"}
            height={"40%"}
            text={isAllClicked ? "Client" : "Open"}
            bodyColor={"rgba(54, 162, 235, 0.2)"}
            borderColor={"rgba(54, 162, 235, 1)"}
          />
        </div>
      </div>
    </div>
  );
};

export default Tiles;
