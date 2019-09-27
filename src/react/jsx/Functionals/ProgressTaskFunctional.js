import React from 'react';
import style from '../../css/ProgressTaskFunctional.css';
import ProgressIcon from '../../assets/Progress.svg';
import { Doughnut } from 'react-chartjs-2';

const styleProgressContainer = {
    'flex': '1'
}

const styleProgressHeader = {
    'height': '10%',
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center',
}

const styleChart = {
    'height': '90%',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
}

const Progress = (props) => {
    let borderBottomColor = {
        'borderBottom': 'solid ' + `${props.color}` + ' 2px'
    }

    return (
        <div style={styleProgressContainer}>
            <div style={{ ...styleProgressHeader, ...borderBottomColor }}>
                <h5>{props.text}</h5>
            </div>
            <div style={styleChart}>
                <Doughnut data={props.data} width={"100%"} height={"90%"}/>
            </div>
        </div>
    )
}

const withProgress = (WrappedProgress) => (props) => {
    return (
        <WrappedProgress {...props} />
    )
}

const ProgressTask = () => {
    let HOCProgress = withProgress(Progress);
    let data = {
        datasets: [{
            data: [10, 20],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
            ]
        }],
        labels: [
            'Completed',
            'Remaining'
        ]
    };
    return (
        <div className={style.divProgressTaskContainer}>
            <div className={style.divTaskBody}>
                <div className={style.divHeader}>
                    <img src={ProgressIcon} />
                    <h3>Progress</h3>
                </div>
                <div className={style.divProgress}>
                    <HOCProgress text={"Completion"} color={"#039be5"} data={data}/>
                    <HOCProgress text={"Attestation"} color={"#4cb050"} data={data}/>
                    <HOCProgress text={"Task SLA"} color={"#e51b23"} data={data}/>
                </div>
            </div>
        </div>
    )
}


export default ProgressTask;