//useNavigate 는 api - 코드에서 화면전환 시킬때
//Link - component - 링크화면.. 화면전환 요청 능력
import { Link } from "react-router-dom";
import TodoItem from "./TodoItem";

const TodoList = ({ states, callbacks }) => {
    //상위에서 전달한 데이터 갯수 만큼 TodoItem 준비..
    let todoItems = states.todoList.map((item) => {
        return <TodoItem key={item.id} todoItem={item} callbacks={callbacks} />
    })
    return (
        <>
            <div className="row">
                <div className="col p-3">
                    <Link className="btn btn-primary" to="/todos/add">
                        할일추가
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ul className="list-group">{todoItems}</ul>
                </div>
            </div>
        </>

    )
}

export default TodoList