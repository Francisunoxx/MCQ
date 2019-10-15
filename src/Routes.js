import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './react/jsx/Components/LoginComponent';
import Dashboard from './react/jsx/Components/DashboardComponent';
import Task from './react/jsx/Components/TaskComponent';
import OnGoingTask from './react/jsx/Components/OnGoingsTaskComponent';
import TeamTask from './react/jsx/Components/TeamTaskComponent';
import style from './react/css/Route.css';

class Routes extends Component {

    render() {
        return (
            <div className={style.divRoute}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route exact path="/task" component={Task} />
                        <Route exact path="/my-task" component={OnGoingTask} />
                        <Route exact path="/team-task" component={TeamTask} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Routes;