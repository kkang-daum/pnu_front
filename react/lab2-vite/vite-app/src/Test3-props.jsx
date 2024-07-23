const PropsTest1 = () => {
    let name = "kim"
    let user = {
        name: "lee",
        age: 20
    }
    return (
        <>
            <h2>Props Test</h2>
            <Sub1 />
            {/* 상위 데이터 하위에 전달 */}
            <Sub1 name={name} age="10"/>
            <Sub2 user={user}/>
            <Sub3 name="park" addr="seoul" age="30" email="a@a.com"/>
            <Sub4 name="park" addr="seoul" age="30" email="a@a.com"/>
        </>
    )
}

const Sub1 = (props) => {
    return <p>I am Sub1, {props.name}, {props.age}</p>
}
const Sub2 = (props) => {
    return <p>I am Sub2 , {props.user.name}, {props.user.age}</p>
}
//단일 변수 선언하고.. 그 변수로, props.name, props.age
//전달되는 데이터를 나열시켜서.. 4개의 변수 선언..
//속성 명과 변수 명으로 매핑됨으로 순서는 의미가 없다.. 
const Sub3 = ({name, age, addr, email}) => {
    return <p>I am Sub3, {name}, {age}, {addr}, {email}</p>
}

//상위 속성 데이터를 받으면서.. 변수이름을 다르게..
//상위속성명:컴포넌트내에서 변수명
const Sub4 = ({name:name1, age:age1, addr:address, email:e}) => {
    return <p>I am Sub4, {name1}, {age1}, {address}, {e}</p>
}

export default PropsTest1