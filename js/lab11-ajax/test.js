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