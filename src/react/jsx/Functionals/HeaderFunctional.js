import React from 'react';
import Home from '../../assets/Home.svg';
import Bullets from '../../assets/Bullets.svg';
import GreenNotif from '../../assets/Green-Notification.png';
import RedNotif from '../../assets/Red-Notification.png';
import Logout from '../../assets/Logout.svg';
import style from '../../css/HeaderFunctional.css';

const Header = (props) => {
    return (
        <div className={style.divHeaderContainer}>
            <div className={style.divHeaderNavigator}>
                <h4>NAVIGATOR</h4>
                <img src={Bullets} onClick={props.onClickHideSidebar}/>
            </div>
            <div className={style.divHeaderNotifications}>
                <div>
                    <img src={GreenNotif} />
                </div>
                <div>
                    <img src={RedNotif} />
                </div>
                <div>
                    <h4>John Francis Ochotorina</h4>
                </div>
                <div>
                    <img className={style.imgLogout} src={Logout} />
                </div>
            </div>
        </div>
    )
}

export default Header;