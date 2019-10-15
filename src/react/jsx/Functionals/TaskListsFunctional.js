import React from 'react';
import { compose, withStateHandlers } from 'recompose';
import Test1 from "../../assets/Test1.jpg";
import RightArrow from '../../assets/Right-Arrow.svg';
import LeftArrow from '../../assets/Left-Arrow.svg';
import style from '../../css/TaskListsFunctional.css';

const TaskLists = (props) => {
    return (
        <div className={style.divTaskBody}>
            <div className={style.divPrevious}>
                <img src={LeftArrow} />
            </div>
            <div className={style.divCurrentTask}>
                <img src={Test1} onClick={props.onClickTask} />
            </div>
            <div className={style.divNext}>
                <img src={RightArrow} />
            </div>
        </div>
    )
}

export default compose(
    withStateHandlers(
        {
            isRedirected: false
        },
        {
            onClickTask: () => (value) => {
                alert(true);
            }
        }
    )
)(TaskLists)