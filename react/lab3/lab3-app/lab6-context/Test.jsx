import React, { useContext, useState } from 'react'

//Context 로 상태를 관리해서.. 조상의 상태 및 함수를 자손에서 
//props 로 결합되지 않고 사용할 수 있게.. 

//조상 component 에서 준비, 자손 component 에서 이용, export 되어야
let UserContext = React.createContext(null)

//공통의 조상 역할을 하는 컴포넌트.. 이곳에서 Context 로 
//상태 데이터 및 함수를 자손에게 공개..
const UserProvider = () => {
    //하위에서 이용하는 상태 데이터..
    let [userInfo, setUserInfo] = useState({name:'kim',age:20})
    //하위에서 호출하는 함수.. 
    const fun1 = (data, callback) => {
        console.log(`fun1 call, ${data}`)
        callback()
    }
    const fun2 = (userInfo) => {
        setUserInfo(userInfo)
    }

    //하위에 공개하기 위한 데이터, 함수.. 
    let value = {userInfo, fun1, fun2}
    return <UserContext.Provider value={value}><Sub /></UserContext.Provider>
    // return <div>Hello</div>
}

//하위, 상위 누군가가 만들어놓은 context import
const Sub = () => {
    let context = useContext(UserContext)
    return (
        <>
            <p>I am Sub Component : {context.userInfo.name}, 
                {context.userInfo.age}
            </p>
            <p>
                <button onClick={() => context.fun1('hello', () => {
                    console.log('sub fun call...')
                })}>click</button>
            </p>
            <SubSub />
        </>
    )
}

const SubSub = () => {
    let context = useContext(UserContext)
    return (
        <>
            <p>I am SubSub Component : {context.userInfo.name}, 
                {context.userInfo.age}
            </p>
            <p>
                <button onClick={() => context.fun2({name:'lee', age:30})}>click</button>
            </p>
        </>
    )
}

export default UserProvider