import PropTypes from 'prop-types'

const PropTypeTest1 = (props) => {
    return (
        <>
            <h1>Prop Type Test1</h1>
            <p>id : {props.id}, num : {props.num}, bool: {props.bool}</p>
            <div>name : {props.obj['name']}, age: {props.obj['age']}</div>
            <div>
                {
                    props.array.map( item => (
                        <p>{item}</p>
                    ))
                }
            </div>
            <button onClick={() => props.fun(10, 20)}>function call</button>
        </>
    )
}

//component 에 전달되는 데이터 타입 지정..
PropTypeTest1.propTypes = {
    id: PropTypes.string.isRequired,
    num: PropTypes.number,
    fun: PropTypes.func,
    bool: PropTypes.bool,
    obj: PropTypes.object.isRequired,
    array: PropTypes.array
}

//default 는 하나의 파일에서 한개만.. 
//여러개를 export 시키겠다면.. {} - import 하는 곳에서 이름 바꿀 수 없다
export {PropTypeTest1}