function getTimeXHR() {
    //ajax 객체 생성.. 
    let xhr = new XMLHttpRequest()
    //요청 준비.. 설정.. 
    xhr.open('get', 'http://localhost/time?msg=time')
    //응답 콜백 등록.. 
    xhr.onload = function() {
        //서버 데이터 획득.. 
        let result = xhr.responseText
        document.getElementById('result').innerHTML = result
    }
    //서버 요청..
    xhr.send()
}

function getTimeXHRJSON() {
    //ajax 객체 생성.. 
    let xhr = new XMLHttpRequest()
    //요청 준비.. 설정.. 
    xhr.open('post', 'http://localhost/timejson')
    //응답 콜백 등록.. 
    xhr.onload = function() {
        //서버 데이터 획득.. 
        let result = xhr.responseText
        //서버에서 넘어온 데이터는 json 문자열이다.. 
        //json 문자열을 js object literal 로 변형시켜서 사용.. 
        result = JSON.parse(result)//json 문자열 -> object literal
        //JSON.stringify() //object literal -> json 문자열.. 
        document.getElementById('result').innerHTML = 
            `json data : ${result.msg} ${result.time}`
    }
    //서버 요청..
    //post 방식 요청임으로 request data 를 url 뒤에 추가한 것이 아니라..
    //요청 body 에 추가해서..
    xhr.send("msg=timejson")
}

function getTimeAxios() {
    const url = 'http://localhost/time?msg=time'
    axios.get(url).then((response) => {
        document.getElementById('result').innerHTML = response.data
    })
}