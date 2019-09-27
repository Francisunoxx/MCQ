import React from 'react';
import Select from 'react-select';
import style from '../../css/NewTaskFunctional.css';
import Task from '../../assets/New-Task.svg';
import Picture from '../../assets/Picture.svg';
import Preview from '../../assets/Preview.svg';

const type = {
    'INPUT': 'INPUT',
    'TEXTAREA': 'TEXTAREA',
    'SELECT': 'SELECT',
    'DRAGGABLE': 'DRAGGABLE'
}

const customStyles = (isNotValid) => ({
    container: (provided, state) => ({
        ...provided,
        border: state.isFocused ? null : null,
        transition:
            "border-color 0.2s ease, box-shadow 0.2s ease, padding 0.2s ease",
        "&:hover": {
            boxShadow: "0 2px 4px 0 rgba(41, 56, 78, 0.1)"
        },
        width: 170,
        marginRight: 'auto'
    }),
    control: (base) => ({
        ...base,
        "borderColor": isNotValid ? "hsl(0, 100%, 49%)" : "hsl(0, 0%, 80%)"
    }),
    valueContainer: (base) => ({
        ...base
    })
});

const styleItemContainer = {
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center'
}

const styleLabelContainer = {
    'width': '35%',
    'height': '50%',
    'display': 'flex',
    'alignItems': 'center'
}

const styleLabelNote = {
    'position': 'absolute',
    'bottom': '54.5%',
    'left': '24%'
}

const styleInputContainerHeightWidth = {
    'width': '50%',
    'height': '20%',
}

const styleTextAreaContainerHeightWidth = {
    'width': '21%',
    'height': '50%'
}

const styleNotePosition = {
    'position': 'absolute',
    'top': '18.8%',
    'right': '51%'
}

const styleInputContainer = {
    'display': 'flex',
    'alignItems': 'center',
    'marginRight': 'auto'
}

const styleLabel = {
    'marginLeft': '10px',
    'marginRight': '10px'
}

const styleInput = {
    'width': '100%',
    'height': '100%',
    'marginRight': 'auto',
    'border': 'none',
    'borderRadius': '3px',
    'borderStyle': 'solid',
    'borderWidth': 'thin',
    'borderColor': '#CFCFCF'
}

const styleTextArea = {
    'width': '100%',
    'height': '100%',
    'marginRight': 'auto',
    'border': 'none',
    'borderRadius': '3px',
    'borderStyle': 'solid',
    'borderWidth': 'thin',
    'borderColor': '#CFCFCF'
}


const Item = (props) => {
    return (
        <div style={props.isNoteContainer ? { ...styleItemContainer, ...styleTextAreaContainerHeightWidth } : { ...styleItemContainer, ...styleInputContainerHeightWidth }}>
            <div style={props.isNoteContainer ? { ...styleLabelContainer, ...styleLabelNote } : { ...styleLabelContainer }}>
                <label style={styleLabel}>{props.labelText}</label>
            </div>
            <div style={props.isNoteContainer ? { ...styleInputContainer, ...styleTextAreaContainerHeightWidth, ...styleNotePosition } : { ...styleInputContainer, ...styleInputContainerHeightWidth }}>
                {
                    props.inputType == type.INPUT &&
                    <input type="text" style={styleInput} /> ||
                    props.inputType == type.TEXTAREA &&
                    <textarea rows={props.rows} cols={props.cols} style={styleTextArea} /> ||
                    props.inputType == type.SELECT &&
                    <Select isMulti={true} styles={customStyles(false)}
                        placeholder={props.placeholder} />
                }
            </div>
        </div>
    )
}

const withItem = (WrappedItem) => (props) => {
    return (
        <WrappedItem {...props} />
    )
}

const NewTask = () => {
    let HOCItem = withItem(Item);

    return (
        <div className={style.divNewTaskContainer}>
            <div className={style.divNewTaskBody}>
                <div className={style.divHeader}>
                    <img src={Task} />
                    <h3>Assign Task</h3>
                </div>
                <div className={style.divBody}>
                    <HOCItem labelText={"Task name"} inputType={type.INPUT} isNoteContainer={false} />
                    <HOCItem labelText={"Recipients"} inputType={type.SELECT} placeholder={"Select Recipients"} isNoteContainer={false} />
                    <HOCItem labelText={"Deadline"} inputType={type.INPUT} isNoteContainer={false} />
                    <HOCItem labelText={"Attachment/Link"} inputType={type.INPUT} isNoteContainer={false} />
                    <HOCItem labelText={"Category"} inputType={type.SELECT} placeholder={"Select Category"} isNoteContainer={false} />
                    <HOCItem labelText={"Notes"} inputType={type.TEXTAREA} rows={20} cols={50} isNoteContainer={true} />
                    <div className={style.divNoteOptions}>
                        <img src={Picture} />
                        <img src={Preview} />
                    </div>
                    <div className={style.divAddTask}>
                        <button>ASSIGN</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewTask;