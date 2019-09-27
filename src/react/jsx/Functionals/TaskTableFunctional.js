import React from 'react';
import Checked from '../../assets/Checked.svg';
import Question from '../../assets/Question.svg';
import Garbage from '../../assets/Garbage.svg';
import style from '../../css/TaskTableFunctional.css';

const TaskTable = () => {
    return (
        <div className={style.divBody}>
            <table>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th className={style.tableHeader}>Category</th>
                        <th className={style.tableHeader}>Priority</th>
                        <th>Deadline</th>
                        <th>Attestation</th>
                        <th className={style.tableHeader}>
                            <div className={style.divTableHeader}>
                                <img src={Question} />
                                Inquiry
                            </div>
                        </th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Global Inquiry</td>
                        <td>Sykes</td>
                        <td>1</td>
                        <td>MM/DD/YY</td>
                        <td><img src={Checked} /></td>
                        <td className={style.headerInquiry}>
                            <div className={style.divTableData}>
                                <input type="text" />
                                <button>SEND</button>
                            </div>
                        </td>
                        <td className={style.tableDataAction}><img src={Garbage} /></td>
                    </tr>
                    <tr>
                        <td>Global Inquiry</td>
                        <td>Sykes</td>
                        <td>1</td>
                        <td>MM/DD/YY</td>
                        <td><img src={Checked} /></td>
                        <td className={style.headerInquiry}>
                            <div className={style.divTableData}>
                                <input type="text" />
                                <button>SEND</button>
                            </div>
                        </td>
                        <td><img src={Garbage} /></td>
                    </tr>
                    <tr>
                        <td>Global Inquiry</td>
                        <td>Sykes</td>
                        <td>1</td>
                        <td>MM/DD/YY</td>
                        <td><img src={Checked} /></td>
                        <td className={style.headerInquiry}>
                            <div className={style.divTableData}>
                                <input type="text" />
                                <button>SEND</button>
                            </div>
                        </td>
                        <td><img src={Garbage} /></td>
                    </tr>
                </tbody>
            </table>
        </div >
    )
}

export default TaskTable;