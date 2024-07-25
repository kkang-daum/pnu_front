//프로그램 코드에서 화면전환 요청을 할때..
import { useNavigate } from 'react-router-dom'

//todoItem - props - 항목 데이터.. 화면 구성
//callbacks - props - 상위의 함수.. delete 버튼 클릭시 호출
const TodoItem = ({ todoItem, callbacks }) => {
    const navigate = useNavigate()
    //처리한 일인지에 따라 ui 다르게 css class 조정
    let itemClassName = 'list-group-item'
    if (todoItem.done) itemClassName += ' list-group-item-success'
    return (
        <li className={itemClassName}>
            {/* 항목 클릭. done toggle */}
            <span onClick={() => { }}>
                {todoItem.todo}
                {todoItem.done ? "(완료)" : ""}
            </span>
            <span className='float-end badge bg-secondary pointer m-1'
                onClick={() => {
                    //프로그램 코드적으로 화면 전환 요청을 한다..
                    navigate('/todos/edit/'+todoItem.id)
                 }}>
                편집
            </span>
            <span className='float-end badge bg-secondary pointer m-1'
                onClick={() => { 
                    //상위의 함수를 호출해서.. 상위에서 데이터가 관리되게..
                    callbacks.deleteTodo(todoItem.id)
                }}>
                삭제
            </span>
        </li>
    )
}
export default TodoItem 