import axios from "axios";

//HTTP reauest & response
const config = {
    apiKey: "624c68414779756a373255574c6b65"
}

//API 함수들
//전시 목록 조회
function fetchList() {
    return axios.get(`/${config.apiKey}/json/ListExhibitionOfSeoulMOAInfo/1/1000`)
}

//특정 전시 조회
function fetchDetailList(seq) {
    return axios.get(`/${config.apiKey}/json/ListExhibitionOfSeoulMOAInfo/1/1000/${seq}`)
}

    
export {
    fetchList,
    fetchDetailList,
    config
}