import React from "react";
import style from "../../css/RadialChartsFunctional.css";
import Chart from "react-apexcharts";

const b = {
  options: {
    labels: ["Completion", "Attestation", "SLA"],
    radialBar: {
      dataLabels: {
        name: {
          fontSize: "22px"
        },
        value: {
          fontSize: "16px"
        },
        total: {
          show: true,
          label: "Total",
          formatter: function(w) {
            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
            return 249;
          }
        }
      }
    }
  },
  series: [44, 55, 67]
};

const Radial = () => {
  return (
    <div className={style.divRadialContainer}>
      <div className={style.divRadialBody}>
        <div className={style.divRadialHeader}>
          <h4>Progress</h4>
        </div>
        <div className={style.divRadials}>
          <div className={style.divChartContainer}>
            <div className={style.divChartHeader}>
              <h5>SYKES</h5>
            </div>
            <div className={style.divChartBody}>
              <Chart
                options={b.options}
                series={b.series}
                type="radialBar"
                width={500}
                height={250}
              />
            </div>
          </div>
          <div className={style.divChartContainer}>
            <div className={style.divChartHeader}>
              <h5>CLIENT</h5>
            </div>
            <div className={style.divChartBody}>
              <Chart
                options={b.options}
                series={b.series}
                type="radialBar"
                width={500}
                height={250}
              />
            </div>
          </div>
          <div className={style.divChartContainer}>
            <div className={style.divChartHeader}>
              <h5>URGENT</h5>
            </div>
            <div className={style.divChartBody}>
              <Chart
                options={b.options}
                series={b.series}
                type="radialBar"
                width={500}
                height={250}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Radial;
