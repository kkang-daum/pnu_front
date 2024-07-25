import { Outlet } from "react-router";
import Header from "./Header";

//우리가 만드는 앱의 전체 화면 구조를 잡는 역할.. 
const Layout = () => {
    return (
        <div className="container">
            <Header />
            {/* router 에 의해 결정된 화면을 출력하는 위치... */}
            <Outlet />
        </div>
    )
}
export default Layout