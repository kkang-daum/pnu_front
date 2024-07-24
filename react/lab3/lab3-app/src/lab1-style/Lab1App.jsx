import styles from './style'

import One from './One'
import Two from './Two'
import Three from './Three'
import Four from './Four'

const CSSTest = () => {
    return (
        <div className="container">
            <h2>Global CSS</h2>
            <button type="button" className="btn btn-primary">Primary</button>
            {/* inline style, js 객체로 정의한 스타일을 컴포넌트에 직접 적용 */}
            <p style={styles.textStyle}>hello world</p>
            <hr style={styles.dashStyle}/>
            {/* css class 충돌상황..  */}
            <One />
            <Two />
            {/* css module test...  */}
            <Three />
            <Four />
        </div>
    )
}

export default CSSTest