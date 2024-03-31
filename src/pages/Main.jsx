
import { Map, useKakaoLoader } from "react-kakao-maps-sdk";

const Main = () => {
    const [ loading, error ] = useKakaoLoader({
        appkey: "4cdbb12f4a045b879605cdd988a9803c", 
      })

    return (
        <><div>
            <h1>승권이가 추천하는 안양 맛집 정보</h1>
            <h2>한식</h2>
            <ul>
                <li>신화 수산</li>
                <li>큰 손</li>
                <li>용기 곱창</li>
            </ul>
            <h2>양식</h2>
            <ul>
                <li>매드포갈릭</li>
                <li>투파인드 피터</li>
                <li>포크너</li>
            </ul>
            <h2>중식</h2>
            <ul>
                <li>중식당 125</li>
                <li>호랑이 선생</li>
                <li>화차이</li>
            </ul>
            <h2>일식</h2>
            <ul>
                <li>잔잔</li>
                <li>오,늘의 초밥</li>
                <li>파랑새야</li>
            </ul>
            <h2>승권이 최애 맛집 '👑Top 3👑'</h2>
            <ul>
                <li>👑Top 1👑 신화 수산</li>
                <li>👑Top 2👑 투파인드피터</li>
                <li>👑Top 3👑 파랑새야</li>
            </ul>
        </div>
            <div style={{  position: 'fixed', top: 70, right: 100}}>
            <Map
                center={{ lat:  37.3942527, lng: 126.9568209 }}   // 지도의 중심 좌표
                style={{ width: '600px', height: '500px' }} // 지도 크기
                level={3}                                   // 지도 확대 레벨
            >
            </Map>
            </div>
        </>

    )
}

export default Main;
