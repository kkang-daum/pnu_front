const CountryList = () => {
    let list = [
        {no: 1, country: '이집트', visited: false },
        {no: 2, country: '조지아', visited: false },
        {no: 2, country: '캐나다', visited: true },
    ]

    //데이터 갯수 만큼 항목을 jsx 로 준비..
    let countries = list.map((item, index) => {
        return (
            // jsx 내에서 css class 는 className
            // jsx 내에서 어떤 component 가 반복 출력된다면.. key 속성 추가 권장
            // key 는 화면과 관련없는 react 내에서 해당 component 를 식별하는 용도
            //key 값은 식별자인데.. index 를 사용하지 말것을 권장한다
            <li key={item.no} className={item.visited ? "list-group-item active":"list-group-item"}>
                {item.country}
            </li>
        )
    })

    return (
        <ul className="list-group">{countries}</ul>
    )
}

export default CountryList