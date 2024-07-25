import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoList from "./TodoList";

//todo 와 관련된 화면을 routing 해주는 역할.. 
const TodoHome = ({states, callbacks}) => {
    return (
        <Routes>
            <Route path="/" 
                element={<TodoList states={states} callbacks={callbacks}/>}/>
        </Routes>
    )
}
export default TodoHome 