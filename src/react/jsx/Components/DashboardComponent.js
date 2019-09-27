import React, { Component } from 'react';
import Header from '../Functionals/HeaderFunctional';
import Sidebar from '../Functionals/SidebarFunctional';
import Profile from '../Functionals/ProfileFunctional';
import OnGoingTask from '../Functionals/OnGoingTaskFunctional';
import Meter from '../../assets/Dashboard.svg';
import style from '../../css/DashboardComponent.css';

const styleDashboardHeaderToLeft = {
    'transition': 'all 1s ease-out',
    'marginLeft': '-15%',
    'width:': '100%'
}

const styleM = {
    'transition': 'all 1s ease-out',
    'width:': '100%'
}

const styleDashboardMainToFull = {
    'width:': '100%'
}

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isSideBarHidden: false
        }

        this.onClickHideSidebar = this.onClickHideSidebar.bind(this);
    }

    onClickHideSidebar() {
        if (this.state.isSideBarHidden) {
            this.setState({ isSideBarHidden: false })
        }
        else {
            this.setState({ isSideBarHidden: true })
        }
        //this.props.history.push("/my-task")
    }

    render() {
        const { isSideBarHidden } = this.state;

        return (
            <div className={style.divDashboardContainer}>
                <Header onClickHideSidebar={this.onClickHideSidebar} />
                <div className={style.divDashboardBody}>
                    <Sidebar isSideBarHidden={this.state.isSideBarHidden} />

                    <div className={style.divDashboardMain} style={isSideBarHidden ? { ...styleM } : {}}>
                        <div className={style.divDashboardHeader} style={isSideBarHidden ? { ...styleM } : {}}>
                            <img src={Meter} />
                            <h4>Dashboard</h4>
                        </div>
                        <OnGoingTask />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;