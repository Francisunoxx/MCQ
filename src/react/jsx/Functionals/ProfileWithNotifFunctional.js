import React from 'react';
import style from '../../css/ProfileWithNotifFunctional.css';

const ProfileWithNotif = () => {
    return (
        <div className={style.divBody}>
            <div className={style.divProfile}>
                <div className={style.divName}>
                    <h3>John Francis Ochotorina</h3>
                </div>
                <div className={style.divPosition}>
                    <h3>Macqurie Leasing</h3>
                </div>
            </div>
            <div className={style.divNotif}>
                <div className={style.divNotifBody}>
                    <h3>SYKES</h3>
                </div>
                <div className={style.divNotifBody}>
                    <h3>CLIENT</h3>
                </div>
                <div className={style.divNotifBody}>
                    <h3>URGENT</h3>
                </div>
            </div>
        </div>
    )
}

export default ProfileWithNotif;