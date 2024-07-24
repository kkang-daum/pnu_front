import React, {useState} from 'react'

const EventApp = () => {
    const [count, setCount] = useState(0)

    const asyncIncrement = () => {
        // setter : 상태 변경 및 re-rendering - 비동기 처리.
        setCount(count + 1)
        setCount(count + 1)
        setCount(count + 1)
    }
    const syncIncrement = () => {
        //상태 변경 - re-rendering 을 하기는 할건데..
        //어떤 업무가 같이 처리되어야 하고.. 그 업무가 끝난 다음에
        //re-rendering 이 되어야 하는 경우.. 
        //setter 함수의 매개변수에.. 함수를 지정..
        //함수 실행이 끝난다음에.. re-rendering..
        setCount((count) => count + 1)
        setCount((count) => count + 1)
        setCount((count) => count + 1)
        //setter - 동기처리 함수 지정... 성능에 손해를 볼 수 있다.
    }
    return (
        <>
            <h2>Event 상태 변경 테스트</h2>
            <p>count : {count}</p>
            <div>
                <button onClick={asyncIncrement}>async increment</button>
                <button onClick={syncIncrement}>sync increment</button>
            </div>
        </>
    )
}

export default EventApp 