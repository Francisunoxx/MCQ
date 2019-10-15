import React from "react";
import Select from "react-select";
import style from "../../css/TaskModalFunctional.css";
import TaskIcon from "../../assets/New-Task.svg";
import { EditorState } from "draft-js";
//import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import EditorComponent from "../Components/EditorComponent";
import Picture from "../../assets/Picture.svg";
import Preview from "../../assets/Preview.svg";

const type = {
  INPUT: "INPUT",
  TEXTAREA: "TEXTAREA",
  DRAGGABLE: "DRAGGABLE"
};

const Add = "Add";
const Priority = "Priority";
const Task = "Task name";
const Recipients = "Recipients";
const Deadline = "Deadline";
const Category = "Category";
const Attachment = "Attachment/Link";
const Notes = "Notes";

const styleSelect = (isNotValid, isRecipient) => ({
  container: (provided, state) => ({
    ...provided,
    border: state.isFocused ? null : null,
    transition:
      "border-color 0.2s ease, box-shadow 0.2s ease, padding 0.2s ease",
    "&:hover": {
      boxShadow: "0 2px 4px 0 rgba(41, 56, 78, 0.1)"
    },
    width: !isRecipient ? "80%" : "100%",
    height: !isRecipient ? "60%" : "100%",
    top: "6%"
  }),
  control: base => ({
    ...base,
    borderColor: isNotValid ? "hsl(0, 100%, 49%)" : "hsl(0, 0%, 80%)",
    height: !isRecipient ? 30 : 95,
    minHeight: 30
  }),
  valueContainer: base => ({
    ...base
  })
});

const styleItemContainer = {
  height: "100%",
  display: "flex",
  alignItems: "center"
};

const styleLabelContainer = {
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const styleInputContainer = {
  display: "flex",
  alignItems: "center"
};

const styleInput = {
  width: "100%",
  height: "50%",
  border: "none",
  borderRadius: "3px",
  borderStyle: "solid",
  borderWidth: "thin",
  borderColor: "#CFCFCF"
};

const styleTextArea = {
  width: "100%",
  height: "100%",
  marginRight: "auto",
  border: "none",
  borderRadius: "3px",
  borderStyle: "solid",
  borderWidth: "thin",
  borderColor: "#CFCFCF"
};

const Item = props => {
  let styleOverrideItemContainer = {};
  let styleOverrideLabelContainer = {};
  let styleOverrideLabel = {};
  let styleOverrideInputContainer = {};

  if (props.labelText === Task) {
    styleOverrideItemContainer = {
      width: "30%"
    };
    styleOverrideLabelContainer = {
      width: "30%"
    };
    styleOverrideInputContainer = {
      width: "70%",
      height: "95%"
    };
  } else if (props.labelText === Category) {
    styleOverrideItemContainer = {
      width: "30%"
    };
    styleOverrideLabelContainer = {
      width: "30%"
    };
    styleOverrideInputContainer = {
      width: "70%",
      height: "95%"
    };
  } else if (props.labelText === Deadline) {
    styleOverrideItemContainer = {
      width: "30%"
    };
    styleOverrideLabelContainer = {
      width: "30%"
    };
    styleOverrideInputContainer = {
      width: "70%",
      height: "95%"
    };
  } else if (props.labelText === Attachment) {
    styleOverrideItemContainer = {
      width: "30%"
    };
    styleOverrideLabelContainer = {
      width: "45%"
    };
    styleOverrideInputContainer = {
      width: "70%",
      height: "95%"
    };
  } else if (props.labelText === Priority) {
    styleOverrideItemContainer = {
      width: "30%"
    };
    styleOverrideLabelContainer = {
      width: "30%"
    };
    styleOverrideInputContainer = {
      width: "70%",
      height: "95%"
    };
  } else if (props.labelText === Recipients) {
    styleOverrideItemContainer = {
      width: "100%"
    };
    styleOverrideLabelContainer = {
      width: "9%"
    };
    styleOverrideLabel = {
      position: "absolute",
      top: "32%"
    };
    styleOverrideInputContainer = {
      width: "47%",
      height: "95%"
    };
  } else if (props.labelText === Notes) {
    styleOverrideItemContainer = {
      width: "100%"
    };
    styleOverrideLabelContainer = {
      width: "30%"
    };
    styleOverrideLabelContainer = {
      width: "9%"
    };
    styleOverrideInputContainer = {
      width: "89%",
      height: "100%"
    };
  }

  return (
    <div style={{ ...styleItemContainer, ...styleOverrideItemContainer }}>
      <div style={{ ...styleLabelContainer, ...styleOverrideLabelContainer }}>
        {props.isRecipient ? (
          <label style={{ ...styleOverrideLabel }}>{props.labelText}</label>
        ) : (
          <label>{props.labelText}</label>
        )}
      </div>
      <div style={{ ...styleInputContainer, ...styleOverrideInputContainer }}>
        {(props.inputType === type.INPUT && (
          <input type="text" style={styleInput} />
        )) ||
          (props.inputType === type.TEXTAREA && <EditorComponent />) ||
          (props.inputType === type.SELECT && (
            <Select
              isMulti={true}
              styles={styleSelect(false, props.isRecipient)}
              placeholder={props.placeholder}
            />
          ))}
      </div>
    </div>
  );
};

const withItem = WrappedItem => props => {
  return <WrappedItem {...props} />;
};

const NewTask = props => {
  const { isNewTask } = props.modal;
  let HOCItem = withItem(Item);
  let ModalContainerStyle = props.modal.isNewTaskVisible ? "flex" : "none";

  return (
    <div
      className={style.divNewTaskContainer}
      style={{ display: ModalContainerStyle }}
    >
      <div className={style.divNewTaskBody}>
        <div className={style.divHeader}>
          <img src={TaskIcon} />
          <h4>{isNewTask ? "Assign Task" : "Edit Task"}</h4>
          <p onClick={() => props.onTaskModalClick()}>&#10060;</p>
        </div>
        <div className={style.divBody}>
          <div className={style.divFirstRow}>
            <HOCItem
              labelText={"Task name"}
              inputType={type.INPUT}
              isNoteContainer={false}
            />
            <HOCItem
              labelText={"Category"}
              inputType={type.SELECT}
              placeholder={"Select Category"}
              isNoteContainer={false}
              isRecipient={false}
            />
            <HOCItem
              labelText={"Attachment/Link"}
              inputType={type.INPUT}
              isNoteContainer={false}
            />
          </div>
          <div className={style.divSecondRow}>
            <HOCItem
              labelText={"Deadline"}
              inputType={type.INPUT}
              isNoteContainer={false}
            />
            <HOCItem
              labelText={"Priority"}
              inputType={type.SELECT}
              placeholder={"Select Priority"}
              isNoteContainer={false}
              isRecipient={false}
            />
          </div>
          <div className={style.divThirdRow}>
            <HOCItem
              labelText={"Recipients"}
              inputType={type.SELECT}
              placeholder={"Select Recipients"}
              isNoteContainer={false}
              isRecipient={true}
            />
          </div>
          <div className={style.divFourthRow}>
            {
              <HOCItem
                labelText={"Notes"}
                inputType={type.TEXTAREA}
                rows={20}
                cols={50}
                isNoteContainer={true}
              />
            }
          </div>
          {/*<div className={style.divFifthRow}>
            <div className={style.divNoteOptions}>
              <img src={Picture} />
              <img src={Preview} />
            </div>
            <div className={style.divButton}>
              {isNewTask ? <button>Save</button> : <button>Apply</button>}
            </div>
          </div>*/}
        </div>
      </div>
    </div>
  );
};

export default NewTask;
