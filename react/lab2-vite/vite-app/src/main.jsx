//node_modules - 라이브러리가 들어가는 위치, 자동 classpath 잡혀 있어서
//경로 명시하지 않아도 된다..
import React from 'react'
import ReactDOM from 'react-dom/client'
// 확장자 jsx - react 기법인 jsx 를 내부적으로 사용한 js 파일이라는 의미
// 명시적으로 jsx 를 사용한 파일임을 티를 내기 위해 jsx 확장자를 사용
//한거지.. js 확장자로 해도 된다..
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode> - 디버그용이다. 실전 운용 에서는 제거한다..
  // <React.StrictMode> 에 의해 로그가 2번씩 출력된다..
  <React.StrictMode>
    {/* 개발자가 만든 component - tag 로 사용한다..
    component - 의미단위의 화면 */}
    <App />
  </React.StrictMode>,
)
