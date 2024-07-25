import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import TodoContainer from "./todos/TodoContainer";

const App = () => {
  return (
    // 화면 전환.. 결정된 화면을 stack 구조로 관리해 주는 
    //앱 내에서 하나만 사용할 수 있다..
    <Router>
      <Routes>
        {/* path : url */}
        <Route path="/" element={<Layout />}>
          {/* Layout 하위에 선언한 것임으로.. Home 은 Layout 의 Outlet 에 출력 
          index 는 상위 조건 , /, 와 동일하면.. */}
          <Route index element={<Home />}/>
          <Route path="/todos" element={<TodoContainer />}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App