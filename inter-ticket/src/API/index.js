import axios from "axios";

//HTTP reauest & response
const config = {
    // baseUrl: 'http://www.kopis.or.kr/openApi/restful/',
    apiKey: "a3728550090a40aa8cef76ce9978d7d6"
}

//API 함수들을 정리
function fetchList() {
    const listUrl = "/openApi/restful/pblprfr";
    // const today = new Date().
    return axios.get(`${listUrl}?service=${config.apiKey}&stdate=20160101&edd
ate=20160630&rows=10&cpage=1`)
}

export {
    fetchList
}