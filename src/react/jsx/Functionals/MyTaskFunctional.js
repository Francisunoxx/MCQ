import React from 'react';
import MyTaskIcon from '../../assets/MyTasks.svg'
import style from '../../css/MyTaskFunctional.css';

const styleTaskContainer = {
    'flex': '1'
}

const styleTaskHeader = {
    'height': '10%',
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center',
}

const styleTasksList = {
    'height': '89%',
    'display': 'block',
    'overflowY': 'auto'
}

const styleTask = {
    'height:': '10%',
    'width': '100%',
    'display:': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center'
}

const Task = (props) => {
    let borderBottomColor = {
        'borderBottom': 'solid ' + `${props.color}` + ' 2px'
    }

    return (
        <div style={styleTaskContainer}>
            <div style={{ ...styleTaskHeader, ...borderBottomColor }}>
                <h5>Level {props.level}</h5>
            </div>
            <div style={styleTasksList}>
                <div style={styleTask}>
                    <label>Global Employee Survey</label>
                </div>
                <div style={styleTask}>
                    <label>Global Employee Survey</label>
                </div>
                <div style={styleTask}>
                    <label>Global Employee Survey</label>
                </div>
                <div style={styleTask}>
                    <label>Global Employee Survey</label>
                </div>
                <div style={styleTask}>
                    <label>Global Employee Survey</label>
                </div>
                <div style={styleTask}>
                    <label>Global Employee Survey</label>
                </div>
                <div style={styleTask}>
                    <label>Global Employee Survey</label>
                </div>
                <div style={styleTask}>
                    <label>Global Employee Survey</label>
                </div>
                <div style={styleTask}>
                    <label>Global Employee Survey</label>
                </div>
                <div style={styleTask}>
                    <label>Global Employee Survey</label>
                </div>
                <div style={styleTask}>
                    <label>Global Employee Survey</label>
                </div>
                <div style={styleTask}>
                    <label>Global Employee Survey</label>
                </div><div style={styleTask}>
                    <label>Global Employee Survey</label>
                </div>
                <div style={styleTask}>
                    <label>Global Employee Survey</label>
                </div>
                <div style={styleTask}>
                    <label>Global Employee Survey</label>
                </div>
                <div style={styleTask}>
                    <label>Global Employee Survey</label>
                </div>
                <div style={styleTask}>
                    <label>Global Employee Survey</label>
                </div>
                <div style={styleTask}>
                    <label>Global Employee Survey</label>
                </div><div style={styleTask}>
                    <label>Global Employee Survey</label>
                </div>
                <div style={styleTask}>
                    <label>Global Employee Survey</label>
                </div>
                <div style={styleTask}>
                    <label>Global Employee Survey</label>
                </div>
                <div style={styleTask}>
                    <label>Global Employee Survey</label>
                </div>
                <div style={styleTask}>
                    <label>Global Employee Survey</label>
                </div>
                <div style={styleTask}>
                    <label>Global Employee Survey</label>
                </div>
                <div style={styleTask}>
                    <label>Global Employee Survey</label>
                </div>
                <div style={styleTask}>
                    <label>Global Employee Survey</label>
                </div>
                <div style={styleTask}>
                    <label>Global Employee Survey</label>
                </div>
                <div style={styleTask}>
                    <label>Global Employee Survey</label>
                </div>
                <div style={styleTask}>
                    <label>Global Employee Survey</label>
                </div>
                <div style={styleTask}>
                    <label>Global Employee Survey</label>
                </div>
            </div>
        </div>
    )
}

const withTask = (WrappedTask) => (props) => {
    return (
        <WrappedTask {...props} />
    )
}

const MyTask = () => {

    let HOCTask = withTask(Task);

    return (
        <div className={style.divMyTaskContainer}>
            <div className={style.divMyTaskBody}>
                <div className={style.divHeader}>
                    <img src={MyTaskIcon} />
                    <h3>My Tasks</h3>
                </div>
                <div className={style.divTasks}>
                    <HOCTask level={1} color={"#e51b23"} />
                    <HOCTask level={2} color={"#9d27b0"} />
                    <HOCTask level={3} color={"#4cb050"} />
                </div>
            </div>
        </div>
    )
}

export default MyTask;