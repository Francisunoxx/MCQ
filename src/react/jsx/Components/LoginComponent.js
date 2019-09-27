import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import Navigator from '../../assets/Navigator.svg';
import User from '../../assets/User.svg';
import style from '../../css/LoginComponent.css';
import ParticlesBackground from '../Functionals/Particles';

class Login extends Component {

    constructor(props) {
        super(props);

        this.onClickLogin = this.onClickLogin.bind(this);
    }

    componentDidMount() {
    }

    onClickLogin() {
        this.props.history.push("/dashboard")
    }

    render() {
        return (
            <div className={style.divLoginContainer}>
                <ParticlesBackground />
                <div className={style.divLoginHeader}>
                    <img src={Navigator} />
                </div>
                <div className={style.divLoginBody}>
                    <div className={style.divLoginModal}>
                        <div className={style.divLoginModalHeader}>
                            <img src={User} />
                        </div>
                        <div className={style.divLoginForm}>
                            <input type="text" placeholder="Enter Username" />
                            <input type="password" placeholder="Enter Password" />
                            <button onClick={() => this.onClickLogin()}>Log In</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);