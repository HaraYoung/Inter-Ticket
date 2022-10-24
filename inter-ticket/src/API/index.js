import axios from "axios";

//HTTP reauest & response
const config = {
    periodListUrl: "/openapi/rest/publicperformancedisplays/period",
    realmListUrl: "/openapi/rest/publicperformancedisplays/realm",
    apiKey: "aG5MSosECAZ12G4HhKWz%2FAlBA7PZ6QvpeFSUk4x4vIBidPv%2FajaKI1H8jc9GcQj0YdHIMdxaVzZQ0e63O416tw%3D%3D"
}

//날짜 형식 변환 함수
const dateFormatHandler = (date) => {
    return date.toISOString().slice(0, 10).replace(/-/g, "")
};

//전시 기간 구하는 데에 쓰이는 변수들
const today = new Date();
const startDate = dateFormatHandler(today);
const halfYearDay = new Date(today.setMonth(today.getMonth() + 6));
const endDate = dateFormatHandler(halfYearDay);

//API 함수들
//기간별 조회
function fetchPeriodList() {
    return axios.get(`${config.periodListUrl}?from=${startDate}&to=${endDate}&cPage=1&rows=6&place=&gpsxfrom=&gpsyfrom=&gpsxto=&gpsyto=&keyword=&sortStdr=1&serviceKey=${config.apiKey}`);
}

//분야별 조회
function fetchRealmList(realmCode) {
    return axios.get(`${config.realmListUrl}?from=${startDate}&to=${endDate}&cPage=1&rows=12&realmCode=${realmCode}&place=&gpsxfrom=&gpsyfrom=&gpsxto=&gpsyto=&keyword=&sortStdr=1&serviceKey=${config.apiKey}`);
}

export {
    fetchPeriodList,
    fetchRealmList,
}