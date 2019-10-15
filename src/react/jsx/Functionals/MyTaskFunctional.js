import React, {
  Fragment,
  Component,
  useState,
  useCallback,
  useEffect
} from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ViewIcon from "../../assets/View.svg";
import EditIcon from "../../assets/Edit.svg";
import GarbageIcon from "../../assets/Garbage.svg";
import ArrowRightIcon from "../../assets/Right-Arrow.svg";
import ArrowLeftIcon from "../../assets/Left-Arrow.svg";
import CheckedIcon from "../../assets/Checked.svg";
import HTML5Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import style from "../../css/MyTaskFunctional.css";
import { renderComponent } from "recompose";

const styleTaskContainer = {
  flex: "1"
};

const styleTaskHeader = {
  height: "10%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const styleTasksList = {
  height: "89%",
  display: "block",
  overflowY: "auto"
};

const styleTask = {
  "height:": "10%",
  width: "100%",
  "display:": "flex",
  alignItems: "center",
  justifyContent: "center"
};

class MyTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        {
          id: 1,
          task: "Global Employee",
          deadline: "March 20 2020",
          category: "Sykes",
          priority: "Level 1",
          status: "Open",
          completion: "10%",
          sla: <img src={CheckedIcon} className={style.checked} />,
          actions: [
            <img src={ViewIcon} onClick={() => props.onViewTaskModalClick()} />,
            <img
              src={EditIcon}
              onClick={() => props.onTaskModalClick("Edit")}
            />,
            <img src={GarbageIcon} />
          ]
        },
        {
          id: 2,
          task: "Global Employee",
          deadline: "January 22 2020",
          category: "Sykes",
          priority: "Level 1",
          status: "Open",
          completion: "10%",
          sla: <img src={CheckedIcon} className={style.checked} />,
          actions: [
            <img src={ViewIcon} onClick={() => props.onViewTaskModalClick()} />,
            <img
              src={EditIcon}
              onClick={() => props.onTaskModalClick("Edit")}
            />,
            <img src={GarbageIcon} />
          ]
        },
        {
          id: 3,
          task: "Global Employee",
          deadline: "January 13 2020",
          category: "Sykes",
          priority: "Level 1",
          status: "Open",
          completion: "10%",
          sla: <img src={CheckedIcon} className={style.checked} />,
          actions: [
            <img src={ViewIcon} onClick={() => props.onViewTaskModalClick()} />,
            <img
              src={EditIcon}
              onClick={() => props.onTaskModalClick("Edit")}
            />,
            <img src={GarbageIcon} />
          ]
        },
        {
          id: 4,
          task: "Global Employee",
          deadline: "January 15 2020",
          category: "Sykes",
          priority: "Level 1",
          status: "Open",
          completion: "10%",
          sla: <img src={CheckedIcon} className={style.checked} />,
          actions: [
            <img src={ViewIcon} onClick={() => props.onViewTaskModalClick()} />,
            <img
              src={EditIcon}
              onClick={() => props.onTaskModalClick("Edit")}
            />,
            <img src={GarbageIcon} />
          ]
        },
        {
          id: 5,
          task: "Global Employee",
          deadline: "January 7 2020",
          category: "Sykes",
          priority: "Level 1",
          status: "Open",
          completion: "10%",
          sla: <img src={CheckedIcon} className={style.checked} />,
          actions: [
            <img src={ViewIcon} onClick={() => props.onViewTaskModalClick()} />,
            <img
              src={EditIcon}
              onClick={() => props.onTaskModalClick("Edit")}
            />,
            <img src={GarbageIcon} />
          ]
        },
        {
          id: 6,
          task: "Global Employee",
          deadline: "January 6 2020",
          category: "Sykes",
          priority: "Level 1",
          status: "Open",
          completion: "10%",
          sla: <img src={CheckedIcon} className={style.checked} />,
          actions: [
            <img src={ViewIcon} onClick={() => props.onViewTaskModalClick()} />,
            <img
              src={EditIcon}
              onClick={() => props.onTaskModalClick("Edit")}
            />,
            <img src={GarbageIcon} />
          ]
        },
        {
          id: 7,
          task: "Global Employee",
          deadline: "January 5 2020",
          category: "Sykes",
          priority: "Level 1",
          status: "Open",
          completion: "10%",
          sla: <img src={CheckedIcon} className={style.checked} />,
          actions: [
            <img src={ViewIcon} onClick={() => props.onViewTaskModalClick()} />,
            <img
              src={EditIcon}
              onClick={() => props.onTaskModalClick("Edit")}
            />,
            <img src={GarbageIcon} />
          ]
        },
        {
          id: 8,
          task: "Global Employee",
          deadline: "January 3 2020",
          category: "Sykes",
          priority: "Level 1",
          status: "Open",
          completion: "10%",
          sla: <img src={CheckedIcon} className={style.checked} />,
          actions: [
            <img src={ViewIcon} onClick={() => props.onViewTaskModalClick()} />,
            <img
              src={EditIcon}
              onClick={() => props.onTaskModalClick("Edit")}
            />,
            <img src={GarbageIcon} />
          ]
        },
        {
          id: 9,
          task: "Global Employee",
          deadline: "January 1 2020",
          category: "Sykes",
          priority: "Level 1",
          status: "Open",
          completion: "10%",
          sla: <img src={CheckedIcon} className={style.checked} />,
          actions: [
            <img src={ViewIcon} onClick={() => props.onViewTaskModalClick()} />,
            <img
              src={EditIcon}
              onClick={() => props.onTaskModalClick("Edit")}
            />,
            <img src={GarbageIcon} />
          ]
        }
      ]
    };

    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const tasks = Object.assign([], this.state.tasks);
    const task = this.state.tasks[source.index];
    tasks.splice(source.index, 1);
    tasks.splice(destination.index, 0, task);

    this.setState({
      tasks: tasks
    });
  }

  render() {
    let styleActions = {
      divTableHeader: style.divTableHeader
    };

    return (
      <div className={style.divMyTaskContainer}>
        <div className={style.divMyTaskBody}>
          <div className={style.divTasks}>
            <DragDropContext onDragEnd={this.onDragEnd}>
              <table>
                <thead>
                  <tr>
                    <th>Task</th>
                    <th>Deadline</th>
                    <th>Category</th>
                    <th>Priority</th>
                    <th>Status</th>
                    <th>Completion</th>
                    <th>SLA</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <Droppable droppableId="droppable">
                  {(provided, snapshot) => (
                    <tbody {...provided.droppableProps} ref={provided.innerRef}>
                      {this.state.tasks.map((item, index) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <Fragment key={item.id}>
                              <tr
                                key={item.id}
                                {...provided.draggableProps}
                                ref={provided.innerRef}
                                {...provided.dragHandleProps}
                              >
                                <td className={style.borderBottom}>
                                  {item.task}
                                </td>
                                <td className={style.borderBottom}>
                                  {item.deadline}
                                </td>
                                <td className={style.borderBottom}>
                                  {item.category}
                                </td>
                                <td className={style.borderBottom}>
                                  {item.priority}
                                </td>
                                <td className={style.borderBottom}>
                                  {item.status}
                                </td>
                                <td className={style.borderBottom}>
                                  {item.completion}
                                </td>
                                <td className={style.borderBottom}>
                                  {item.sla}
                                </td>
                                <td
                                  className={
                                    style.divTableHeader +
                                    " " +
                                    style.borderBottom
                                  }
                                >
                                  {item.actions.map(z => z)}
                                </td>
                              </tr>
                            </Fragment>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </tbody>
                  )}
                </Droppable>
              </table>
            </DragDropContext>
          </div>
          <div className={style.divPaginationContainer}>
            <div className={style.divPagination}>
              <img src={ArrowLeftIcon} />
              <label>1 of 10</label>
              <img src={ArrowRightIcon} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyTask;
