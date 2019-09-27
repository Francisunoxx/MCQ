import React, { Component } from 'react';
import Header from '../Functionals/HeaderFunctional';
import NewTask from '../Functionals/NewTaskFunctional';
import MyTask from '../Functionals/MyTaskFunctional';
import ProgressTask from '../Functionals/ProgressTaskFunctional';
import style from '../../css/TaskComponent.css';

class Task extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <div className={style.divTaskContainer}>
                <Header />
                <div className={style.divTaskBody}>
                    <div className={style.divNewTask}>
                        <NewTask />
                    </div>
                    <div className={style.divListTask}>
                        <MyTask />
                        <ProgressTask />
                    </div>
                </div>
            </div>
        )
    }
}

export default Task;