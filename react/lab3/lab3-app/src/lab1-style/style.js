//js 객체로 스타일 정의.. 
const styles = {
    textStyle: {
        //css 의 속성을 그대로 이용하지만.. js 객체임으로..
        //js document node 의 style 속성명을 그대로 이용해야..
        //snake case 가 아니라.. camel case
        fontStyle: 'italic',
        textDecoration: 'underline'
    },
    dashStyle: {
        backgroundColor: '#fff',
        borderTop: '2px dashed gray'
    }
}

export default styles