import React from 'react';
import ProfileIcon from '../../assets/Profile.svg';
import style from '../../css/ProfileFunctional.css';

const Profile = (props) => {
    return (
        <div className={style.divProfile}>
            <div className={style.divProfileBody}>
                <div className={style.divHeader}>
                    <img src={ProfileIcon} />
                    <h3>Profile</h3>
                </div>
                <div className={style.divBody}>
                    <div className={style.divFirstRow}>
                        <div className={style.divProfile}>
                            <h1>Hi! John Francis</h1>
                        </div>
                        <div className={style.divDate}>
                            <h3>Monday June 11</h3>
                        </div>
                    </div>
                    <div className={style.divSecondRow}>
                        <div className={style.divProfilePicture}>

                        </div>
                        <div className={style.divProfileAccount}>
                            <h3>Macquarie Leasing</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;