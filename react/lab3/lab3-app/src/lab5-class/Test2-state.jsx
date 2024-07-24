import React from 'react'

class StateTest extends React.Component {
    //1. component 의 멤버로.. 생성자 밖에서.. 
    // 
    
    //2 - 생성자에서 상태 선언.. 
    //class 내에 생성자는 constructor 예약어 함수..
    constructor(props){
        //개발자가 생성자를 직접 선언하겠다면.. 
        //매개변수가 props, 꼭 첫줄에서 상위 생성자 호출해서 props 넘겨야
        super(props)
        //클래스의 멤버는 생성자, 일반 함수에서도 선언 가능..
        //this. 으로 선언해야..
        this.state = { change: true }
    }

    render() {
        return (
            <div>
                <h2>State Test</h2>
                <div>
                    {this.state.change ? (
                        <p>Hello</p>
                    ) : (
                        <p>World</p>
                    )}
                </div>
                <button onClick={() => {
                    //상태 변경은 setState() 로.. 
                    this.setState({change: !this.state.change})
                }}>click me</button>
            </div> 
        )
    }
}
export default StateTest 
