import { Component } from "react";

export default class LifecycleTest2 extends Component {
    state = {
        msgList: [],
        msg: ""
    }

    //event callback, controlled component
    setMsg = (e) => {
        this.setState({...this.state, msg: e.target.value})
    }
    //event callback, enter 키 입력 순간의 이벤트.. 
    msgKeyup = (e) => {
        if(e.key === 'Enter'){
            this.setState({
                msg: "", 
                msgList: [...this.state.msgList, this.state.msg]
            })
        }
    }

    render() {
        return (
            <div>
                <h2>채팅 목록</h2>
                <div id="a" style={{width: 400, height: 120, overflow:'auto', 
                    border: 'solid 1px black'
                }}>
                    {this.state.msgList.map((item, index) => {
                        return <h2 key={index}>{item}</h2>
                    })}
                </div>
                <input type="text" value={this.state.msg} 
                    onChange={this.setMsg} 
                    onKeyUp={this.msgKeyup}/>
            </div>
        )
    }
}