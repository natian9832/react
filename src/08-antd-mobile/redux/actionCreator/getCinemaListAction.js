import axios from "axios";

//redux-thunk风格
// export default function getCinemaListAction() {
//     return (dispatch) => {
//         //请求影院数据
//         axios({
//             url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7526168",
//             headers: {
//                 "X-Client-Info": '{"a": "3000", "ch": "1002", "v": "5.2.1", "e": "16797174042002120479866881"}',
//                 "X-Host": "mall.film-ticket.cinema.list"
//             }
//         }).then(res => {
//             // console.log(res.data.data["cinemas"])
//             dispatch({
//                 type: "change-list",
//                 value: res.data.data["cinemas"]
//             })
//         }).catch(err => {
//             console.log(err)
//         })
//     }
// }

// promise风格
export default function getCinemaListAction() {
    return (
        //请求影院数据
        axios({
            url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7526168",
            headers: {
                "X-Client-Info": '{"a": "3000", "ch": "1002", "v": "5.2.1", "e": "16797174042002120479866881"}',
                "X-Host": "mall.film-ticket.cinema.list"
            }
        }).then(res => {
            // console.log(res.data.data["cinemas"])
            return {
                type: "change-list",
                value: res.data.data["cinemas"]
            }
        }).catch(err => {
            console.log(err)
        })
    )
}