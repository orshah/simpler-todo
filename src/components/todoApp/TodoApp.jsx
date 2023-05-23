import "./todoApp.style.css";
import { useState } from "react";

function TodoApp() {
  const defaultTodo = localStorage.getItem("Shahs todo")?.split(",");
  //   console.log("Hey", defaultTodo);
  const [userTodo, setUserTodo] = useState("");
  const [todoLIst, setTodoList] = useState([...defaultTodo]);
  const onChangeHandler = (e) => {
    setUserTodo(e.target.value);
  };

  const OnClickHandler = () => {
    setTodoList([...todoLIst, userTodo]);
    // localStorage.setItem("Shahs todo", [...todoLIst, userTodo]);
    setUserTodo("");
  };

  const onClickDelete = (id) => {
    const afterDeleting = [...todoLIst];
    afterDeleting.splice(id, 1);
    setTodoList(afterDeleting);
    console.log("Here", afterDeleting);
  };

  const showTodoList = todoLIst
    .filter((e) => e !== "")
    .map((el, id) => {
      return (
        <div className="todoItem" key={id}>
          <p>{el}</p>
          <button onClick={onClickDelete}>Delete</button>{" "}
        </div>
      );
    });

  return (
    <div className="input-container">
      <div className="input-box">
        <h1>ToDo App</h1>
        <input
          type="text"
          name="toDoInput"
          onChange={onChangeHandler}
          value={userTodo}
          placeholder="Input todo here"
        />
        <button onClick={OnClickHandler}>ADD</button>
        {showTodoList}
      </div>
    </div>
  );
}

export default TodoApp;
