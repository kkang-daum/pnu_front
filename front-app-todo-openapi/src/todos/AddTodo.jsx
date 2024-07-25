import { useState } from "react";
import { useNavigate } from 'react-router'

const AddTodo = ({ callbacks }) => {
    const navigate = useNavigate()

    //유저 입력을 제어하기 위해서, controlled component
    let [todo, setTodo] = useState("")
    let [desc, setDesc] = useState("")

    //event callback 함수.. 버튼 클릭.. 
    const addTodoHandler = () => {
        //trim() - 문자열 앞, 뒤 공백 제거.. 
        if (todo.trim() === '' || desc.trim() === '') {
            alert('반드시 할일, 설명을 입력해야 합니다.')
            return;
        }
        //유저 입력을 저장해야 한다. 상위의 함수 호출해서.. 
        //3번째 매개변수.. 상위에서 데이터 저장하고 호출해줄 나의 함수.
        callbacks.addTodo(todo, desc, () => {
            //화면전환하자.. 목록화면으로.. 
            navigate('/todos')
        })
    }

    return (
        <>
            <div className="row">
                <div className="col p-3"><h2>할일 추가</h2></div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="form-group">
                        <label htmlFor="todo">할일</label>
                        <input
                            type="text"
                            className="form-control"
                            id="todo"
                            value={todo}
                            onChange={(e) => setTodo(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="desc">설명</label>
                        <textarea
                            className="form-control"
                            rows={3}
                            id="desc"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-primary m-1"
                            onClick={addTodoHandler}>추가</button>
                        <button type="button" className="btn btn-primary m-1"
                            onClick={() => navigate('/todos')}>취소</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddTodo