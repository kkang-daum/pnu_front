//해당 파일에서 여러개를 export 시키면 {} 내에 
//내가 import 하고자 하는 것만.. 
import {useState} from 'react'

//상위에서 상태 데이터 유지할거야..
//나는 상위에서 전달한 데이터로 내 화면만 구성하면 되..
//stateless component
const MusicItem = (props) => {
    let item = props.item 
    return <li>{item.no} - {item.title} - ({item.artist})</li>
}

const MusicList = (props) => {
    const list = props.music 
    let items = list.map((item, index) => {
        return <MusicItem key={item.no} item={item}/>
    })
    return <ul className='list-group'>{items}</ul>
}

const StateTest = () => {
    //상태변수 - 변경시 호출할 함수
    //상태 데이터는 꼭 useState() 로 선언해야 하고..
    //상태 변경에 의한 화면 re-rendering 이 되려면 setter 함수 호출
    let [list, setList] = useState([
        {no:1, title:'Spemova', artist: 'aespa'},
        {no:2, title:'How Sweet', artist: 'NewJeans'},
        {no:3, title:'상사화', artist: '안예원'},
    ])

    //하나의 component 에서 상태는 여러개 선언 가능..
    const [count, setCount] = useState(0)

    //유저 이벤트 콜백함수..
    const changeList = () => {
        list.unshift(list.pop())
        //화면 re-rendering 은 꼭 state 의 setter 함수를 호출해야..
        //render 부분이 다시 호출.. 함수로 component 를 만들면.. 
        //return 부분이 다시 실행.. 
        setList([...list])
    }
    return (
        <>
            <h2>State Test</h2>
            <p><MusicList music={list}/></p>
            <p>{count}</p>
            <button onClick={changeList}>change list</button>
            <button onClick={() => setCount(count + 1)}>change count</button>
        </>
    )
}

export default StateTest 