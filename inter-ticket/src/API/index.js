import axios from "axios";

const INTERTICKET = "https://localhost:44387/api/interticket/";

//API 함수들
//전시 목록 조회
function fetchList() {
    return axios.get(INTERTICKET + "all")
}

//특정 전시 조회
function fetchDetailList(seq) {
    return axios.get(INTERTICKET + seq)
}

//전시 검색
function fetchSearchList(query){
    return axios.get(INTERTICKET + `search?q=${query}`)
}

//유저 예매내역 조회
function fetchTicketList(){
    return axios.get(INTERTICKET + "mypage")
}

//예매 취소
function fecthCancelTicket(ticketSeq){
    return axios.patch(INTERTICKET + `mypage/cancel?ticketSeq=${ticketSeq}`)
}
    
export {
    fetchList,
    fetchDetailList,
    fetchTicketList,
    fecthCancelTicket,
    fetchSearchList
}