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

//전시 에매
function fetchBookTicket(amount, choseDate, dpSeq, userSeq){
    return axios.post(INTERTICKET + `book?amount=${amount}&choseDate=${choseDate}&dpSeq=${dpSeq}&userSeq=${userSeq}`)
}

//유저 예매내역 조회
function fetchTicketList(userSeq){
    return axios.get(INTERTICKET + `mypage?userSeq=${userSeq}`)
}

//예매 변경
function fetchUpdateTicket(ticketSeq, choseDate, amount){
    return axios.patch(INTERTICKET + `mypage/update?ticketSeq=${ticketSeq}&choseDate=${choseDate}&amount=${amount}`)
}

//예매 취소
function fecthCancelTicket(ticketSeq){
    return axios.patch(INTERTICKET + `mypage/cancel?ticketSeq=${ticketSeq}`)
}

//유저 리뷰 조회
function fetchReviewList(userSeq){
    return axios.get(INTERTICKET + `mypage/review?userSeq=${userSeq}`)
}
    
export {
    fetchList,
    fetchDetailList,
    fetchTicketList,
    fecthCancelTicket,
    fetchSearchList,
    fetchBookTicket,
    fetchUpdateTicket,
    fetchReviewList
}