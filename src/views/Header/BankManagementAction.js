import {

    GET_ACCOUNT_NAME_LISTS_FAIL,


} from "./Types";


export const Test = (value) => {
    return (dispatch) => {
        dispatch({
            type: GET_ACCOUNT_NAME_LISTS_FAIL,
            payload: value
        });
    };
}



// export const Approve_Deposit_Slip = (AccessToken, Deposit) => {
//     let url = PE_API_URL + DEPOSIT_SLIP + "/depositslip/approve";
//     let Token = 'Bearer ' + AccessToken
//     let Data = {
//         bankDepositSlipId: Deposit.bankDepositSlipId,
//         reconDate: Deposit.reconDate,
//         reconTime: "",
//         pwd: Deposit.pwd
//     }

//     // //console.log(Data)
//     return (dispatch) => {
//         dispatch({
//             type: SAVE_PROGRESS_INDICATOR_STATUS,
//         })

//         axios({
//             url,
//             method: 'PUT',
//             headers: {
//                 Authorization: Token,
//                 'Content-Type': 'application/json'
//             },
//             data: Data

//         }).then(function (response) {

//             // //console.log("success response in Approve_Deposit_Slip ")
//             // //console.log(response)

//             let data = response.data;
//             dispatch({
//                 type: APPROVE_DEPOSIT_SLIP_SUCCESS,
//                 payload: { data }
//             });
//         }).catch(function (error) {
//             //console.log("---------------------------APPROVE_DEPOSIT_SLIP_FAIL ");
//             //console.log(error)
//             dispatch({
//                 type: APPROVE_DEPOSIT_SLIP_FAIL,
//                 payload: "Approve Deposit Failed"
//             });
//         });
//     }

// }
//#endregion