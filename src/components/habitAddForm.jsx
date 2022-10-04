import React, { memo } from "react";

const HabitAddForm = memo((props) => {
  const inputRef = React.createRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    inputRef.current.value = "";
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      ></input>
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
