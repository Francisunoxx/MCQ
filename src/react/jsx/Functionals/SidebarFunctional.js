import React from 'react';
import HideSlideBar from '../../assets/Hide-Sidebar.svg';
import Home from '../../assets/Home-Black.svg';
import Inbox from '../../assets/Inbox.svg';
import Outbox from '../../assets/Outbox.svg';
import Urgent from '../../assets/Urgent.svg';
import Ideas from '../../assets/Ideas.svg';
import Feedback from '../../assets/Feedback.svg';
import GreenNotif from '../../assets/Green-Notification.png';
import RedNotif from '../../assets/Red-Notification.png';
import style from '../../css/SidebarFunctional.css';

const styleSlideSidebarToLeft = {
    'transition': 'all .3s ease-out',
    'width:': 'auto',
    'marginLeft': '-15%'
}

const Menu = (props) => {
    return (
        <div className={style.divMenuContainer}>
            <div className={style.divIcon}>
                <img src={props.icon} />
            </div>
            <div className={style.divText}>
                <h5>{props.text}</h5>
            </div>
            <div className={style.divNotif}>
                <img src={GreenNotif} />
                <img src={RedNotif} />
            </div>
        </div>
    )
}

const Tasks = (props) => {
    return (
        <div className={style.divTasksContainer}>
            <div className={style.divTaskBody}>
                <h5>{props.task}</h5>
            </div>
        </div>
    )
}

const withMenu = (WrappedMenu) => (props) => {
    return (
        <WrappedMenu {...props} />
    )
}

const withTasks = (WrappedTask) => (props) => {
    return (
        <WrappedTask {...props} />
    )
}

const Sidebar = (props) => {
    const { isSideBarHidden } = props;
    let HOCMenu = withMenu(Menu);
    let HOCTasks = withTasks(Tasks);

    return (
        <div className={style.divDashboardSideBar} style={isSideBarHidden ? { ...styleSlideSidebarToLeft } : {}}>
            <div className={style.divMenu}>
                <HOCMenu icon={Home} text={"Home"} />
                <HOCMenu icon={Inbox} text={"Sykes"} />
                <HOCMenu icon={Outbox} text={"Client"} />
                <HOCMenu icon={Urgent} text={"Urgent"} />
                <HOCMenu icon={Ideas} text={"Ideas"} />
                {/*<HOCMenu icon={Feedback} text={"Feedback"} />*/}
            </div>
            <div className={style.divTasks}>
                <HOCTasks task={"Global Employee Survey"} />
                <HOCTasks task={"Integrity in the workplace"} />
                <HOCTasks task={"Annual Physical Exam"} />
                <HOCTasks task={"Stratton introducer updates"} />
                <HOCTasks task={"Stratton introducer updates"} />
                <HOCTasks task={"Stratton introducer updates"} />
                <HOCTasks task={"Stratton introducer updates"} />
                <HOCTasks task={"Global Employee Survey"} />
                <HOCTasks task={"Integrity in the workplace"} />
                <HOCTasks task={"Annual Physical Exam"} />
                <HOCTasks task={"Stratton introducer updates"} />
                <HOCTasks task={"Stratton introducer updates"} />
                <HOCTasks task={"Stratton introducer updates"} />
                <HOCTasks task={"Stratton introducer updates"} />
            </div>
        </div >
    )
}

export default Sidebar;