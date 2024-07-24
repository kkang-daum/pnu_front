//npm install date-and-time 
//시간날짜 포멧...
import { Component } from "react";
import DateAndTime from 'date-and-time'

class Clock extends Component {
    state = {
        currentTime: new Date()
    }
    //반복적으로 작업하는 interval 을 이용할 건데.. 
    //우리가 이용하는 interval 식별자.. 제어를 위해서.. 
    intervalHandler = 0

    //mount 되자마자 최초 한번.. 
    componentDidMount = () => {
        //setInterval(업무함수, 시간)
        //js core function
        //시간 주기로 반복적으로 함수 호출.. 
        //밀리세컨드.. 1000 -> 1초마다..
        this.intervalHandler = setInterval(() => {
            console.log('## tick~~')
            this.setState({currentTime: new Date()})
        }, 1000)
    }

    //unmount 되기 직전 호출.. 마지막 한번.. 
    componentWillUnmount = () => {
        clearInterval(this.intervalHandler)
    }

    render() {
        return (
            <div className="boxStyle">
                <h3>{DateAndTime.format(
                    this.state.currentTime, 
                    this.props.formatString
                )}</h3>
            </div>
        )
    }
}

export default class LifecycleTest extends Component {
    state = {
        clockVisible : false
    }
    render() {
        return (
        <div>
            <h2>simple clock test</h2>
            <button onClick={() => this.setState(
                {clockVisible : !this.state.clockVisible}
            )}>toggle clock</button>
            <hr/>
            {this.state.clockVisible ? 
                <Clock formatString={"HH:mm:ss"}/> : ""}
        </div>
        )
    }
}
