import React from 'react';
import TaskLists from './TaskListsFunctional';
import TaskIcon from '../../assets/Task.svg';
import Test1 from '../../assets/Test1.jpg';
import Checked from '../../assets/Checked.svg';
import Question from '../../assets/Question.svg';
import Garbage from '../../assets/Garbage.svg';
import style from '../../css/OnGoingTaskFunctional.css';


const OnGoingTask = (props) => {
    return (
        <div className={style.divTasksList}>
            <div className={style.divTaskBody}>
                <div className={style.divHeader}>
                    <img src={TaskIcon} />
                    <h4>Tasks</h4>
                </div>
                <div className={style.divBody}>
                    <TaskLists />
                    <div className={style.divSecond}>
                        <div className={style.divActions}>
                            <div>

                            </div>
                            <img src={Checked} />
                            <img src={Question} />
                            <img src={Garbage} />
                        </div>
                        <div className={style.divNextCurrentTask}>
                            <img src={Test1} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OnGoingTask;

