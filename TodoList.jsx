import { useState } from "react";

export default function TodoList() {
    let [todos, setTodos] = useState(["sample Task"]);
    return (
    <div>
        <input placeholder="Add a task"></input>
        <br></br>
        <button>Add Task</button>
        <br></br><br></br>

        <hr></hr>
        <h4>Tasks Todo</h4>
        <ul>
            {
                todos.map((todo) => {
                    <li>{todo}</li>;
                })
            }
        </ul>
       
    </div>
    );
}