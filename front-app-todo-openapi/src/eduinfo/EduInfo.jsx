import { useEffect, useState } from "react";
import axios from 'axios'

const BASEURL = 'http://apis.data.go.kr/6260000/BusanCrsTrnngInfoService/getCrsTrnngInfo?ServiceKey=IsVjOSMr08fApuT6YfmZbPbiF4OIODiz1mkGWxBE6oBx6iYgKElPklxZZwwFqsaHjVXreKqYsPzwyylyvhT5lw%3D%3D&pageNo=1&numOfRows=10&resultType=json'

const EduInfo = () => {
    let [eduList, setEduList] = useState([])

    const getServerData = async () => {
        try {
            const response = await axios.get(BASEURL)
            let rows = response.data['getCrsTrnngInfo']['body']['items']['item']
            console.log(rows.length)
            setEduList(rows)
        } catch (e) {
            console.log(e)
        }
    }

    let items = eduList.map((item) => {
        //원하는 데이터만 추출.. 
        let lctreNm = item['lctreNm']//강좌명
        let progrsSttusNm = item['progrsSttusNm']//접수중?
        let resveGroupNm = item['resveGroupNm']//운영기관
        return (
            <tr>
                <td>{lctreNm}</td>
                <td>{progrsSttusNm}</td>
                <td>{resveGroupNm}</td>
            </tr>
        )
    })

    //최초에 서버 요청
    useEffect(() => {
        getServerData()
    }, [])

    return (
        <>
            <h3>부산시 교육/강좌 현황</h3>
            <br />
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">강좌명</th>
                        <th scope="col">접수상태</th>
                        <th scope="col">운영기관</th>
                    </tr>
                </thead>
                <tbody>{items}</tbody>
            </table>
        </>
    )
}

export default EduInfo 