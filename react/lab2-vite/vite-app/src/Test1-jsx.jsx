//component 선언.. 
const Test1 = () => {
    //msg1 - jsx 표현식
    //msg2 - 문자열.. 
    let msg1 = <b>World</b>
    let msg2 = '<b>World</b>'

    return (
        <>
            <h2>JSX Test</h2>
            <p>Hello {msg1}</p>
            <p>Hello {msg2}</p>
            <p>Hello <span dangerouslySetInnerHTML={{__html:msg2}} /></p>
        </>
    )
}

export default Test1