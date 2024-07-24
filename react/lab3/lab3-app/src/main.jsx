import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//앱 내에서 global 하게 적용되어야 하는 css 는 
//js 에서 import, 한번만 import 하면 앱 전역에서 사용
//main.jsx 에서 import
import 'bootstrap/dist/css/bootstrap.css'

import CSSTest from './lab1-style/Lab1App.jsx'
import Lab2App from './lab2-proptype/Lab2App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <CSSTest /> */}
    <Lab2App />
  </React.StrictMode>,
)
