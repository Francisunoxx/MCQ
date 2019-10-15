import React, { useState } from "react";
import style from "../../css/ViewTaskModalFunctional.css";
import PeopleIcon from "../../assets/People.svg";
import CheckIcon from "../../assets/Checked.svg";
import GarbageIcon from "../../assets/Garbage.svg";

const View = props => {
  let ModalContainerStyle = props.modal.isViewVisible ? "flex" : "none";

  return (
    <div
      className={style.divViewContainer}
      style={{ display: ModalContainerStyle }}
    >
      <div className={style.divViewBody}>
        <div className={style.divHeader}>
          <img src={PeopleIcon} />
          <h4>Global Employee Survey</h4>
          <p onClick={() => props.onViewTaskModalClick()}>&#10060;</p>
        </div>
        <div className={style.divBody}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Deadline</th>
                <th>Completion Date</th>
                <th>SLA</th>
                <th>Inquiry</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Francis Ochotorina</td>
                <td>Sykes</td>
                <td>Level 3</td>
                <td>Open</td>
                <td>October 2, 2019</td>
                <td>Yes</td>
                <td>Hi!</td>
                <td>Sykes</td>
                <td>
                  <img src={GarbageIcon} />
                </td>
              </tr>
              <tr>
                <td>John Francis Ochotorina</td>
                <td>Sykes</td>
                <td>Level 3</td>
                <td>Open</td>
                <td>October 2, 2019</td>
                <td>Yes</td>
                <td>Hi!</td>
                <td>Sykes</td>
                <td>
                  <img src={GarbageIcon} />
                </td>
              </tr>
              <tr>
                <td>John Francis Ochotorina</td>
                <td>Sykes</td>
                <td>Level 3</td>
                <td>Open</td>
                <td>October 2, 2019</td>
                <td>Yes</td>
                <td>Hi!</td>
                <td>Sykes</td>
                <td>
                  <img src={GarbageIcon} />
                </td>
              </tr>
              <tr>
                <td>John Francis Ochotorina</td>
                <td>Sykes</td>
                <td>Level 3</td>
                <td>Open</td>
                <td>October 2, 2019</td>
                <td>Yes</td>
                <td>Hi!</td>
                <td>Sykes</td>
                <td>
                  <img src={GarbageIcon} />
                </td>
              </tr>
              <tr>
                <td>John Francis Ochotorina</td>
                <td>Sykes</td>
                <td>Level 3</td>
                <td>Open</td>
                <td>October 2, 2019</td>
                <td>Yes</td>
                <td>Hi!</td>
                <td>Sykes</td>
                <td>
                  <img src={GarbageIcon} />
                </td>
              </tr>
              <tr>
                <td>John Francis Ochotorina</td>
                <td>Sykes</td>
                <td>Level 3</td>
                <td>Open</td>
                <td>October 2, 2019</td>
                <td>Yes</td>
                <td>Hi!</td>
                <td>Sykes</td>
                <td>
                  <img src={GarbageIcon} />
                </td>
              </tr>
              <tr>
                <td>John Francis Ochotorina</td>
                <td>Sykes</td>
                <td>Level 3</td>
                <td>Open</td>
                <td>October 2, 2019</td>
                <td>Yes</td>
                <td>Hi!</td>
                <td>Sykes</td>
                <td>
                  <img src={GarbageIcon} />
                </td>
              </tr>
              <tr>
                <td>John Francis Ochotorina</td>
                <td>Sykes</td>
                <td>Level 3</td>
                <td>Open</td>
                <td>October 2, 2019</td>
                <td>Yes</td>
                <td>Hi!</td>
                <td>Sykes</td>
                <td>
                  <img src={GarbageIcon} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default View;
