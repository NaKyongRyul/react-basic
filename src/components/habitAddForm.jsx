import React, { Component } from "react";

class HabitAddForm extends Component {
  inputRef = React.createRef();

  handleSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    // name이 빈칸이 아니라면 onAdd에 이름을 전달
    name && this.props.onAdd(name);
    this.inputRef.current.value = "";
  };
  render() {
    return (
      <form className="add-form" onSubmit={this.handleSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Habit"
        ></input>
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
