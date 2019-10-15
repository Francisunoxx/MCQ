import React, { Component, useState } from "react";
import { withRouter } from "react-router-dom";
import Header from "../Functionals/HeaderFunctional";
import Sidebar from "../Functionals/SidebarFunctional";
import OnGoingTask from "../Functionals/OnGoingTaskFunctional";
import Tiles from "../Functionals/TilesFunctional";
import style from "../../css/DashboardComponent.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSideBarHidden: null,
      isDashboardHidden: false,
      isTaskHidden: false,
      theme: ""
    };

    this.onClickHideSidebar = this.onClickHideSidebar.bind(this);
    this.onClickDashboard = this.onClickDashboard.bind(this);
    this.onClickTasks = this.onClickTasks.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
  }

  /*shouldComponentUpdate(nextProps, nextState) {
    if (this.state.theme != nextState.theme) {
      return true;
    } else if (this.state.isDashboardHidden != this.state.isDashboardHidden) {
      return true;
    }

    return false;
  }*/

  onClickHideSidebar() {
    if (this.state.isSideBarHidden) {
      this.setState({ isSideBarHidden: false });
    } else {
      this.setState({ isSideBarHidden: true });
    }
  }

  onClickDashboard() {
    if (this.state.isDashboardHidden)
      this.setState({ isDashboardHidden: false });
    else this.setState({ isDashboardHidden: true });
  }

  onClickTasks() {
    if (this.state.isTaskHidden) this.setState({ isTaskHidden: false });
    else this.setState({ isTaskHidden: true });
  }

  changeTheme(theme) {
    this.setState({ theme: theme });
  }

  render() {
    const { isSideBarHidden } = this.state;

    return (
      <div className={style.divDashboardContainer}>
        <Header
          onClickHideSidebar={this.onClickHideSidebar}
          changeTheme={this.changeTheme}
        />
        <div className={style.divDashboardBody}>
          <Sidebar isSideBarHidden={this.state.isSideBarHidden} />
          <div className={style.divDashboardMain}>
            <Tiles
              isDashboardHidden={this.state.isDashboardHidden}
              onClickDashboard={this.onClickDashboard}
              theme={this.state.theme}
            />
            <OnGoingTask
              history={this.props.history}
              isTaskHidden={this.state.isTaskHidden}
              isDashboardHidden={this.state.isDashboardHidden}
              onClickTasks={this.onClickTasks}
              theme={this.state.theme}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
