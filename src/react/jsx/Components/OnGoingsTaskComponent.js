import React, { Component } from "react";
import Header from "../Functionals/HeaderFunctional";
import TaskLists from "../Functionals/TaskListsFunctional";
import TaskTable from "../Functionals/TaskTableFunctional";
import style from "../../css/OnGoingTaskComponent.css";

class OnGoingTaskComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: ""
    };

    this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme(theme) {
    this.setState({ theme: theme });
  }

  render() {
    return (
      <div className={style.divContainer}>
        <Header changeTheme={this.changeTheme} />
        <div className={style.divBody}>
          <TaskLists />
          <TaskTable />
        </div>
      </div>
    );
  }
}

export default OnGoingTaskComponent;
