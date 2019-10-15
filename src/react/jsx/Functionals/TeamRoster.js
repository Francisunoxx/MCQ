import React from "react";
import ArrowRightIcon from "../../assets/Right-Arrow.svg";
import ArrowLeftIcon from "../../assets/Left-Arrow.svg";
import style from "../../css/TeamRoster.css";
import { HorizontalBar } from "react-chartjs-2";

const data = (completed, open) => ({
  labels: ["Completion"],
  datasets: [
    {
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
      data: [completed]
    },
    {
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
      data: [open]
    }
  ]
});

const options = {
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        stacked: true,
        display: false,
        ticks: {
          beginAtZero: true
        }
      }
    ],
    yAxes: [
      {
        stacked: true,
        display: false,
        barPercentage: 0.5,
        gridLines: {
          display: false
        }
      }
    ]
  },
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

const styleChart = {
  display: "flex",
  justifyContent: "center"
};

let a = [
  {
    Completed: 30,
    Open: 70
  },
  {
    Completed: 25,
    Open: 75
  },
  {
    Completed: 60,
    Open: 30
  },
  {
    Completed: 65,
    Open: 25
  },
  {
    Completed: 80,
    Open: 20
  },
  {
    Completed: 30,
    Open: 70
  },
  {
    Completed: 25,
    Open: 75
  },
  {
    Completed: 60,
    Open: 30
  },
  {
    Completed: 65,
    Open: 25
  },
  {
    Completed: 80,
    Open: 20
  }
];

const Roster = () => {
  return (
    <div className={style.divRosterContainer}>
      <div className={style.divRosterTable}>
        <table>
          <thead>
            <tr>
              <th>Agent</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
            {a.map((item, index) => {
              return (
                <tr key={index}>
                  <td>John Francis Ochotorina</td>
                  <td>
                    <HorizontalBar
                      data={data(item.Completed, item.Open)}
                      options={options}
                      height={20}
                      width={100}
                      style={styleChart}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className={style.divPagination}>
        <img src={ArrowLeftIcon} />
        <label>1 of 10</label>
        <img src={ArrowRightIcon} />
      </div>
    </div>
  );
};

export default Roster;
