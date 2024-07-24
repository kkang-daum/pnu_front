import React from 'react'
import PropTypes from 'prop-types'

class PropsTest extends React.Component {
    render() {
        return (
            <div>
                <h2>Props Test</h2>
                <Sub id="kim" num={10} />
            </div>
        )
    }
}

class Sub extends React.Component {
    //필수적으로 override 해야 하는 함수는 render
    render() {
        //알고리즘 들어갈 수 있고.. 
        //return 시킨 것이 이 컴포넌트의 화면.. 
        return (
            <div>
                <p>I am Sub Component</p>
                <p>id : {this.props.id}, num : {this.props.num}</p>
            </div>
        )
    }
}

Sub.propTypes = {
    id: PropTypes.string.isRequired,
    num: PropTypes.number
}

export default PropsTest