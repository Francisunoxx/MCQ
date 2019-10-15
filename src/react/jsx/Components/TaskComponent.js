import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withLegend } from "../HOC/LegendHOC";
import MyTaskIcon from "../../assets/MyTasks.svg";
import RosterIcon from "../../assets/People.svg";
import Header from "../Functionals/HeaderFunctional";
import TaskFilter from "../Functionals/TaskFilter";
import ProgressTask from "../Functionals/ProgressTaskFunctional";
import CreatedTask from "../Functionals/MyTaskFunctional";
import Roster from "../Functionals/TeamRoster";
import TaskModal from "../Functionals/TaskModalFunctional";
import ViewTaskModal from "../Functionals/ViewTaskModalFunctional";
import { convertFromRaw, EditorState } from "draft-js";
import Editor, { composeDecorators } from "draft-js-plugins-editor";
import createAlignmentPlugin from "draft-js-alignment-plugin";
import createFocusPlugin from "draft-js-focus-plugin";
import style from "../../css/TaskComponent.css";

const Add = "Add";
const Edit = "Edit";

class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: EditorState.createEmpty(),
      modal: {
        isNewTaskVisible: false,
        isNewTask: true,
        isViewVisible: false
      },
      theme: ""
    };

    this.onTaskModalClick = this.onTaskModalClick.bind(this);
    this.onViewTaskModalClick = this.onViewTaskModalClick.bind(this);
    this.onEditorChange = this.onEditorChange.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
  }

  onTaskModalClick(module) {
    if (this.state.modal.isNewTaskVisible) {
      this.setState({
        modal: {
          ...this.state.modal,
          isNewTaskVisible: false,
          isNewTask: module === Add ? true : false
        }
      });
    } else if (!this.state.modal.isNewTaskVisible) {
      this.setState({
        modal: {
          ...this.state.modal,
          isNewTaskVisible: true,
          isNewTask: module === Edit ? false : true
        }
      });
    }
  }

  onViewTaskModalClick() {
    if (this.state.modal.isViewVisible) {
      this.setState({
        modal: {
          ...this.state.modal,
          isViewVisible: false
        }
      });
    } else if (!this.state.modal.isViewVisible) {
      this.setState({
        modal: {
          ...this.state.modal,
          isViewVisible: true
        }
      });
    }
  }

  onEditorChange() {
    this.setState({
      editorState
    });
  }
  
  changeTheme(theme) {
    this.setState({ theme: theme });
  }

  shouldComponentUpdate(){
    console.log(true);
  }

  render() {
    const { isNewTaskVisible, isViewVisible } = this.state.modal;

    return (
      <div className={style.divTaskContainer}>
        <Header changeTheme={this.changeTheme} />
        <div className={style.divTaskBody}>
          <div className={style.divTaskHeader}>
            <TaskFilter />
          </div>
          <div className={style.divTask}>
            <div className={style.divMyCreatedTaskContainer}>
              <div className={style.divHeader}>
                <img
                  src={MyTaskIcon}
                  onClick={() => {
                    this.props.history.push("/my-task");
                  }}
                />
                <h4>My Created Task</h4>
                <button onClick={() => this.onTaskModalClick("Add")}>
                  Add Task
                </button>
              </div>
              <ProgressTask />
              <CreatedTask
                onTaskModalClick={this.onTaskModalClick}
                onViewTaskModalClick={this.onViewTaskModalClick}
              />
            </div>
            <div className={style.divTeamRosterContainer}>
              <div className={style.divHeader}>
                <img
                  src={RosterIcon}
                  onClick={() => {
                    props.history.push("/my-task");
                  }}
                />
                <h4>Team Roster</h4>
              </div>
              <Roster />
            </div>
          </div>
          {/*<div className={style.divLegend}>
            <div className={style.divLegendHeader}>
              <h4>Legend</h4>
            </div>
            <div className={style.divLegendBody}>
              <HOCLegend
                text={"Completed"}
                bodyColor={"rgba(255, 99, 132, 0.2)"}
                borderColor={"rgba(255, 99, 132, 1)"}
              />
              <HOCLegend
                text={"Open"}
                bodyColor={"rgba(54, 162, 235, 0.2)"}
                borderColor={"rgba(54, 162, 235, 1)"}
              />
            </div>
          </div>*/}
          {isNewTaskVisible ? (
            <TaskModal
              onTaskModalClick={this.onTaskModalClick}
              onEditorChange={this.onEditorChange}
              modal={this.state.modal}
            />
          ) : (
            ""
          )}
          {isViewVisible ? (
            <ViewTaskModal
              onTaskModalClick={this.onTaskModalClick}
              onViewTaskModalClick={this.onViewTaskModalClick}
              editorState={this.state.editorState}
              modal={this.state.modal}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(Task);
