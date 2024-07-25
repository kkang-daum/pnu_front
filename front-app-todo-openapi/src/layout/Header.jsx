import { useState } from "react";
//링크 화면. react-router 와 연동 준비가 된.. 
import { Link } from 'react-router-dom'

//bootstap 에서 복사해서..
//class -> className
const Header = () => {
    //메뉴 부분을 제어하기 위해서.. 
    let [isNavShow, setIsNavShow] = useState(false)
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <span className="navbar-brand ps-2">MyApp</span>
                <button onClick={()=>setIsNavShow(!isNavShow)} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={isNavShow ? "collapse navbar-collapse show" : "collapse navbar-collapse"} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {/* a -> Link 로, 라우팅을 위해서.. */}
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/todos">TODO</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/eduinfo">EDU INFO</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-disabled="true" to="/">Menu1</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header 