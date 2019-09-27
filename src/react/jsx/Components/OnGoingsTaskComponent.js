import React, { Component } from 'react';
import Header from '../Functionals/HeaderFunctional';
import Profile from '../Functionals/ProfileWithNotifFunctional';
import TaskLists from '../Functionals/TaskListsFunctional';
import TaskTable from '../Functionals/TaskTableFunctional';
import style from '../../css/OnGoingTaskComponent.css';


class OnGoingTaskComponent extends Component {


    render() {
        return (
            <div className={style.divContainer}>
                <Header />
                <div className={style.divBody}>
                    <div className={style.divFirstRow}>
                        <Profile />
                        <TaskLists />
                    </div>
                    <div className={style.divSecondRow}>
                        <TaskTable />
                    </div>
                </div>
            </div>
        )
    }
}

export default OnGoingTaskComponent;