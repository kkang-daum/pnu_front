var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {

  // https://dsmhs.djsch.kr/boardCnts/view.do?m=0201&boardID=54793
  // http://localhost/time?msg=hello
  // CORS 문제를 해결하기 위해서.. response header 지정.. 
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
  var parseUrl = url.parse(req.url, true);
  switch(parseUrl.pathname){
    case '/time':
      responseTime(req, res);
      break;
    case '/timejson':
      responseTimeJson(req, res);
      break;
    default:
      console.log('invalid request..')
  }

  
	
});
server.listen(80, function(){
	console.log('server ready');
});

// 서버의 현재 시간을 응답
function responseTime(req, res){
	getQuery(req, function(err, query){
    var now = Date();
    res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
    // 추출한 query string과 함께 현재 시간을 문자열로 응답
    // setTimeout(function(){
      res.end(query.msg + ' ' + now); 
    // }, 1000*10);    
  });
}

// 서버의 현재 시간을 응답(JSON)
function responseTimeJson(req, res){
	getQuery(req, function(err, query){
    var now = Date();
    res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
    // 추출한 query string과 함께 현재 시간을 JSON 형태의 문자열로 응답
    var result = {
      time: now,
      msg: query.msg
    };
    console.log('query.msg', query.msg)
    res.end(JSON.stringify(result));
  });
}

// 쿼리스트링 추출
var body = require('body/form');
function getQuery(req, cb){
	if(req.method == 'GET'){
    var parseUrl = url.parse(req.url, true);
    cb(null, parseUrl.query);
	}else if(req.method == 'POST'){
		body(req, cb);
	}
}

