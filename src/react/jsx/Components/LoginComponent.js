import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import Navigator from "../../assets/Navigator.svg";
import UserIcon from "../../assets/User.svg";
import NavigatorIcon from "../../assets/Navigator-Icon.svg";
import SYKESIcon from "../../assets/SYKES.svg";
import style from "../../css/LoginComponent.css";
import ParticlesBackground from "../Functionals/Particles";
import { withApollo } from "react-apollo";
import { SIGN_IN } from "../../../graphql/LoginGraphql";

const Employee = {
  employee: {
    Username: "John",
    Password: "Francis"
  }
};

class Login extends Component {
  constructor(props) {
    super(props);

    this.onClickLogin = this.onClickLogin.bind(this);
  }

  componentDidMount() {
    this.props.client
      .query({
        query: SIGN_IN,
        variables: Employee
      })
      .then(result => {
        console.log(result);
      });
  }

  onClickLogin() {
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <div className={style.divLoginContainer}>
        <ParticlesBackground />
        <div className={style.divLogoContainer}>
          <img src={NavigatorIcon} />
        </div>
        <div className={style.divModalContainer}>
          <div className={style.divLoginModal}>
            <div className={style.divLoginModalHeader}>
              <img src={UserIcon} />
            </div>
            <div className={style.divLoginForm}>
              <input type="text" placeholder="Enter Username" />
              <input type="password" placeholder="Enter Password" />
              <button onClick={() => this.onClickLogin()}>Log In</button>
            </div>
          </div>
        </div>
        <div className={style.divSykesLogoContainer}>
          <img src={SYKESIcon} />
        </div>
      </div>
    );
  }
}

export default withApollo(Login);
