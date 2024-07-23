import Test1 from './Test1-jsx'
//default 로 export 한 것은 이름 바꿔서 이용가능..
import Test2 from './Test2-jsx'

//component - js 로 동적 제어되는 화면 구성
//함수, 클래스로 만들 수 있다.. 
const App = () => {
  
  const msg = "World"
  const addResult = (x, y) => {
    return (
      <div className="card card-body bg-light">
        {x} + {y} = {x + y}
      </div>
    )
  }


  //return 시킨 것이 이 component 의 화면이다..
  //js 영역이다.. 화면을 document.createElement('div') 등으로 처리하기 힘들다
  //js 코드내에서 화면은 html 로 명시하자.. <div>
  //js 영역내에서 html 은 그냥 안된다.. jsx 라는 기술을 이용해야 한다.
  return (
    <div>
      {/* jsx 내에서 주석.. 
        component 는 태그로 사용한다. 
        개발자가 A 라는 컴포넌트를 만들었다면.. <A />
        <div><h1> 등도 컴포넌트이다.. react 내에서 기본으로 만든 컴포넌트
        실제 화면 출력되는 dom node 아니다.. 
        우리는 실제 dom node 로 인지하고 개발하지만.. 실제로는 
        일개 js 객체에 지나지 않는다.. 
        ==> 우리가 핸들링하는 것은 virtual dom 이다.. 
      */}
      <h1>HelloWorld</h1>
      {/* component 의 화면을 jsx 로 구성하면서 동적 데이터는 
      보간법 으로 출력.. {} */}
      <h2>Hello, {msg}</h2>
      <hr/>
      {addResult(10, 20)}
      {/* 개발자가 만든 컴포넌트를 화면에 출력.. 태그명으로.. */}
      <Test1 />
      <Test2 />
    </div>
  )
}

//이 파일내에서 선언된 구성요소(함수, 변수, 클래스)
//일차적으로는 이 파일내에서만 사용
//만약 외부 파일에서도 사용해야 한다면 꼭 export 해야 한다..
//몇개라도 export 가능하다..
//export 할때 default 를 추가할 수도 있고 아닐 수도 있고..
//default 로 export 하는 것은 하나만..
//default 로 export 시킨 것은 외부 파일내에서 import 할때 이름을 바꿀수
//있다..
export default App
