import React, { Component } from "react";

export default class LifecycleTest2 extends Component {
    //real dom 을 직접 이용하기 위한 식별자.
    //real dom - autofocus, scroll
    chatRef = React.createRef()

    state = {
        msgList: [],
        msg: ""
    }
    //virtual dom update 완료 후, real dom update 직전
    getSnapshotBeforeUpdate(prevProps, prevState){
        const chat = this.chatRef.current
        //현재 채팅 글이 이전과 같은지? 다른지? 
        if(prevState.msgList !== this.state.msgList && chat !== null){
            //dom 의 height
            return chat.offsetHeight
        }
        //이 함수에서 리턴시킨 값이 componentDidUpdate() 함수의 3번째 매개변수로
        //자동 전달.. 
        return 0
    }
    //snapshot - getSnapshotBeforeUpdate 에서 리턴한 값
    componentDidUpdate(prevProps, prevState, snapshot){
        const chat = this.chatRef.current
        if(snapshot > 0 && chat !== null){
            //real dom scroll 
            chat.scrollTop = chat.scrollHeight - snapshot
        }
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
                <div id="a" ref={this.chatRef} style={{width: 400, height: 120, overflow:'auto', 
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