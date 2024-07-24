import {PropTypeTest1} from './TestPropTypes'

const Lab2App = () => {
    const myFun = (x, y) => {
        console.log(`myFun call... ${x + y}`)
    }
    const user = {
        name: 'kim',
        age : 20
    }
    const array = ['hello', 'world']

    return (
        <>
            <PropTypeTest1 
                id='kim'
                num={10}
                bool={true}
                fun={myFun}
                obj={user}
                array={array}
                />
        </>
    )
}

export default Lab2App 