import React, { Component } from "react";
import Header from "../Functionals/HeaderFunctional";
import style from "../../css/TeamTaskComponent.css";

class Task extends Component {
  render() {
    return (
      <div className={style.divTeamTaskContainer}>
        <Header />
        <div className={style.divTeamTaskBody}>
            <div>

            </div>
            <div>
                
            </div>
        </div>
      </div>
    );
  }
}

export default Task;
