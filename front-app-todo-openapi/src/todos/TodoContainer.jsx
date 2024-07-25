import { useEffect, useState } from "react";
import TodoHome from "./TodoHome";
import { produce } from 'immer'
import axios from 'axios'

const BASEURL = 'http://localhost:8000/todolist/gdhong'

const TodoContainer = () => {
    let [todoList, setTodoList] = useState([])

    //async, await - 비동기 (js core)
    //이 함수를 선언한 곳이 비동기로 호출.. 
    const fetchTodoList = async () => {
        setTodoList([])
        try {
            //정상처리 업무.. 
            //서버연동.. 데이터 획득.. 
            const response = await axios.get(BASEURL)
            setTodoList(response.data)
        }catch(e){
            //try 영역에 에러 발생시 실행.. 
            if(e instanceof Error) alert('조회실패 : '+ e.message)
            else alert('조회실패 : '+e)
        }
    }

    //최초에 서버 데이터 획득. fetchTodoList 호출.. 
    //class component 로 만들었다면.. lifecycle 함수를 이용.. 
    //함수형 컴포넌트에서도 일정정도 라이프사이클 사용 가능.. 
    useEffect(() => {
        fetchTodoList()
    }, [])//[] 부분이 변경될때마다 함수 호출.. 
    //[] 로 비워두면 최초 한번.. 

    //신규 항목 추가.. 
    const addTodo = async (todo, desc, callback) => {

    }

    const updateTodo = async (id, todo, desc, done, callback) => {

    }

    const toggleDone = async (id) => {

    }

    const deleteTodo = async (id) => {

    }

    //아래의 함수는 누가 호출하는가? 하위 컴포넌트가.. 하위에 props 로 전달
    const callbacks = {addTodo, updateTodo, toggleDone, deleteTodo}
    const states = { todoList }

    return <TodoHome callbacks={callbacks} states={states}/>
}
export default TodoContainer