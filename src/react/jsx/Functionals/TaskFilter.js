import React from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import style from "../../css/TaskFilter.css";

const styleSelect = () => ({
  container: (provided, state) => ({
    ...provided,
    border: state.isFocused ? null : null,
    transition:
      "border-color 0.2s ease, box-shadow 0.2s ease, padding 0.2s ease",
    "&:hover": {
      boxShadow: "0 2px 4px 0 rgba(41, 56, 78, 0.1)"
    },
    width: "60%",
    height: "60%"
  }),
  control: base => ({
    ...base,
    borderColor: "hsl(0, 0%, 80%)",
    height: "100%",
    minHeight: "0"
  }),
  valueContainer: base => ({
    ...base,
    height: "100%"
  }),
  placeholder: base => ({
    ...base,
    fontSize: "14px"
  }),
  indicatorsContainer: base => ({
    ...base,
    height: "100%"
  }),
  indicatorSeparator: base => ({
    ...base,
    marginTop: "4px",
    height: "70%"
  })
});

const styleFilter = {
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  flex: 1
};

const styleHeader = {
  marginRight: "5px"
};

const styleArrow = {
  height: "30%",
  marginLeft: "5px"
};

const styleDatePicker = {
  width: "10%"
};

const Filter = props => {
  const startDate = new Date();

  return (
    <div style={{ ...styleFilter }}>
      <h5 style={styleHeader}>{props.text}</h5>
      {(props.isDatePicker === false && (
        <Select
          isMulti={false}
          styles={styleSelect()}
          placeholder={props.placeholder}
        />
      )) ||
        (props.isDatePicker && (
          <DatePicker selected={startDate} className={style.input} />
        ))}
    </div>
  );
};

const withFilter = WrappedItem => props => {
  return <WrappedItem {...props} />;
};

const TaskFilter = () => {
  let HOCFilter = withFilter(Filter);

  return (
    <div className={style.divFilterBody}>
      <HOCFilter text={"Start"} width={"20%"} isDatePicker={true} />
      <HOCFilter text={"End"} width={"20%"} isDatePicker={true} />
      <HOCFilter
        text={"Category"}
        placeholder={"Select Category"}
        width={"20%"}
        isDatePicker={false}
      />
      <HOCFilter
        text={"Priority"}
        placeholder={"Select Priority"}
        width={"20%"}
        isDatePicker={false}
      />
      <HOCFilter
        text={"Status"}
        placeholder={"Select Status"}
        width={"20%"}
        isDatePicker={false}
      />
      <HOCFilter
        text={"Created By"}
        placeholder={"Select Officers"}
        width={"20%"}
        isDatePicker={false}
      />
      <HOCFilter
        text={"Recipients By"}
        placeholder={"Select Name"}
        width={"20%"}
        isDatePicker={false}
      />
    </div>
  );
};

export default TaskFilter;
