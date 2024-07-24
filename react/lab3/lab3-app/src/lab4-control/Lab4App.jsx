import { useState } from "react"

const ControlledComponent = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const changeValue = (e) => {
        let newValue = parseInt(e.target.value)
        if(isNaN(newValue)) newValue = 0
        //유저 입력 데이터 획득해서 상태 변경 -> 화면에 출력 
        if(e.target.id === 'x') setX(newValue);
        else setY(newValue)
    }


    return (
        <>
            <h2>uncontrolled component</h2>
            {/* 입력 된다..
            유저 입력 데이터를 획득하겠다면? */}
            name : <input type="text"/>
            <br/>
            {/* 입력 안된다.. */}
            name : <input type="text" value={"kim"} />

            <h2>controlled component</h2>
            x : <input id="x" type="text" value={x} onChange={changeValue}/>
            <br/>
            y : <input id="y" type="text" value={y} onChange={changeValue}/>
            <br/>
            result : <span>{x + y}</span>
        </>
    )
}

export default ControlledComponent