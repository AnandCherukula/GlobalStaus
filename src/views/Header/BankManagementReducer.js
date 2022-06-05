import {
    GET_ACCOUNT_NAME_LISTS_SUCCESS,
    GET_ACCOUNT_NAME_LISTS_FAIL,


} from "./Types";

var moment = require('moment');

import { REHYDRATE } from 'redux-persist'
import { ReturnCustomerId } from "../../GlobalVars";

let PresentYear = new Date().getFullYear();
let PresentMonth = new Date().getMonth() + 1;
let PresentDate = new Date().getDate();
let fullDate = PresentYear + "-" + PresentMonth + "-" + PresentDate;
let fullDate1 = PresentYear + "/" + PresentMonth + "/" + PresentDate;
//console.log("fullDate1")
//console.log(fullDate1)
const INITIAL_STATE = {

    testing: {
        testing: true
    }

}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case REHYDRATE:

            return action.payload === undefined ? {...state } : {...state, ...action.payload.bankManagement };


        case GET_ACCOUNT_NAME_LISTS_FAIL:
            return {
                ...state,
                testing: {
                    ...state.testing,
                    testing: action.payload
                }
            }

        default: // need this for default case
            return state
    }

    //         case REHYDRATE:

    //             return action.payload === undefined ?
    //                 { ...state }
    //                 :
    //                 { ...state, ...action.payload.bankManagement };

    //         case REDUCER_INITIAL:
    //             return {
    //                 ...INITIAL_STATE
    //             }


    //         case SAVE_PROGRESS_INDICATOR_STATUS:
    //             return {
    //                 ...state,
    //                 ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: true
    //                 }

    //             }

    //         case SAVE_PROGRESS_INDICATOR_STATUS_FALSE:
    //             return {
    //                 ...state,
    //                 ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: false
    //                 }

    //             }


    //         case MONEY_TRANSFER_INITIAL_LOAD:

    //             // //console.log(" ==================================================== In MONEY_TRANSFER_INITIAL_LOAD Reducer +++++++++ ");
    //             return {
    //                 ...state,
    //                 ...INITIAL_STATE
    //             }
    //         case IFSC_SEARCH_MODAL:

    //             return {
    //                 ...state,
    //                 MTcustomer: {
    //                     ...state.MTcustomer,
    //                     searchClicked: action.payload
    //                 }, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     // BankDetails: {
    //                     //     ...state.MTBeneficiary.BankDetails,
    //                     //     AllStates: [],
    //                     //     AllCities: [],
    //                     //     AllBranches: [],
    //                     //     SelectedStateId: '',
    //                     //     SelectedCityId: '',
    //                     //     SelectedBranchId: '',
    //                     //     IFSCInfoObject: {}
    //                     // }
    //                 }

    //             }

    //         case MONEY_TRANSFER_MOBILE_ONCHANGE:
    //             return {
    //                 ...state,
    //                 moneyTransfer: {
    //                     ...state.moneyTransfer, customerMobileNo: action.payload
    //                 }
    //             }

    //         case MONEY_TRANSFER_CUSTOMER_EDIT_ONCHANGE:

    //             return UpdateCustomerEditForm(action, state);


    //         case GET_CUSTOMER_INFO:
    //             return {
    //                 ...state,
    //                 moneyTransfer: {
    //                     ...state.moneyTransfer,
    //                     isValidCustomer: false,
    //                     //benificiaries: action.payload.benificiaries,
    //                     isEditTrue: undefined,
    //                     benificiaries: [],
    //                     customerDetails: {
    //                         ...state.moneyTransfer.customerDetails,
    //                         FullName: '',
    //                         DOB: '',
    //                         gender: '',
    //                         address: '',
    //                         selectedEKYC: '',
    //                         eKYCInfo: '',
    //                     },
    //                     customerDetailsWarning: {
    //                         ...state.moneyTransfer.customerDetailsWarning,
    //                         FullName: '',
    //                         // EmailId: '',
    //                         DOB: '',
    //                         gender: '',
    //                         address: '',
    //                         selectedEKYC: '',
    //                         eKYCInfo: '',
    //                     },
    //                 },
    //                 ApiResponseOnCust_Details: {
    //                     ...state.ApiResponseOnCust_Details,
    //                     enterCustomerDetails: false,
    //                     enterBeniDetails: false,
    //                     getCustomer_Info: '',
    //                 }
    //             }

    //         case GET_CUSTOMER_INFO_SUCCESS:

    //             // Statements To Change DOB Format Of A Customer 
    //             if (action.payload.customer.dateOfBirth != null) {
    //                 const Date = action.payload.customer.dateOfBirth.substring(0, 2);
    //                 const Month = action.payload.customer.dateOfBirth.substring(3, 5);
    //                 const Year = action.payload.customer.dateOfBirth.substring(6, 10);
    //                 const DOB = Year + '-' + Month + '-' + Date;
    //                 action.payload.customer.dateOfBirth = DOB;
    //             }

    //             // Code To Add Params To The Benificiary List Which Helps at Money Transfer Action.
    //             action.payload.customer.beneficiaries !== null ?
    //                 action.payload.customer.beneficiaries.map((beni, i) => {
    //                     beni.ImpsOrNeft = 'IMPS',
    //                         beni.Depositing = '',
    //                         beni.Charges = ''
    //                 }) : null

    //             return {
    //                 ...state,
    //                 moneyTransfer: {
    //                     ...state.moneyTransfer, isValidCustomer: action.payload.isValid,
    //                     //benificiaries: action.payload.benificiaries,
    //                     isEditTrue: action.payload.isEditTrue,

    //                     customerDetails: {
    //                         ...state.moneyTransfer.customerDetails,
    //                         FullName: action.payload.customer.fullName,
    //                         DOB: action.payload.customer.dateOfBirth,
    //                         gender: action.payload.customer.gender,
    //                         address: action.payload.customer.address,
    //                         selectedEKYC: action.payload.customer.ekyc != null ? action.payload.customer.ekyc.item1 : null,
    //                         eKYCInfo: action.payload.customer.ekyc != null ? action.payload.customer.ekyc.item2 : null,
    //                     },

    //                     benificiaries: action.payload.customer.beneficiaries
    //                 },
    //                 ApiResponseOnCust_Details: {
    //                     ...state.ApiResponseOnCust_Details,
    //                     enterCustomerDetails: false,
    //                     enterBeniDetails: true,
    //                     getCustomer_Info: 'success',
    //                 }
    //             }

    //         case GET_CUSTOMER_INFO_FAIL:
    //             return {
    //                 ...state, moneyTransfer: {
    //                     ...state.moneyTransfer,
    //                     customerDetails: {
    //                         ...state.moneyTransfer.customerDetails,
    //                         FullName: '',
    //                         DOB: '',
    //                         gender: '',
    //                         address: '',
    //                         selectedEKYC: '',
    //                         eKYCInfo: '',
    //                     },
    //                     benificiaries: []
    //                 },
    //                 ApiResponseOnCust_Details: {
    //                     ...state.ApiResponseOnCust_Details,
    //                     enterCustomerDetails: true,
    //                     getCustomer_Info: 'fail',
    //                     Error: action.payload
    //                 },
    //             }




    //         case WARNINGS_ON_CUSTOMER_IP_DETAILS:
    //             return warningsoncustomeripdetails(action, state);

    //         case SEND_CUSTOMER_INFORMATIN:
    //             return {
    //                 ...state, ApiResponseOnCust_Details: {
    //                     ...state.ApiResponseOnCust_Details,
    //                     spinnerOnCustomerInfo: true
    //                 }
    //             }

    //         case SEND_CUSTOMER_INFORMATIN_SUCCESS:
    //             return {
    //                 ...state, ApiResponseOnCust_Details: {
    //                     ...state.ApiResponseOnCust_Details,
    //                     spinnerOnCustomerInfo: false,
    //                     enterCustomerDetails: false,
    //                     enterBeniDetails: true,
    //                     FocusBeniFornInput: true,
    //                     message: action.payload.Data.message
    //                 },
    //             }

    //         case SEND_CUSTOMER_INFORMATIN_FAIL:
    //             return {
    //                 ...state, ApiResponseOnCust_Details: {
    //                     ...state.ApiResponseOnCust_Details,
    //                     spinnerOnCustomerInfo: false,
    //                     Error: '',
    //                 }
    //             }



    //         case UPDATE_CUSTOMER_INFORMATIN:
    //             return {
    //                 ...state, ApiResponseOnCust_Details: {
    //                     ...state.ApiResponseOnCust_Details,
    //                     spinnerOnCustomerInfo: true
    //                 }
    //             }

    //         case UPDATE_CUSTOMER_INFORMATIN_SUCCESS:
    //             return {
    //                 ...state,

    //                 ApiResponseOnCust_Details: {
    //                     ...state.ApiResponseOnCust_Details,
    //                     spinnerOnCustomerInfo: false,
    //                     UpdatingCustomer: false,
    //                     enterCustomerDetails: false,
    //                     enterBeniDetails: true,
    //                     message: action.payload.Data.message
    //                 },


    //             }

    //         case UPDATE_CUSTOMER_INFORMATIN_FAIL:
    //             return {
    //                 ...state, ApiResponseOnCust_Details: {
    //                     ...state.ApiResponseOnCust_Details,
    //                     spinnerOnCustomerInfo: false,
    //                     // UpdatingCustomer: false,
    //                 }
    //             }

    //         case ALLOW_USER_TO_ENTER_CUSTOMER_DETAILS: {
    //             return {
    //                 ...state, ApiResponseOnCust_Details: {
    //                     ...state.ApiResponseOnCust_Details,
    //                     enterCustomerDetails: !state.ApiResponseOnCust_Details.enterCustomerDetails,
    //                     UpdatingCustomer: true,
    //                 }
    //             }
    //         }

    //         case RESET_CUSTOMER_DETAILS:
    //             return {
    //                 ...state,
    //                 moneyTransfer: {
    //                     ...state.moneyTransfer,
    //                     customerDetails: {
    //                         ...state.moneyTransfer.customerDetails,
    //                         FullName: '',
    //                         // EmailId: '',
    //                         DOB: '',
    //                         gender: '',
    //                         address: '',
    //                         selectedEKYC: '',
    //                         eKYCInfo: '',
    //                         isCustomerSaveSuccess: false,
    //                         ekyc: {
    //                             ...state.moneyTransfer.customerDetails,
    //                             key: ''

    //                         },
    //                         fullName: '',
    //                     },
    //                     customerMobile: '',
    //                 },

    //                 MTcustomer: {
    //                     ...state.MTcustomer,
    //                     warningForNewCustomer: "",
    //                     CustomerDetails: {
    //                         ...state.MTcustomer.CustomerDetails,
    //                         address: "",
    //                         dateOfBirth: fullDate1,
    //                         ekyc: { key: "", value: "" },
    //                         ekycTypes: [
    //                             { key: 1, value: "PAN" },
    //                             { key: 2, value: "AADHAR" },
    //                             { key: 3, value: "VOTER ID" },
    //                             { key: 4, value: "DRIVING LICENSE" }],
    //                         fullName: "",
    //                         gender: "",
    //                     },
    //                     customerMobile: '',
    //                     WarnsOnCustomerDetails: {
    //                         FullName: "",
    //                         DOB: "",
    //                         customerMobile: "",
    //                         AddCustomerFailed: false,
    //                         statusCode: "",
    //                         KYCReference: "",
    //                         KYCReference: "",
    //                         Gender: "",
    //                         Address: ""
    //                     }
    //                 }
    //             }

    //         case CLEAR_API_RESPONSE_ON_CUST_DETAILS:
    //             return {
    //                 ...state,
    //                 ApiResponseOnCust_Details: {
    //                     ...state.ApiResponseOnCust_Details,
    //                     Error: '',
    //                     message: ''
    //                 },
    //             }
    //         case RESET_DETAILS:
    //             return {
    //                 ...state,
    //                 TransactionLedgerDetails: {
    //                     ...state.TransactionLedgerDetails,
    //                     GetListSuccess: false,
    //                     IsAccountTypeAll: false,
    //                     AccountName: "",
    //                     AccountType: "FSE",
    //                     UserType: "",
    //                     TxnType: "Wallet",
    //                     fromDate: fullDate,
    //                     toDate: fullDate,
    //                     NewAccountLedgerList: [],
    //                     AccountLedgerList: [],
    //                     TransactionLedger: {
    //                         totalClosingBalance: 0,
    //                         totalDepositedAmount: 0,
    //                         totalOpeningBalance: 0,
    //                         totalWithdrawAmount: 0
    //                     },
    //                 },
    //                 AccountingDetails: {
    //                     ...state.AccountingDetails,
    //                     sendDetailsToDbSuccess: false,
    //                     GetReceiptDetailsSuccess: false,
    //                     Date: moment(),
    //                     chequeDate: moment(),
    //                     Amount: "",
    //                     Remarks: "",
    //                     ModeWarning: "",
    //                     FromAccountWarning: "",
    //                     ToAccountWarning: "",
    //                     AmountWarning: "",
    //                     FromAccount: "",
    //                     ToAccount: "",
    //                     Mode: "",
    //                     chequeNumber:""

    //                 }
    //             }


    //         case GET_TRANSACTION_LEDGER_LIST_SUCCESS:
    //             return {
    //                 ...state,
    //                 TransactionLedgerDetails: {
    //                     ...state.TransactionLedgerDetails,
    //                     TransactionLedger: action.payload.data,
    //                     GetListSuccess: action.payload.IsRetailer,
    //                     IsAccountTypeAll: !action.payload.URLChange


    //                 }
    //             }
    //         case GET_TRANSACTION_LEDGER_LIST_FAIL:
    //             return {
    //                 ...state,
    //                 TransactionLedgerDetails: {
    //                     ...state.TransactionLedgerDetails,
    //                     TransactionLedger: {
    //                         ...state.TransactionLedgerDetails.TransactionLedger,
    //                         ledgerDetailsMappers: action.payload.data,


    //                     },
    //                     // GetListSuccess:action.payload.IsRetailer,
    //                     // IsAccountTypeAll:!action.payload.URLChange
    //                 }
    //             }
    //         case GET_ACCOUNT_LEDGER_LIST_SUCCESS:
    //             return {
    //                 ...state,
    //                 TransactionLedgerDetails: {
    //                     ...state.TransactionLedgerDetails,
    //                     AccountLedgerList: action.payload.data,

    //                 }
    //             }
    //         case GET_ACCOUNT_LEDGER_LIST_FAIL:
    //             return {
    //                 ...state,
    //                 TransactionLedgerDetails: {
    //                     ...state.TransactionLedgerDetails,
    //                     AccountLedgerList: action.payload.data,

    //                 }
    //             }
    //         case GET_NEW_ACCOUNT_LEDGER_LIST_SUCCESS:
    //             return {
    //                 ...state,
    //                 TransactionLedgerDetails: {
    //                     ...state.TransactionLedgerDetails,
    //                     NewAccountLedgerList: action.payload.data,

    //                 }
    //             }
    //         case GET_NEW_ACCOUNT_LEDGER_LIST_FAIL:
    //             return {
    //                 ...state,
    //                 TransactionLedgerDetails: {
    //                     ...state.TransactionLedgerDetails,
    //                     NewAccountLedgerList: action.payload.data,

    //                 }
    //             }
    //         case GET_ACCOUNTING_LEDGER_NAMES_SUCCESS:
    //             return {
    //                 ...state,
    //                 TransactionLedgerDetails: {
    //                     ...state.TransactionLedgerDetails,
    //                     AccountLedgerNames: action.payload.data,

    //                 }
    //             }
    //         case GET_ACCOUNTING_LEDGER_NAMES_FAIL:
    //             return {
    //                 ...state,
    //                 TransactionLedgerDetails: {
    //                     ...state.TransactionLedgerDetails,
    //                     AccountLedgerNames: action.payload.data,

    //                 }
    //             }
    //         case GET_TRANSACTION_LEDGER_DETAILED_LIST_SUCCESS:
    //             return {
    //                 ...state,
    //                 TransactionLedgerDetails: {
    //                     ...state.TransactionLedgerDetails,
    //                     TransactionLedger: action.payload.data,
    //                     GetListSuccess: action.payload.IsRetailer,
    //                     IsAccountTypeAll: !action.payload.URLChange


    //                 }
    //             }
    //         case GET_TRANSACTION_LEDGER_DETAILED_LIST_FAIL:
    //             return {
    //                 ...state,
    //                 TransactionLedgerDetails: {
    //                     ...state.TransactionLedgerDetails,
    //                     TransactionLedger: {
    //                         ...state.TransactionLedgerDetails.TransactionLedger,
    //                         ledgerDetailsMappers: action.payload.data
    //                     }
    //                     // GetListSuccess:action.payload.IsRetailer,
    //                     // IsAccountTypeAll:!action.payload.URLChange
    //                 }
    //             }
    //         case GET_ACCOUNT_NAME_LISTS_SUCCESS:
    //             return {
    //                 ...state,
    //                 TransactionLedgerDetails: {
    //                     ...state.TransactionLedgerDetails,
    //                     AccountNamesList: action.payload.data
    //                 }
    //             }
    //         case GET_ACCOUNT_NAME_LISTS_FAIL:
    //             return {
    //                 ...state,
    //                 TransactionLedgerDetails: {
    //                     ...state.TransactionLedgerDetails,
    //                     AccountNamesList: action.payload.data
    //                 }
    //             }
    //         case GET_RETAILER_LIST_OF_FSE_SUCCESS:
    //             return {
    //                 ...state,
    //                 TransactionLedgerDetails: {
    //                     ...state.TransactionLedgerDetails,
    //                     RetailerListOfFSE: action.payload.data
    //                 }
    //             }
    //         case GET_RETAILER_LIST_OF_FSE_FAIL:
    //             return {
    //                 ...state,
    //                 TransactionLedgerDetails: {
    //                     ...state.TransactionLedgerDetails,
    //                     RetailerListOfFSE: action.payload.data
    //                 }
    //             }
    //         case CUSTOMER_SAVE_SUCCESS:
    //             return {
    //                 ...state,
    //                 moneyTransfer: {
    //                     ...state.moneyTransfer, isValidCustomer: true,
    //                     isEditTrue: false,
    //                     customerDetails: {
    //                         ...state.moneyTransfer.customerDetails, isCustomerSaveSuccess: true
    //                     },
    //                     validCustomerName: action.payload.FullName
    //                 }
    //             }

    //         case SAVE_BENE_INFO:
    //             return {
    //                 ...state, ApiResponseOnBene: {
    //                     ...state.ApiResponseOnBene,
    //                     spinnerOnBeneInfo: true,
    //                     AddBeneSuccess: false,
    //                 },
    //             }



    //         case SAVE_BENE_INFO_SUCCESS:

    //             // //console.log(" SAVE SAVE_BENE_INFO_SUCCESS Reducer :  ");
    //             // //console.log(action.payload);
    //             return {
    //                 ...state, ApiResponseOnBene: {
    //                     ...state.ApiResponseOnBene,
    //                     AddBeneFail: false,
    //                     spinnerOnBeneInfo: false,
    //                     message: action.payload.ResponseData.message
    //                 },
    //                 moneyTransfer: {
    //                     ...state.moneyTransfer,
    //                     benificiaries: [action.payload.BeneToAdd, ...state.moneyTransfer.benificiaries]
    //                 },
    //                 benificiaryDetails: {
    //                     ...state.benificiaryDetails,
    //                     beneficiaryEdit: {
    //                         ...state.benificiaryDetails.beneficiaryEdit,
    //                         acctHolderName: '',
    //                         acctNo: '',
    //                         confAccNo: '',
    //                         acctMobileNo: '',
    //                         // bankNames: [],
    //                         // bankStates: [],
    //                         // bankBranches: [],
    //                         selectedBank: '',
    //                         selectedBankState: '',
    //                         selectedBankBranch: '',
    //                         bankIFSC: '',
    //                         bankAddress: '',
    //                         BeniAddress: ''
    //                     }
    //                 }
    //             }
    //         case SAVE_BENE_INFO_FAIL:
    //             return {
    //                 ...state, ApiResponseOnBene: {
    //                     ...state.ApiResponseOnBene,
    //                     AddBeneSuccess: false,
    //                     AddBeneFail: true,
    //                     spinnerOnBeneInfo: false,
    //                     ErrorMsg: action.payload
    //                 },
    //             }


    //         case REMOVE_BENEFICIARY:
    //             return {
    //                 ...state, ApiResponseOnBene: {
    //                     ...state.ApiResponseOnBene,
    //                     spinnerOnBeneInfo: true
    //                 }

    //             }

    //         case REMOVE_BENEFICIARY_SUCCESS:
    //             return {
    //                 ...state,
    //                 BeneDetailsToRemove: '',
    //                 BeneIndexToRemove: '',
    //                 OpenRemoveBeniModal: false,
    //                 ApiResponseOnBene: {
    //                     ...state.ApiResponseOnBene,
    //                     spinnerOnBeneInfo: false
    //                 },
    //                 moneyTransfer: {
    //                     ...state.moneyTransfer,
    //                     benificiaries: state.moneyTransfer.benificiaries.filter((item, indx) => {
    //                         return indx !== parseInt(action.payload.index)
    //                     })

    //                 }
    //             }
    //         case REMOVE_BENEFICIARY_FAIL:
    //             return {
    //                 ...state, ApiResponseOnBene: {
    //                     ...state.ApiResponseOnBene,
    //                     spinnerOnBeneInfo: false,
    //                     ErrorMsg: action.payload,
    //                     removeBeniFail: true
    //                 }
    //             }
    //         case SEND_MONEY_TRANSFER_DETAILS:
    //             return {
    //                 ...state, moneyTransfer: {
    //                     ...state.moneyTransfer,
    //                     processTransfer: {
    //                         ...state.moneyTransfer.processTransfer,
    //                         SpinnerOnTransferMoney: true,
    //                         // beneficiary: '',
    //                         ErrorOnMoneyTransfer: ''
    //                     }
    //                 },
    //             }
    //         case SEND_MONEY_TRANSFER_DETAILS_SUCCESS:

    //             // //console.log(" In  SEND_MONEY_TRANSFER_DETAILS_SUCCESS REDUCEr ");
    //             // //console.log(action.payload);

    //             // //console.log(" BEBE LIST : ");
    //             // //console.log(...state.moneyTransfer.benificiaries);

    //             return {
    //                 ...state, moneyTransfer: {
    //                     ...state.moneyTransfer,
    //                     ...state.moneyTransfer.benificiaries.map((benificiary, i) =>
    //                         benificiary.mobileNo == action.payload.MoneyTransferDetails.BeneficiaryMobileNo ?
    //                             benificiary.Depositing = '' : benificiary
    //                     ),
    //                     MoneyTransferSuccess: true,
    //                     processTransfer: {
    //                         ...state.moneyTransfer.processTransfer,
    //                         SpinnerOnTransferMoney: false,
    //                         // beneficiary: '',
    //                     },
    //                     displayTransferOrScheduleModal: false,
    //                 },
    //                 MoneyTrasferSuccessResponse: {
    //                     ...state.MoneyTrasferSuccessResponse,
    //                     transactionCode: action.payload.ResponseData.transactionCode,
    //                     Status: action.payload.ResponseData.status,
    //                     message: action.payload.ResponseData.message,
    //                 },
    //                 SlabRateOnDepositAmount: '',
    //                 //     : Beni.acccountNo,
    //                 // 
    //             }
    //         case SEND_MONEY_TRANSFER_DETAILS_FAIL:
    //             return {
    //                 ...state, moneyTransfer: {
    //                     ...state.moneyTransfer,
    //                     // displayTransferOrScheduleModal: false,
    //                     // TrasferOrScheduleOption: '',
    //                     processTransfer: {
    //                         ...state.moneyTransfer.processTransfer,
    //                         SpinnerOnTransferMoney: false,
    //                         // beneficiary: '',
    //                         ErrorOnMoneyTransfer: action.payload
    //                     }
    //                 },
    //             }

    //         case PROCESS_MONEY_TRANSFER:
    //             return {
    //                 ...state, moneyTransfer: {
    //                     ...state.moneyTransfer,
    //                     processTransfer: {
    //                         ...state.moneyTransfer.processTransfer,
    //                         beneficiary: action.payload.beneficiary,
    //                     },
    //                     selectedBeneficiaryIndex: action.payload.indexValue,
    //                 }
    //             }

    //         case CHANGE_BENI_VALUES_ON_TRANSFER:

    //             return SaveBeniValues_On_Transfer_or_Schedule(action, state);

    //         case TEMP_SAVE_BENEFICIARY:
    //             // //console.log(" IN Reducer Bene Details");
    //             // //console.log(action.payload);
    //             return {
    //                 ...state, moneyTransfer: {
    //                     ...state.moneyTransfer,
    //                     benificiaries: action.payload,
    //                     //recentlyAddedBeneficiary : action.payload.accountHolder
    //                 },

    //                 benificiaryDetails: {
    //                     ...state.benificiaryDetails,
    //                     beneficiaryEdit: {
    //                         ...state.benificiaryDetails.beneficiaryEdit,
    //                         acctHolderName: '',
    //                         acctNo: '',
    //                         confAccNo: '',
    //                         acctMobileNo: '',
    //                         selectedBank: '',
    //                         selectedBankState: '',
    //                         selectedBankBranch: '',
    //                         bankIFSC: '',
    //                         bankAddress: '',
    //                         transferAmount: '',
    //                         BeniAddress: ''
    //                     }
    //                 }

    //             }


    //         // #region Beneficiary

    //         case SET_BANK_DETAILS_SUCCESS:
    //             return {
    //                 ...state, benificiaryDetails: {
    //                     ...state.benificiaryDetails,
    //                     beneficiaryEdit: {
    //                         ...state.benificiaryDetails.beneficiaryEdit,
    //                         bankNames: action.payload.bankNames,
    //                         bankStates: action.payload.bankStates,
    //                         bankBranches: action.payload.bankBranches,
    //                     }
    //                 }

    //             }

    //         case ON_BENEFICIARY_EDIT:

    //             return OnBeneficiaryEdit(action, state);

    //         case OPEN_MONEY_TRANSFER_OR_SCHEDULE_MODAL:
    //             return {
    //                 ...state, moneyTransfer: {
    //                     ...state.moneyTransfer,
    //                     displayTransferOrScheduleModal: true,
    //                     TrasferOrScheduleOption: action.payload.ModalFor,
    //                     processTransfer: {
    //                         ...state.moneyTransfer.processTransfer,
    //                         beneficiary: action.payload.beni
    //                     }
    //                 }
    //             }

    //         case OPEN_SCHEDULE_MONEY_TRANSFER_MODAL:
    //             return {
    //                 ...state, moneyTransfer: {
    //                     ...state.moneyTransfer,
    //                     displayScheduleMoneyTransferModal: true,
    //                 }
    //             }

    //         case CACLE_MODALS_IN_DISPLAY_BENI_LIST_COMP:
    //             return {
    //                 ...state, moneyTransfer: {
    //                     ...state.moneyTransfer,
    //                     displayTransferOrScheduleModal: false,
    //                     displayScheduleMoneyTransferModal: false,
    //                     TrasferOrScheduleOption: '',
    //                     processTransfer: {
    //                         ...state.moneyTransfer.processTransfer,
    //                         ErrorOnMoneyTransfer: ''
    //                     }
    //                 }
    //             }

    //         case CHECK_VALIDATE_BENI_BEFORE_ADD:
    //             return {
    //                 ...state, moneyTransfer: {
    //                     ...state.moneyTransfer,
    //                     CheckValidateBeniBeforeAdd: !state.moneyTransfer.CheckValidateBeniBeforeAdd
    //                 }
    //             }
    //         case OPEN_REMOVE_BENE_MODAL:
    //             return {
    //                 ...state,
    //                 BeneDetailsToRemove: action.payload.benificiary,
    //                 BeneIndexToRemove: action.payload.i,
    //                 OpenRemoveBeniModal: true
    //             }

    //         case CLOSE_REMOVE_BENE_MODAL:
    //             return {
    //                 ...state,
    //                 BeneDetailsToRemove: '',
    //                 BeneIndexToRemove: '',
    //                 OpenRemoveBeniModal: false
    //             }


    //         case CLEAR_API_RESPONSE_IN_MONEY_TRANSFER_COMP:
    //             return {
    //                 ...state, ApiResponseOnBene: {
    //                     ...state.ApiResponseOnBene,
    //                     AddBeneSuccess: false,
    //                     ErrorOnGetSlabRate: false,
    //                     ErrorMsg: '',
    //                     removeBeniFail: false,
    //                     message: ''
    //                 }
    //             }

    //         case GET_SLAB_RATE_FOR_AMOUNT_AND_OPEN_MONEY_TRANSFER_MODAL:

    //             return {
    //                 ...state, SlabRateOnDepositAmount: '',
    //                 moneyTransfer: {
    //                     ...state.moneyTransfer,
    //                     displayTransferOrScheduleModal: false,

    //                 },

    //                 ApiResponseOnBene: {
    //                     ...state.ApiResponseOnBene,
    //                     spinnerOnBeneInfo: true,
    //                 },
    //             }
    //         case GET_SLAB_RATE_FOR_AMOUNT_AND_OPEN_MONEY_TRANSFER_MODAL_SUCCESS:

    //             return {
    //                 ...state,
    //                 SlabRateOnDepositAmount: action.payload.rate,
    //                 moneyTransfer: {
    //                     ...state.moneyTransfer,
    //                     displayTransferOrScheduleModal: true
    //                 },
    //                 ApiResponseOnBene: {
    //                     ...state.ApiResponseOnBene,
    //                     spinnerOnBeneInfo: false,
    //                 },
    //             }

    //         case GET_SLAB_RATE_FOR_AMOUNT_AND_OPEN_MONEY_TRANSFER_MODAL_FAIL:

    //             return {
    //                 ...state,
    //                 ApiResponseOnBene: {
    //                     ...state.ApiResponseOnBene,
    //                     spinnerOnBeneInfo: false,
    //                     ErrorMsg: action.payload,
    //                     ErrorOnGetSlabRate: true,
    //                 },
    //             }

    //         case CLEAR_API_SUCCESS_IN_MONEY_TRASFER_COMP:

    //             return {
    //                 ...state,
    //                 moneyTransfer: {
    //                     ...state.moneyTransfer,
    //                     ...state.moneyTransfer,
    //                     MoneyTransferSuccess: false,

    //                     processTransfer: {
    //                         ...state.moneyTransfer.processTransfer,
    //                         beneficiary: '',
    //                     },
    //                 }
    //             }

    //         case CLEAR_MONEY_TRASFER_SUCCESS_RESPONSE:

    //             return {
    //                 ...state,
    //                 moneyTransfer: {
    //                     ...state.moneyTransfer,
    //                     ...state.moneyTransfer,
    //                     MoneyTransferSuccess: false,

    //                     processTransfer: {
    //                         ...state.moneyTransfer.processTransfer,
    //                         beneficiary: '',
    //                     },

    //                 },
    //                 MoneyTrasferSuccessResponse: {
    //                     ...state.MoneyTrasferSuccessResponse,
    //                     transactionCode: '',
    //                     Status: '',
    //                     message: '',
    //                 },

    //             }



    //         case GET_ALL_MNY_TRANSFER_APIS_SUCCESS:

    //             return {
    //                 ...state, APIs: {
    //                     ...state.APIs,
    //                     apisList: action.payload
    //                 }
    //             }

    //         case GET_ALL_API_SUCCESS:
    //             return {
    //                 ...state,
    //                 APIs: {
    //                     ...state.APIs,
    //                     apisList: action.payload,
    //                     // AddOrEditModal:false,
    //                 }
    //             }

    //         case SAVE_API_DETAILS:
    //             return SaveAddOrEditApiData(action, state);

    //         case SAVE_API_DETAILS_WARNINGS:
    //             return SaveAddOrEditApiDataWarnings(action, state);

    //         case SAVE_EDIT_API:
    //             return {
    //                 ...state,
    //                 APIs: {
    //                     ...state.APIs,
    //                     AddOrEditAPI: action.payload.item,
    //                     Warnings: {},
    //                     AddOrEditModal: true,
    //                     EditOrAddApi: 'Edit',
    //                 }
    //             }

    //         case CLOSE_ADD_OR_EDIT_API_MODAL:
    //             return {
    //                 ...state,
    //                 APIs: {
    //                     ...state.APIs,
    //                     AddOrEditModal: false,
    //                     AddOrEditAPI: {},
    //                     Warnings: {},
    //                     apiResults: {
    //                         ...state.APIs.apiResults,
    //                         error: '',
    //                         EditOrAddApiFail: false
    //                     }
    //                 }
    //             }
    //         case OPEN_ADD_OR_EDIT_API_MODAL:
    //             return {
    //                 ...state,
    //                 APIs: {
    //                     ...state.APIs,
    //                     AddOrEditModal: true,
    //                     AddOrEditAPI: {},
    //                     Warnings: {},
    //                     EditOrAddApi: 'Add',
    //                 }
    //             }

    //         case EDIT_API_SUCCESS:
    //             return {
    //                 ...state,
    //                 APIs: {
    //                     ...state.APIs,
    //                     apisList: state.APIs.apisList.map(
    //                         (item) =>
    //                             item.apiId === action.payload.ApiData.apiId ?
    //                                 action.payload.ApiData : item
    //                     ),
    //                     AddOrEditModal: false,
    //                 }
    //             }
    //         case EDIT_API_FAIL:

    //             return {
    //                 ...state, APIs: {
    //                     ...state.APIs,
    //                     apiResults: {
    //                         ...state.APIs.apiResults,
    //                         error: action.payload,
    //                         EditOrAddApiFail: true
    //                     }
    //                 }

    //             }

    //         case ADD_NEW_API_SUCCESS:
    //             return {
    //                 ...state,
    //                 APIs: {
    //                     ...state.APIs,
    //                     apisList: [...state.APIs.apisList, action.payload.Data],
    //                     AddOrEditModal: false,
    //                 }
    //             }


    //         case OPEN_ACT_OR_INACT_API_MODAL:
    //             return {
    //                 ...state, APIs: {
    //                     ...state.APIs,
    //                     AddOrEditAPI: action.payload.ApiData,
    //                     ActivateOrInActivateModal: true,
    //                     ActivateOrInActivateApi: action.payload.status,
    //                 }
    //             }
    //         case CLOSE_ACT_OR_INACT_API_MODAL:
    //             return {
    //                 ...state, APIs: {
    //                     ...state.APIs,
    //                     AddOrEditAPI: {},
    //                     ActivateOrInActivateModal: false,
    //                     ActivateOrInActivateApi: '',
    //                 }
    //             }

    //         case ACTIVATE_OR_INACTIVATE_API_SUCCESS:
    //             return {
    //                 ...state, APIs: {
    //                     ...state.APIs,
    //                     AddOrEditAPI: {},
    //                     ActivateOrInActivateModal: false,
    //                     ActivateOrInActivateApi: '',
    //                     ...state.APIs.apisList.map((api, i) =>
    //                         api.apiId === action.payload.ApiID ? api.active = action.payload.status : api
    //                     ),
    //                     apiResults: {
    //                         ...state.APIs.apiResults,
    //                         message: action.payload.message
    //                     }

    //                 }
    //             }

    //         //#endregion


    //         //#region  MoneyTrasfer Final

    //         case GET_RECENT_TRASACTIONS:

    //             return {
    //                 ...state,
    //                 ...INITIAL_STATE
    //             }

    //         case GET_MT_PAGE_INITIAL_DATA_SUCCESS:

    //             return {
    //                 ...state, MTMain: {
    //                     ...state.MTMain,
    //                     banks: action.payload.banks,
    //                     ekycTypes: action.payload.Ekyc
    //                 },

    //             }

    //         case SAVE_CUSTOMER_MOBILE_NUMBER:

    //             return {
    //                 ...state,
    //                 MTcustomer: {
    //                     ...state.MTcustomer,
    //                     customerMobile: action.payload.value,
    //                     warningForNewCustomer: "",
    //                     customerMobileNoWarning: '',
    //                     WarnsOnCustomerDetails: {
    //                         ...state.MTcustomer.WarnsOnCustomerDetails,
    //                         customerMobile: '',
    //                         FullName: "",
    //                         DOB: "",
    //                         statusCode: ""
    //                     }
    //                 }
    //             }

    //         case WARNING_ON_SAVE_CUSTOMER_MOBILE_NO:
    //             return {
    //                 ...state,
    //                 MTcustomer: {
    //                     ...state.MTcustomer,
    //                     customerMobileNoWarning: action.payload,
    //                 }
    //             }

    //         case GET_CUSTOMER_INFORMATION_SUCCESS:
    //             // //console.log(" GET CUSTOMER INFO SUCCESS REDUCER CASEE:");
    //             // //console.log(action.payload);

    //             return {
    //                 ...state,
    //                 MTcustomer: {
    //                     ...state.MTcustomer,
    //                     // displayRegistFormInMThome: true,
    //                     // ExistingCustomer: action.payload,
    //                     ExistingCustomer: {
    //                         ...state.MTcustomer.ExistingCustomer,
    //                         address: action.payload.address,
    //                         beneficiaries: action.payload.beneficiaries,
    //                         dateOfBirth: action.payload.dateOfBirth,
    //                         DOB: action.payload.dateOfBirth,
    //                         ekyc: {
    //                             ...state.MTcustomer.ekyc,
    //                             key: action.payload.ekyc.key,
    //                             value: action.payload.ekyc.value
    //                         },
    //                         fullName: action.payload.fullName,
    //                         gender: action.payload.gender,
    //                         id: action.payload.id,
    //                         mobileNo: action.payload.mobileNo,
    //                         dailyTxnLimit:action.payload.dailyTxnLimit,
    //                         dayTxnAmount:action.payload.dayTxnAmount,
    //                         monthlyTxnLimit:action.payload.monthlyTxnLimit,
    //                         monthlyTxnAmount:action.payload.monthlyTxnAmount

    //                     },
    //                     // customerMobile: action.payload,
    //                     NavigatePages: {
    //                         ...state.MTcustomer.NavigatePages,
    //                         isExistingCustomer: true,
    //                         DisplayAddingBene: false
    //                     },
    //                 }, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     isGetBeneList:false,
    //                     BeneList: action.payload.beneficiaries
    //                 },
    //                 ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: false
    //                 }
    //             }

    //         case CUSTOMER_NOT_EXIST:
    //             if (action.payload === 'NewCustomer') {
    //                 return {
    //                     ...state,
    //                     MTcustomer: {
    //                         ...state.MTcustomer,
    //                         displayRegistFormInMThome: true,
    //                         warningForNewCustomer: action.payload,
    //                         NavigatePages: {
    //                             ...state.MTcustomer.NavigatePages,
    //                             isExistingCustomer: false,
    //                         },

    //                     },
    //                     ProgressIndicator: {
    //                         ...state.ProgressIndicator,
    //                         InProgress: false
    //                     }
    //                 }
    //             } else {
    //                 return {
    //                     ...state,
    //                     MTcustomer: {
    //                         ...state.MTcustomer,
    //                     },
    //                     ProgressIndicator: {
    //                         ...state.ProgressIndicator,
    //                         InProgress: false
    //                     }
    //                 }
    //             }

    //         case EDIT_CUSTOMER_INFORMATION_CLICKED:
    //             return {
    //                 ...state, MTcustomer: {
    //                     ...state.MTcustomer,

    //                     // CustomerDetails: state.MTcustomer.ExistingCustomer,
    //                     CustomerDetails: action.payload.ExistingCustomer,
    //                     // ExistingCustomer: action.payload,
    //                     // customerMobile: action.payload,
    //                     NavigatePages: {
    //                         ...state.MTcustomer.NavigatePages,
    //                         editingCustomerInfo: true
    //                     },
    //                 },

    //             }

    //         case BACK_TO_DISPLAY_CUSTOMER_INFO:

    //             return {
    //                 ...state, MTcustomer: {
    //                     ...state.MTcustomer,
    //                     CustomerDetails: {},
    //                     // ExistingCustomer: action.payload,
    //                     // customerMobile: action.payload,
    //                     NavigatePages: {
    //                         ...state.MTcustomer.NavigatePages,
    //                         editingCustomerInfo: false
    //                     },
    //                 },
    //             }

    //         case GET_CUSTOMER_INFORMATION_FAIL:

    //             return {
    //                 ...state
    //             }

    //         case GET_RECENT_TRASACTIONS_SUCCESS:

    //             action.payload.map((item, i) =>
    //                 item.date = item.date.substr(0, item.date.indexOf("."))
    //             )

    //             // //console.log(" After remove .  ");
    //             // //console.log(action.payload);



    //             return {
    //                 ...state,
    //                 MTcustomer: {
    //                     ...state.MTcustomer,
    //                     recentTrasactions: action.payload

    //                 }
    //             }

    //         case GET_CUSTOMER_TEMPLATE_SUCCESS:
    //             return {
    //                 ...state,
    //                 MTcustomer: {
    //                     ...state.MTcustomer,
    //                     CustomerDetails: {
    //                         ...state.MTcustomer.CustomerDetails,
    //                         ekyc: {
    //                             ...state.MTcustomer.CustomerDetails.ekyc,
    //                             key: action.payload.ekyc.key,
    //                             value: action.payload.ekyc.value == null ? "" : action.payload.ekyc.value
    //                         },
    //                         ekycTypes: action.payload.ekycTypes
    //                     }
    //                 }
    //             }

    //         case SAVE_CUSTOMER_IP_DETAILS:
    //             return saveCustomerIPDetails(action, state);

    //         case WARNINGS_ON_SAVE_CUSTOMER_IP_DETAILS:
    //             return warningsoncustomeripdetails(action, state);


    //         case REGISTER_CUSTOMER_INFO_SUCCESS:

    //             return {
    //                 ...state, MTcustomer: {
    //                     ...state.MTcustomer,
    //                     WarnsOnCustomerDetails: {
    //                         ...state.MTcustomer.WarnsOnCustomerDetails,
    //                         AddCustomerFailed: false
    //                     },
    //                     customerId: action.payload.id,
    //                     customerMobile: action.payload.mobileNo,
    //                     // verifyingCustomerOTP: true,

    //                     displayRegistFormInMThome: false,
    //                     NavigatePages: {
    //                         ...state.MTcustomer.NavigatePages,
    //                         displayVerifiedSuccess: true,
    //                         isExistingCustomer: false,
    //                     },
    //                     CustomerDetails:{
    //                         ...state.MTcustomer.CustomerDetails,
    //                         dailyTxnLimit:action.payload.dailyTxnLimit,
    //                         dayTxnAmount:action.payload.dayTxnAmount,
    //                         monthlyTxnLimit:action.payload.monthlyTxnLimit,
    //                         monthlyTxnAmount:action.payload.monthlyTxnAmount
    //                     },
    //                     ExistingCustomer:{
    //                         ...state.MTcustomer.ExistingCustomer,
    //                         dailyTxnLimit:action.payload.dailyTxnLimit,
    //                         dayTxnAmount:action.payload.dayTxnAmount,
    //                         monthlyTxnLimit:action.payload.monthlyTxnLimit,
    //                         monthlyTxnAmount:action.payload.monthlyTxnAmount
    //                     }
    //                 },
    //                 ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: false
    //                 }
    //             }
    //         case REGISTER_CUSTOMER_INFO_FAIL:

    //             return {
    //                 // ...state,
    //                 ...state,
    //                 MTcustomer: {
    //                     ...state.MTcustomer,
    //                     WarnsOnCustomerDetails: {
    //                         ...state.MTcustomer.WarnsOnCustomerDetails,
    //                         statusCode: action.payload.status == 409 ? action.payload.data : "",
    //                         AddCustomerFailed: true
    //                     }
    //                 },
    //                 ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: false
    //                 }
    //             }

    //         case SAVE_CUSTOMER_VERIFY_OTP:
    //             return {
    //                 ...state, MTcustomer: {
    //                     ...state.MTcustomer,
    //                     SaveCustomerOTP: action.payload,
    //                 }
    //             }
    //         case GET_BENEFICIARY_TEMPLATE_FOR_ADMIN_BANKS_SUCCESS:
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BeneDetails: action.payload,
    //                 }
    //             }

    //         case GET_BENEFICIARY_TEMPLATE_SUCCESS:

    //             // if (action.payload.CustomerDetails === undefined || action.payload.CustomerDetails === null) {
    //             //     return {
    //             //         ...state, MTcustomer: {
    //             //             ...state.MTcustomer,
    //             //             // customerMobile: action.payload,
    //             //             NavigatePages: {
    //             //                 ...state.MTcustomer.NavigatePages,
    //             //                 DisplayAddingBene: true
    //             //             },
    //             //         }, MTBeneficiary: {
    //             //             ...state.MTBeneficiary,
    //             //             BeneDetails: action.payload.Template,
    //             //         }
    //             //     }
    //             // } else {
    //             return {
    //                 ...state, MTcustomer: {
    //                     ...state.MTcustomer,
    //                     ExistingCustomer: action.payload.CustomerDetails !== undefined && action.payload.CustomerDetails !== null ?
    //                         action.payload.CustomerDetails : state.MTcustomer.ExistingCustomer,
    //                     // ExistingCustomer:{
    //                     //     ...state.MTcustomer.ExistingCustomer,
    //                     //     ekyc: {
    //                     //         ...state.MTcustomer.ExistingCustomer.ekyc,
    //                     //         key: action.payload.CustomerDetails.ekyc.key,
    //                     //         value: action.payload.CustomerDetails.ekyc.value,
    //                     //     },
    //                     // },
    //                     // customerMobile: action.payload,
    //                     NavigatePages: {
    //                         ...state.MTcustomer.NavigatePages,
    //                         isExistingCustomer: action.payload.CustomerDetails !== undefined && action.payload.CustomerDetails !== null ?
    //                             true : state.MTcustomer.NavigatePages.isExistingCustomer,
    //                         DisplayAddingBene: true,
    //                         displayVerifiedSuccess:false,
    //                     },
    //                 }, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BeneDetails: action.payload.Template,
    //                 }
    //             }
    //         // }


    //         // return {
    //         //     ...state, MTBeneficiary: {
    //         //         ...state.MTBeneficiary,
    //         //         BeneDetails: action.payload,
    //         //     }
    //         // }

    //         case SEARCH_BENE_SUCCESS:
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BeneList: action.payload
    //                 },
    //             }
    //         case SEARCH_BENE_FAIL:
    //             return {
    //                 ...state
    //             }

    //         case OTP_VERIFICATION_ON_ADD_BENE_SUCCESS:
    //             return {
    //                 ...state, MTcustomer: {
    //                     ...state.MTcustomer,
    //                     NavigatePages: {
    //                         ...state.MTcustomer.NavigatePages,

    //                         // OtpVerifyOnAddBene: !action.payload.otpVerified,
    //                         OtpVerifyOnAddBene: false,

    //                     },

    //                 }, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     isResendOTP:false,

    //                     ApiResultOnBene: {
    //                         ...state.MTBeneficiary.ApiResultOnBene,
    //                         beneOtpVerifyFail: true,
    //                         ErrorMsg: '',
    //                         OtpMismatch: !action.payload.otpVerified,
    //                         OtpmaxAttemptsReached: action.payload.maxAttemptsReached
    //                     },
    //                 },
    //                 ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: false
    //                 }
    //             }

    //         case OTP_VERIFICATION_ON_ADD_BENE_FAIL:
    //             return {
    //                 ...state, MTcustomer: {
    //                     ...state.MTcustomer,
    //                     ApiResult: {
    //                         ...state.MTcustomer.ApiResult,
    //                         beneOtpVerifyFail: false,
    //                         // ErrorMessage: action.payload.data.message,
    //                     }
    //                 },
    //                 ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: false
    //                 }
    //             }
    //         case BENE_VERIFICATION_ON_RESEND_OTP_SUCCESS:
    //                 return {
    //                     ...state,
    //                     MTcustomer:{
    //                         ...state.MTcustomer,
    //                         NavigatePages:{
    //                             ...state.MTcustomer.NavigatePages,
    //                             OtpVerifyOnAddBene:false
    //                         }
    //                     },
    //                     MTBeneficiary:{
    //                         ...state.MTBeneficiary,
    //                         isResendOTP:false,
    //                         isGetBeneList:true
    //                     },
    //                     ProgressIndicator: {
    //                         ...state.ProgressIndicator,
    //                         InProgress: false
    //                     }
    //                 }
    //         case BENE_VERIFICATION_ON_RESEND_OTP_FAIL:
    //                     return {
    //                         ...state,
    //                         ProgressIndicator: {
    //                             ...state.ProgressIndicator,
    //                             InProgress: false
    //                         }
    //                     }
    //         case CANCLE_ON_BENE_OTP_VERIFICATION:
    //             return {
    //                 ...state,
    //                 MTBeneficiary:{
    //                     ...state.MTBeneficiary,
    //                     isResendOTP:false
    //                 },
    //                  MTcustomer: {
    //                     ...state.MTcustomer,
    //                     NavigatePages: {
    //                         ...state.MTcustomer.NavigatePages,
    //                         OtpVerifyOnAddBene: false,
    //                     },
    //                 }
    //             }




    //         case CONTINUE_TO_ADD_BENEFICIARY:

    //             if (action.payload === undefined || action.payload === null) {
    //                 return {
    //                     ...state, MTcustomer: {
    //                         ...state.MTcustomer,
    //                         // customerMobile: action.payload,
    //                         NavigatePages: {
    //                             ...state.MTcustomer.NavigatePages,
    //                             DisplayAddingBene: true
    //                         },
    //                     }
    //                 }
    //             } else {
    //                 return {
    //                     ...state, MTcustomer: {
    //                         ...state.MTcustomer,
    //                         ExistingCustomer: action.payload,
    //                         // customerMobile: action.payload,
    //                         NavigatePages: {
    //                             ...state.MTcustomer.NavigatePages,
    //                             isExistingCustomer: true,
    //                             DisplayAddingBene: true
    //                         },
    //                     }
    //                 }
    //             }

    //         case UPDATE_CUSTOMER_INFO_SUCCESS:

    //             let Customer = action.payload;
    //             let DobDate = Customer.dateOfBirth.substring(0, 2);
    //             let DobMonth = Customer.dateOfBirth.substring(3, 5);
    //             let DobYear = Customer.dateOfBirth.substring(6, 10);

    //             Customer.dateOfBirth = DobYear + '-' + DobMonth + '-' + DobDate;

    //             return {
    //                 ...state, MTcustomer: {
    //                     ...state.MTcustomer,
    //                     CustomerDetails: {},
    //                     ExistingCustomer: action.payload,
    //                     // customerMobile: action.payload,
    //                     NavigatePages: {
    //                         ...state.MTcustomer.NavigatePages,
    //                         editingCustomerInfo: false
    //                     },
    //                 },
    //             }

    //         case SAVE_BENEFICIARY_INFO:
    //             return SaveBeneInformation(action, state);

    //         case SAVE_TRASNSACTION_LEDGER_DETAILS:
    //             return SaveTransactionLedgerDetails(action, state);


    //         case GET_ALL_BANK_TRANSACTION_HISTORY_SUCCESS:
    //             return {
    //                 ...state, TransactionsHistory: {
    //                     ...state.TransactionsHistory,
    //                     BanksTransactionHistroryList: action.payload

    //                 }
    //             }

    //         case GET_ALL_API_TRANSACTION_HISTORY_SUCCESS:
    //             return {
    //                 ...state, TransactionsHistory: {
    //                     ...state.TransactionsHistory,
    //                     ApiTransactionHistroryList: action.payload

    //                 }
    //             }

    //         case RESET_BANK_AND_API_DETAILS:
    //             return ResetBankAndApiDetails(action, state);

    //         case SAVE_BANK_DETAILS:
    //             return SaveBankDetails(action, state);

    //         case SAVE_BANK_DETAILS_WARNINGS:
    //             return SaveBankDetailsWarnings(action, state);


    //         case SAVE_BANK_DETAILS_TO_EDIT:
    //             return SaveBankDetailsToEdit(action, state);

    //         case SAVE_BANK_DETAILS_TO_EDIT_WARNINGS:
    //             return SaveBankDetailsToEditWarnings(action, state);

    //         case SAVE_ADMIN_API_DETAILS:
    //             return SaveAdminAPIDetails(action, state);

    //         case SAVE_ADMIN_API_DETAILS_TO_EDIT:
    //             return SaveAdminAPIDetailsToEdit(action, state);

    //         case SAVE_ADMIN_API_DETAILS_WARNINGS:
    //             return SaveAdminApiDetailsWarnings(action, state);

    //         case SAVE_ADMIN_API_DETAILS_TO_EDIT_WARNINGS:
    //             return SaveAdminApiDetailsToEditWarnings(action, state);


    //         case SEND_ADMIN_API_DETAILS_TO_DB_SUCCESS:
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     isSendDetailsToDbSuccess: true,
    //                     ApiDetails: {
    //                         ...state.MTBeneficiary.ApiDetails,
    //                         name: '',
    //                         code: '',
    //                         baseUrl: '',
    //                     }
    //                 }
    //             }

    //         case SEND_EDITED_ADMIN_API_DETAILS_TO_DB_SUCCESS:
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     isEditDetailsSuccess: true,
    //                     ApiDetails: {
    //                         ...state.MTBeneficiary.ApiDetails,
    //                         name: '',
    //                         code: '',
    //                         baseUrl: '',
    //                     }
    //                 }
    //             }

    //         case SEND_EDITED_ADMIN_API_DETAILS_TO_DB_FAIL:
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     isEditDetailsSuccess: false,
    //                     ApiDetails: {
    //                         ...state.MTBeneficiary.ApiDetails,
    //                         name: '',
    //                         code: '',
    //                         baseUrl: '',
    //                     }
    //                 }
    //             }

    //         case SEND_ADMIN_API_DETAILS_TO_DB_FAIL:
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     isSendDetailsToDbSuccess: false,
    //                     ApiDetails: {
    //                         ...state.MTBeneficiary.ApiDetails,
    //                         name: '',
    //                         code: '',
    //                         baseUrl: '',
    //                     }
    //                 }
    //             }

    //         case SEND_BANK_DETAILS_TO_DB_SUCCESS:
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     isSendDetailsToDbSuccess: true,
    //                     BankDetails: {
    //                         ...state.MTBeneficiary.BankDetails,
    //                         accountName: '',
    //                         accountNumber: '',
    //                         amount: '',
    //                     }
    //                 }
    //             }

    //         case DEACTIVATE_BANK_ACCOUNT_SUCCESS:
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BankDetailsToEdit: {
    //                         ...state.MTBeneficiary.BankDetailsToEdit,
    //                         openDeactivateModal: false,
    //                         activeInActiveSuccess: true
    //                     }
    //                 }
    //             }

    //         case DEACTIVATE_BANK_ACCOUNT_FAIL:
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     isDeactivateSuccess: false,
    //                 }
    //             }
    //         case SEND_EDITED_BANK_DETAILS_TO_DB_SUCCESS:
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     isEditDetailsSuccess: true,
    //                     BankDetailsToEdit: {
    //                         ...state.MTBeneficiary.BankDetailsToEdit,
    //                         name: '',
    //                         accountNumber: '',
    //                         currentBalance: ''
    //                     }
    //                 }
    //             }

    //         case SEND_BANK_DETAILS_TO_DB_FAIL:
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     isSendBankDetailsToDBSuccess: false,
    //                 }
    //             }
    //         case SEND_EDITED_BANK_DETAILS_TO_DB_FAIL:
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     isEditBankDetailsToDBSuccess: false,
    //                 }
    //             }
    //         case ACTIVE_IN_ACTIVE_API_SUCCESS:
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     ApiDetailsToEdit: {
    //                         ...state.MTBeneficiary.ApiDetailsToEdit,
    //                         openDeactivateModal: false,
    //                         activeInActiveSuccess: true
    //                     }
    //                 }
    //             }

    //         case ACTIVE_IN_ACTIVE_API_FAIL:
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     ApiDetailsToEdit: {
    //                         ...state.MTBeneficiary.ApiDetailsToEdit,
    //                         openDeactivateModal: false
    //                     }
    //                 }
    //             }
    //         case ADD_AMOUNT_TO_API_WALLET_SUCCESS:
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     ApiDetailsToEdit: {
    //                         ...state.MTBeneficiary.ApiDetailsToEdit,
    //                         openAddAmountModal: false,
    //                         isAddAmountSuccess: true
    //                     }
    //                 }
    //             }

    //         case ADD_AMOUNT_TO_API_WALLET_FAIL:
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     ApiDetailsToEdit: {
    //                         ...state.MTBeneficiary.ApiDetailsToEdit,
    //                         openAddAmountModal: false,
    //                         isAddAmountSuccess: false
    //                     }
    //                 }
    //             }
    //         case GET_IFSC_SUCCESS:
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BeneDetails: {
    //                         ...state.MTBeneficiary.BeneDetails,
    //                         IFSCCode: action.payload,
    //                         ifsc: action.payload,
    //                     },
    //                     warningsOnBeneDetails: {
    //                         ...state.MTBeneficiary.warningsOnBeneDetails,
    //                         IFSCCode: ''
    //                     }
    //                 },
    //                 ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: false
    //                 }
    //             }
    //         case GET_IFSC_FAIL:
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BeneDetails: {
    //                         ...state.MTBeneficiary.BeneDetails,
    //                         IFSCCode: action.payload,
    //                         ifsc: action.payload,
    //                     },
    //                     warningsOnBeneDetails: {
    //                         ...state.MTBeneficiary.warningsOnBeneDetails,
    //                         IFSCCode: ''
    //                     }
    //                 },
    //                 ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: false
    //                 }
    //             }
    //         case GET_BANKS_BY_IFSC_SUCCESS:
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BeneDetails: {
    //                         ...state.MTBeneficiary.BeneDetails,
    //                         IFSCCode: action.payload,
    //                         ifsc: action.payload,
    //                     },
    //                     warningsOnBeneDetails: {
    //                         ...state.MTBeneficiary.warningsOnBeneDetails,
    //                         IFSCCode: ''
    //                     }
    //                 },
    //                 ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: false
    //                 }
    //             }
    //         case GET_BANKS_BY_IFSC_FAIL:
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,

    //                     warningsOnBeneDetails: {
    //                         ...state.MTBeneficiary.warningsOnBeneDetails,
    //                         IFSCCode: action.payload
    //                     }
    //                 },
    //                 ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: false
    //                 }
    //             }


    //         case WARNINGS_ON_BENE_IP_DETAILS:
    //             return warningsONBeneInformation(action, state);


    //         case GET_STATES_LIST_SUCCESS:
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BankDetails: {
    //                         ...state.MTBeneficiary.BankDetails,
    //                         AllStates: action.payload.states,
    //                         selectedBankId: action.payload.bankId,
    //                         // selectedIFSC: action.payload.ifsc
    //                     },

    //                     BankDetailsToEdit: {
    //                         ...state.MTBeneficiary.BankDetailsToEdit,
    //                         AllStates: action.payload.states,
    //                         selectedBankId: action.payload.bankId
    //                     },
    //                     BeneDetails:{
    //                         ...state.MTBeneficiary.BeneDetails,
    //                         ifsc: action.payload.ifsc,

    //                     },
    //                     warningsOnBeneDetails: {
    //                         ...state.MTBeneficiary.warningsOnBeneDetails,
    //                         bankName: ''
    //                     }
    //                 },
    //             }
    //         case GET_STATES_LIST_FAIL:
    //             return {
    //                 ...state
    //             }

    //         case GET_STATES_CITIES_LIST_SUCCESS:
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BankDetails: {
    //                         ...state.MTBeneficiary.BankDetails,
    //                         AllCities: action.payload.Cities,
    //                         SelectedStateId: action.payload.stateId
    //                     },
    //                     BankDetailsToEdit: {
    //                         ...state.MTBeneficiary.BankDetailsToEdit,
    //                         AllCities: action.payload.Cities,
    //                         SelectedStateId: action.payload.stateId
    //                     }
    //                 },
    //             }

    //         case GET_STATES_CITIES_LIST_FAIL:
    //             return {
    //                 ...state
    //             }
    //         case GET_BANK_BRANCHES_LIST_SUCCESS:

    //             let CityName;
    //             state.MTBeneficiary.BankDetails.AllCities.map((state, i) => {
    //                 // //console.log(action.payload.cityId);
    //                 // //console.log(state.key);
    //                 if (parseInt(action.payload.cityId) === state.key) {
    //                     // //console.log("    /  // / / / / / / // / // / / / // / / / / / / /  Value Is MAtched  : :  ::     ");
    //                     // //console.log(state.value);
    //                     CityName = state.value
    //                 }
    //             });

    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BankDetails: {
    //                         ...state.MTBeneficiary.BankDetails,
    //                         AllBranches: action.payload.Branches,
    //                         SelectedCityId: action.payload.cityId,
    //                         CityName: CityName
    //                     },
    //                     BankDetailsToEdit: {
    //                         ...state.MTBeneficiary.BankDetailsToEdit,
    //                         AllBranches: action.payload.Branches,
    //                         SelectedCityId: action.payload.cityId,
    //                         CityName: CityName
    //                     }
    //                 },
    //             }

    //         case GET_BANK_BRANCHES_LIST_FAIL:

    //             return {
    //                 ...state
    //             }
    //         case SAVE_SELECTED_BRANCH_ID:
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BankDetails: {
    //                         ...state.MTBeneficiary.BankDetails,
    //                         SelectedBranchId: action.payload.BranchId,
    //                     }, BeneDetails: {
    //                         ...state.MTBeneficiary.BeneDetails,
    //                         BranchName: action.payload.BranchName,
    //                         BranchId: action.payload.BranchId
    //                     },
    //                     BankDetailsToEdit: {
    //                         ...state.MTBeneficiary.BankDetailsToEdit,
    //                         SelectedBranchId: action.payload.BranchId,
    //                     },
    //                 },
    //             }
    //         case CLEARE_BENE_BANK_DETAILS_IN_SEARCH_MODAL:
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BankDetails: {
    //                         ...state.MTBeneficiary.BankDetails,
    //                         SelectedStateId: '',
    //                         SelectedCityId: '',
    //                         SelectedBranchId: '',
    //                         IFSCInfoObject: [],
    //                         AllStates: [],
    //                         AllCities: [],
    //                         AllBranches: [],
    //                     }
    //                 },
    //             }

    //         case GET_BANK_IFSC_ON_SEARCH_SUCCESS:
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BankDetails: {
    //                         ...state.MTBeneficiary.BankDetails,
    //                         IFSCInfoObject: [action.payload.IfscandDetails],
    //                         IFSCCode: action.payload.IfscandDetails.ifsc
    //                     }, BeneDetails: {
    //                         ...state.MTBeneficiary.BeneDetails,
    //                     },
    //                     BankDetailsToEdit: {
    //                         ...state.MTBeneficiary.BankDetailsToEdit,
    //                         IFSCCode: action.payload.IfscandDetails.ifsc

    //                     },
    //                 },
    //             }
    //         case GET_BANK_IFSC_ON_SEARCH_FAIL:
    //             return {
    //                 ...state
    //             }

    //         case SELECT_IFSC_ON_SEARCH_RESULT:
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BankDetails: {
    //                         ...state.MTBeneficiary.BankDetails,
    //                         // SelectedBranchId: action.payload.branchId,
    //                         // SelectedBranchIfsc: action.payload.IfscandDetails.ifsc
    //                         SelectedBankBranch: action.payload.branch
    //                     }, BeneDetails: {
    //                         ...state.MTBeneficiary.BeneDetails,
    //                         ifsc: action.payload.ifsc,

    //                     },
    //                 },
    //                 MTcustomer: {
    //                     ...state.MTcustomer,
    //                     searchClicked: false
    //                 },
    //             }

    //         case VERIFY_BENE_BEFORE_ADD:

    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     VerifyBene: {
    //                         ...state.MTBeneficiary.VerifyBene,
    //                         // enableLoading: true,
    //                     }
    //                 }
    //             }
    //         case VERIFY_BENE_BEFORE_ADD_SUCCESS:
    //             return {
    //                 ...state,
    //                 MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     VerifyBene: {
    //                         ...state.MTBeneficiary.VerifyBene,
    //                         verifySuccess: true,
    //                         verifyFail: false,
    //                         SuccessResponse: action.payload,
    //                         enableLoading: false


    //                     },
    //                     BeneDetails: {
    //                         ...state.MTBeneficiary.BeneDetails,
    //                         bankAccountVerified: action.payload.BankAccountExists
    //                     },
    //                 },
    //                 ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: false
    //                 }
    //             }
    //         case VERIFY_BENE_BEFORE_ADD_FAIL:
    //             return {
    //                 ...state,
    //                 MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     VerifyBene: {
    //                         ...state.MTBeneficiary.VerifyBene,
    //                         verifyFail: true,
    //                         verifySuccess: false,
    //                         enableLoading: false,
    //                         ErrorCode: action.payload.status
    //                     },
    //                 },
    //                 ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: false
    //                 }
    //             }

    //         case CLOSE_MODAL_OF_VERIFY_BENE_BEFORE_ADD:
    //             return {
    //                 ...state,
    //                 MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     VerifyBene: {
    //                         ...state.MTBeneficiary.VerifyBene,
    //                         verifySuccess: false,
    //                         verifyFail: false,
    //                         ErrorCode: ''
    //                     },
    //                 }
    //             }

    //         case CONFIRM_FROM_BENE_VALIDATION_SUCCESS:
    //             return {
    //                 ...state,
    //                 MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     VerifyBene: {
    //                         ...state.MTBeneficiary.VerifyBene,
    //                         verifySuccess: false,
    //                         verifyFail: false,
    //                         ErrorCode: ''
    //                     },
    //                     BeneDetails: {
    //                         ...state.MTBeneficiary.BeneDetails,
    //                         bankAccountVerified: true
    //                     }

    //                 }
    //             }

    //         case RESEND_OTP_IN_ADD_BENE_SUCCESS:
    //                 return {
    //                     ...state, ProgressIndicator: {
    //                         ...state.ProgressIndicator,
    //                         InProgress: false
    //                     },

    //                     MTBeneficiary:{
    //                         ...state.MTBeneficiary,
    //                         isResendOTP:true
    //                     }
    //                 }

    //         case REGISTER_BENE_INFO_SUCCESS:

    //             // //console.log(" / / / / / // / In Reducer On Bene Add Success : ");
    //             // //console.log(action.payload);

    //             let Banks = JSON.parse(JSON.stringify(state.MTBeneficiary.BeneDetails.bankNames))
    //             let Selected_Bene_Bank = {};
    //             Selected_Bene_Bank = Banks.filter((item) => {
    //                 return item.key == action.payload.BeneInfo.Beneficiary.BankId
    //             })

    //             // //console.log(" Selected_Bene_Bank Selected_Bene_Bank Selected_Bene_Bank IN The Reducer  ");
    //             // //console.log(Selected_Bene_Bank);

    //             let Bene = {
    //                 acccountNo: action.payload.BeneInfo.Beneficiary.AccountNo,
    //                 bankAccountVerified: action.payload.BeneInfo.Beneficiary.VerifyBeneficiary,
    //                 bankName: Selected_Bene_Bank[0].value,
    //                 fullName: action.payload.BeneInfo.Beneficiary.FullName,
    //                 id: action.payload.Data.beneId,
    //                 ifsc: action.payload.BeneInfo.Beneficiary.IFSC,
    //                 mobileNo: action.payload.BeneInfo.Beneficiary.MobileNo
    //             }

    //             return {
    //                 ...state, MTcustomer: {
    //                     ...state.MTcustomer,
    //                     NavigatePages: {
    //                         ...state.MTcustomer.NavigatePages,
    //                         DisplayAddingBene: false,
    //                         OtpVerifyOnAddBene: true,
    //                     }

    //                 }, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BeneList: [...state.MTBeneficiary.BeneList, Bene],
    //                     NewBeneId: action.payload.Data.beneId
    //                 },
    //                 ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: false
    //                 }
    //             }

    //         case REGISTER_BENE_INFO_FAIL:
    //             return {
    //                 ...state, ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: false
    //                 },

    //                 MTBeneficiary:{
    //                     ...state.MTBeneficiary,
    //                     warningsOnBeneDetails: {
    //                         ...state.MTBeneficiary.warningsOnBeneDetails,
    //                         ErrorMsg: action.payload.msg
    //                     }
    //                 }
    //             }

    //         case RESET_ADD_BENE_FORM:

    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BeneDetails: {
    //                         ...state.MTBeneficiary.BeneDetails,
    //                         ConfirmaccountNo: '',
    //                         ifsc: '',
    //                         acccountNo: '',
    //                         fullName: '',
    //                         mobileNo: '',

    //                     }, BankDetails: {
    //                         ...state.MTBeneficiary.BankDetails,
    //                         selectedBankId: '',
    //                         CityName: '',
    //                         SelectedBankBranch: ''
    //                     },
    //                     warningsOnBeneDetails: {
    //                         ...state.warningsOnBeneDetails,
    //                         IFSCCode: ""
    //                     }
    //                 }
    //             }

    //         case CLOSE_BENE_FORM:
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BeneDetails: {},
    //                     BankDetails: {
    //                         ...state.MTBeneficiary.BankDetails,
    //                         selectedBankId: ''
    //                     }
    //                 }, MTcustomer: {
    //                     ...state.MTcustomer,
    //                     NavigatePages: {
    //                         ...state.MTcustomer.NavigatePages,
    //                         DisplayAddingBene: false
    //                     }
    //                 }
    //             }

    //         case DELETE_BENEFICIARY_SUCCESS:
    //             // //console.log("action.payload IN Delete Success Reducer : ");
    //             // //console.log(action.payload);
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BeneList: state.MTBeneficiary.BeneList.filter(item => item.id !== action.payload.beneid),
    //                     BeneDeleteSuccess: true
    //                 }
    //             }
    //         case CHANGE_BENE_DELETE_SUCCSS_PARAM_TO_FALSE:
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BeneDeleteSuccess: false
    //                 }
    //             }

    //         case ENABLE_BENE_NOT_VERIFIED_MODAL:
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BeneNotVerifiedModal: true
    //                 }, MTTransDetails: {
    //                     ...state.MTTransDetails,
    //                     BeneInfo: action.payload,

    //                 },
    //             }
    //     case ENABLE_RESEND_OTP_MODAL
    //     :
    //             return {
    //                 ...state,  MTTransDetails: {
    //                     ...state.MTTransDetails,
    //                     BeneInfo: action.payload.bene,

    //                 },
    //             }

    //         case DISABLE_BENE_NOT_VERIFIED_MODAL:
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BeneNotVerifiedModal: false
    //                 }, MTTransDetails: {
    //                     ...state.MTTransDetails,
    //                     BeneInfo: {},
    //                 },
    //             }

    //         case PROCEED_TO_TRASACTION_DETAILS:
    //             return {
    //                 ...state, MTcustomer: {
    //                     ...state.MTcustomer,
    //                     NavigatePages: {
    //                         ...state.MTcustomer.NavigatePages,
    //                         DisplayTrasDetails: true
    //                     }
    //                 }, MTTransDetails: {
    //                     ...state.MTTransDetails,
    //                     BeneInfo: action.payload === undefined ? state.MTTransDetails.BeneInfo : action.payload,

    //                 }, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BeneNotVerifiedModal: false
    //                 },
    //             }

    //         case CANCLE_IN_TRANS_DETAILS:
    //             return {
    //                 ...state, MTcustomer: {
    //                     ...state.MTcustomer,
    //                     NavigatePages: {
    //                         ...state.MTcustomer.NavigatePages,
    //                         DisplayTrasDetails: false
    //                     }
    //                 }, MTTransDetails: {
    //                     ...state.MTTransDetails,
    //                     BeneInfo: {},
    //                     TransMode: '',
    //                     TransAmount: '',
    //                     AdditionalCharges: '',
    //                     TotalAmount: '',
    //                     Get_Additional_Charges: false,
    //                     ApiResult: {
    //                         ...state.MTTransDetails.ApiResult,
    //                         ErrorMessage: ''
    //                     }
    //                 }, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BeneNotVerifiedModal: false
    //                 },
    //             }

    //         case SAVE_MT_TRANS_DETAILS:
    //             return SaveMtTransferDetails(action, state);

    //         case GET_ADDITIONAL_CHARGES_IN_MT_SUCCESS:

    //             return {
    //                 ...state, MTTransDetails: {
    //                     ...state.MTTransDetails,
    //                     // TransAmount: action.payload.value,
    //                     AdditionalCharges: action.payload.charges,
    //                     TotalAmount: action.payload.charges + action.payload.moneyToBeTransfered,
    //                     Get_Additional_Charges: false
    //                 },
    //             }

    //         case GET_ADDITIONAL_CHARGES_IN_MT_FAIL:
    //             return {
    //                 ...state, MTTransDetails: {
    //                     ...state.MTTransDetails,
    //                     Get_Additional_Charges: false,
    //                     ApiResult: {
    //                         ...state.MTTransDetails.ApiResult,
    //                         ErrorMessage: action.payload
    //                     }
    //                 },
    //             }

    //         case MONEY_TRANSFER_REQUEST_SUCCESS:
    //             return {
    //                 ...state, MTTransDetails: {
    //                     ...state.MTTransDetails,
    //                     InternalTransID: action.payload.internalTxId,
    //                 }, MTcustomer: {
    //                     ...state.MTcustomer,
    //                     NavigatePages: {
    //                         ...state.MTcustomer.NavigatePages,
    //                         DisplayTrasDetails: false,
    //                         DisplayTrasDescriptionNDOtpVerify: true
    //                     }
    //                 },
    //                 ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: false
    //                 }
    //             }

    //         case MONEY_TRANSFER_REQUEST_FAIL:
    //             return {
    //                 ...state, MTTransDetails: {
    //                     ...state.MTTransDetails,
    //                     ApiResult: {
    //                         ...state.MTTransDetails.ApiResult,
    //                         MTrequesrFail: true,
    //                         ErrorMessage: action.payload
    //                     }
    //                 },
    //                 ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: false
    //                 }
    //             }

    //         case SAVE_OTP_AFTER_TRANSFER_REQUEST:

    //             return {
    //                 ...state, MTTransDetails: {
    //                     ...state.MTTransDetails,
    //                     OTPafterTrasRequest: action.payload
    //                 },
    //             }

    //         case CANCLE_THE_MT_COMPLETE_TRANSACTION:
    //             return {
    //                 ...state,
    //                 MTTransDetails: {
    //                     ...state.MTTransDetails,
    //                     BeneInfo: {},
    //                     TransMode: '',
    //                     TransAmount: '',
    //                     AdditionalCharges: '',
    //                     TotalAmount: '',
    //                     InternalTransID: '',
    //                     OTPafterTrasRequest: '',
    //                     ApiResult: {
    //                         ...state.MTTransDetails.ApiResult,
    //                         MTrequesrFail: false,
    //                         ErrorMessage: '',
    //                         OtpVerifyFail: false,
    //                         otpVerifySuccess: false,
    //                         OtpMaxAttemptsReached: false,
    //                     }
    //                 }, MTcustomer: {
    //                     ...state.MTcustomer,
    //                     NavigatePages: {
    //                         ...state.MTcustomer.NavigatePages,
    //                         DisplayTrasDetails: false,
    //                         DisplayTrasDescriptionNDOtpVerify: false
    //                     }
    //                 }, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BeneNotVerifiedModal: false
    //                 },
    //             }

    //         case MONEY_TRASFER_OTP_VERIFY_SUCCESS:
    //             return {
    //                 ...state,
    //                 MTTransDetails: {
    //                     ...state.MTTransDetails,
    //                     ApiResult: {
    //                         ...state.MTTransDetails.ApiResult,
    //                         OtpVerifyFail: !action.payload.otpVerified,
    //                         otpVerifySuccess: action.payload.otpVerified,
    //                         TrasSuccessDateNDtime: action.payload.otpVerified ? moment().format('MMMM Do YYYY, h:mm:ss a') : '',
    //                         OtpMaxAttemptsReached: action.payload.maxAttemptsReached,
    //                         buisnessName: action.payload.bizName,
    //                         AuthorizeSuccess: true,
    //                         transactionStatus: action.payload.data.status,
    //                         trasactionParts: action.payload.trasactionParts
    //                     }
    //                 },
    //                 ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: false
    //                 }
    //             }
    //         case MONEY_TRASFER_OTP_VERIFY_FAIL:
    //             return {
    //                 ...state, MTTransDetails: {
    //                     ...state.MTTransDetails,
    //                     ApiResult: {
    //                         ...state.MTTransDetails.ApiResult,
    //                         AuthorizeSuccess: false,
    //                     }
    //                 },
    //                 ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: false
    //                 }
    //             }

    //         //#endregion  MoneyTrasfer Final

    //         //#region  RATECARD Final

    //         case RATE_CARD_INITIAL:
    //             return {
    //                 ...state
    //             }
    //         // {
    //         //     ...state, RateCard: {
    //         //         ...state.RateCard,
    //         //         CommissionCalculator: {
    //         //             ...state.RateCard.CommissionCalculator,
    //         //             TransactionValue: '',
    //         //             CommissionAplicable: '',
    //         //             AgentPayout: '',
    //         //             TDSfromAgent: '',
    //         //             AgentBonus: '',
    //         //             ServiceProviderCharges: '',
    //         //             GSTforOrg: '',
    //         //             Finalcommission: ''
    //         //         }
    //         //     }
    //         // }


    //         case GET_ALL_RATECARDS_SUCCESS:
    //             return {
    //                 ...state, RateCard: {
    //                     ...state.RateCard,
    //                     AllrateCards: action.payload,
    //                     RateCardNavigation: {
    //                         ...state.RateCard.RateCardNavigation,
    //                         // AddRateCard: action.payload.length === 0 ? true : false,
    //                         AddRateCard: false,
    //                         EditRateCard: false,
    //                         ViewRateCard: false
    //                     },
    //                     ApiResult: {
    //                         ...state.RateCard.ApiResult,
    //                         CreateNewRateCard: ''
    //                     },
    //                 },
    //                 ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: false
    //                 }
    //             }

    //         case GET_ALL_RATECARDS_FAIL:
    //             return {
    //                 ...state, RateCard: {
    //                     ...state.RateCard,
    //                     ApiResult: {
    //                         ...state.RateCard.ApiResult,
    //                         CreateNewRateCard: ''
    //                     },
    //                 },
    //             }

    //         case SEARCH_RATE_CARD_SUCCESS:
    //             return {
    //                 ...state, RateCard: {
    //                     ...state.RateCard,
    //                     AllrateCards: action.payload
    //                 },
    //             }
    //         case SEARCH_RATE_CARD_FAIL:
    //             return {
    //                 ...state, RateCard: {
    //                     ...state.RateCard,
    //                 },
    //             }
    //         case GET_RATE_CARD_TEMPLATE_SUCCESS:

    //             return {
    //                 ...state, RateCard: {
    //                     ...state.RateCard,
    //                     CreateRateCard: action.payload,
    //                     ActualRateCard: action.payload,
    //                     InitialRateCard: action.payload
    //                 },
    //                 ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: false
    //                 }

    //             }

    //         case GET_RATE_CARD_FAIL:
    //             return {
    //                 ...state,
    //                 ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: false
    //                 }
    //             }

    //         case DELETE_RATE_CARD_SUCCESS:
    //             return {
    //                 ...state, RateCard: {
    //                     ...state.RateCard,
    //                     AllrateCards: state.RateCard.AllrateCards.filter(item => item.id !== action.payload),
    //                     ApiResult: {
    //                         ...state.RateCard.ApiResult,
    //                         RateCardDeleteSuccess: true
    //                     }
    //                 }
    //             }
    //         case CHANGE_PAGE_SIZE_IN_RATE_CARD_HOME:
    //             return {
    //                 ...state, RateCard: {
    //                     ...state.RateCard,
    //                     InitialPageSize: action.payload,
    //                 }
    //             }



    //         case GET_RATE_CARD_SLABS_SUCCESS:
    //             return {
    //                 ...state, RateCard: {
    //                     ...state.RateCard,
    //                     RateCardId: action.payload.id,
    //                     RateCardColor: action.payload.colorIndicator,
    //                     RateCardTitle: action.payload.name,
    //                     RateCardDescription: action.payload.description,
    //                     CreateRateCard: action.payload.entries,
    //                     ActualRateCard: action.payload.entries,
    //                 },
    //                 ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: false
    //                 }
    //             }

    //         case GET_RATE_CARD_SLABS_FAIL:
    //             return {
    //                 ...state, ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: false
    //                 }
    //             }

    //         case NAVIGATE_TO_RATE_CARD_MAIN:
    //             return {
    //                 ...state, RateCard: {
    //                     ...state.RateCard,
    //                     RateCardId: action.payload.id,
    //                     RateCardNavigation: {
    //                         ...state.RateCard.RateCardNavigation,
    //                         AddRateCard: action.payload.addOrEdit === 'Add RateCard' ? true : false,
    //                         EditRateCard: action.payload.addOrEdit === 'Edit RateCard' ? true : false,
    //                         ViewRateCard: action.payload.addOrEdit === 'View RateCard' ? true : false,
    //                         RateCardMode: action.payload.addOrEdit
    //                     }
    //                 },
    //                 // ProgressIndicator:{
    //                 //     ...state.ProgressIndicator,
    //                 //     InProgress:false
    //                 // }            
    //             }

    //         case COMMISSION_CALCULATOR_MODAL:
    //             return {
    //                 ...state, RateCard: {
    //                     ...state.RateCard,
    //                     RateCardNavigation: {
    //                         ...state.RateCard.RateCardNavigation,
    //                         CommissionCalculatorModal: !state.RateCard.RateCardNavigation.CommissionCalculatorModal,
    //                     }
    //                 }
    //             }

    //         case CHANGE_RATE_CARD_VALUES:
    //             return ChangeRateCardValues(action, state);

    //         case SET_COMMISSION_CALCULATOR_VALUES:

    //             let TransValue = action.payload.minValue;
    //             let CommissAplicable = (1 / 100) * TransValue;   // Done. 
    //             let AgentShare = (50 / 100) * CommissAplicable; //Done.
    //             let tDSfromAgent = (5 / 100) * AgentShare;  //Done.
    //             let agentPayout = (95 / 100) * AgentShare; //Done.
    //             let OrgShare = (50 / 100) * CommissAplicable; //Done. 
    //             let serviceProviderCharges = (60 / 100) * OrgShare; //Done.
    //             let agentBonus = (10 / 100) * OrgShare; //Done.
    //             let orgCommission = (30 / 100) * OrgShare; //Done..
    //             let gstForORG = (orgCommission / 100) * 18; //Done.
    //             let finalCommission = orgCommission - gstForORG; //Done.

    //             return {
    //                 ...state, RateCard: {
    //                     ...state.RateCard,
    //                     CommissionCalculator: {
    //                         ...state.RateCard.CommissionCalculator,
    //                         TransactionValue: TransValue,
    //                         CommissionAplicable: CommissAplicable,
    //                         AgentPayout: agentPayout,
    //                         TDSfromAgent: tDSfromAgent,
    //                         AgentBonus: agentBonus,
    //                         ServiceProviderCharges: serviceProviderCharges,
    //                         GSTforOrg: gstForORG,
    //                         Finalcommission: finalCommission
    //                     }
    //                 }
    //             }

    //         case SAVE_CREATING_RATE_CARD_DATA:

    //             return Ratecard_data_on_createRatecard(action, state)

    //         case SAVE_FILTER_RATE_CARD_FROM_AND_TO_VALUES:
    //             if (action.payload.field === 'From') {
    //                 return {
    //                     ...state, RateCard: {
    //                         ...state.RateCard,
    //                         RCfilterFrom: action.payload.value,
    //                         SetValuesModalData: {
    //                             ...state.RateCard.SetValuesModalData,
    //                             From: action.payload.value,
    //                         }
    //                     }
    //                 }
    //             }
    //             else if (action.payload.field === 'To') {
    //                 return {
    //                     ...state, RateCard: {
    //                         ...state.RateCard,
    //                         RCfilterTo: action.payload.value,
    //                         SetValuesModalData: {
    //                             ...state.RateCard.SetValuesModalData,
    //                             To: action.payload.value,
    //                         }
    //                     }
    //                 }
    //             }

    //         case FILTER_RATE_CARD_SLABS:

    //             // if (action.payload.FromIndx === NaN || action.payload.ToIndx === NaN) {

    //             //     // //console.log(" Reloading CreateRateCard With ActualRateCard:")
    //             //     return {
    //             //         ...state, RateCard: {
    //             //             ...state.RateCard,
    //             //             CreateRateCard: state.RateCard.ActualRateCard
    //             //         }
    //             //     }

    //             // } 
    //             // else
    //             {
    //                 return {
    //                     ...state, RateCard: {
    //                         ...state.RateCard,
    //                         CreateRateCard: state.RateCard.ActualRateCard.slice(action.payload.FromIndx - 1, action.payload.ToIndx)
    //                     }
    //                 }

    //             }

    //         case SET_VALUES_MODAL_IN_RATE_CARD:

    //             return {
    //                 ...state, RateCard: {
    //                     ...state.RateCard,
    //                     SetValuesModal: action.payload.val,
    //                     SetValuesModalData: action.payload.item === undefined ? {} : action.payload.item
    //                 }
    //             }

    //         case SAVE_RATE_CARD_VALUES_FROM_MODAL:

    //             return SaveRateCardValues(action, state);

    //         case SET_VALUES_TO_RATE_CARD_SLABS:

    //             let ValuesToSet = state.RateCard.SetValuesModalData;
    //             // let ToVal = state.RateCard.SetValuesModalData.To;

    //             let FromIndx = Math.floor(parseInt(ValuesToSet.From) / 100) - 1;
    //             let ToIndx = Math.floor(parseInt(ValuesToSet.To) / 100) - 1;

    //             return {
    //                 ...state, RateCard: {
    //                     ...state.RateCard,
    //                     CreateRateCard: state.RateCard.CreateRateCard.map((slab, idx) => {
    //                         // if (parseInt(slab.minValue) === parseInt(ValuesToSet.From) || parseInt(slab.minValue) > parseInt(ValuesToSet.From) &&
    //                         //     parseInt(slab.maxValue) === parseInt(ValuesToSet.To) || parseInt(slab.maxValue) < parseInt(ValuesToSet.To)) {
    //                         if ((FromIndx === idx || FromIndx < idx) && (ToIndx === idx || ToIndx > idx)) {
    //                             return {
    //                                 ...slab,
    //                                 ...slab.rate = ValuesToSet.rate,
    //                                 ...slab.rateType = ValuesToSet.rateType,
    //                                 ...slab.dailyPayout = ValuesToSet.dailyPayout,
    //                                 ...slab.dailyPayoutType = ValuesToSet.dailyPayoutType,
    //                                 ...slab.monthlyPayout = ValuesToSet.monthlyPayout,
    //                                 ...slab.monthlyPayoutType = ValuesToSet.monthlyPayoutType,
    //                             }
    //                         } else return slab
    //                     }),
    //                     SetValuesModal: false,
    //                     RateCardValidations: {
    //                         ...state.RateCard.RateCardValidations,
    //                         sendRCToServer: false,
    //                     },
    //                 }
    //             }

    //         case CREATE_NEW_RATE_CARD_SUCCESS:

    //             delete action.payload.entries;

    //             return {
    //                 ...state, RateCard: {
    //                     ...state.RateCard,
    //                     AllrateCards: [...state.RateCard.AllrateCards, action.payload],
    //                     RCfilterFrom: '',
    //                     RCfilterTo: '',
    //                     RateCardColor: '',
    //                     RateCardDescription: '',
    //                     RateCardTitle: '',
    //                     ApiResult: {
    //                         ...state.RateCard.ApiResult,
    //                         CreateNewRateCard: 'Success',
    //                     },
    //                     RateCardNavigation: {
    //                         ...state.RateCard.RateCardNavigation,
    //                         AddRateCard: false,
    //                         EditRateCard: false
    //                     },
    //                     // RCValidationsInitialState()
    //                     RateCardValidations: {
    //                         ...state.RateCard.RateCardValidations,
    //                         validateSlabs: false,
    //                         slabsValidationResult: 'Checking',
    //                     },
    //                 },
    //                 ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: false
    //                 }
    //             }

    //         case CREATE_NEW_RATE_CARD_FAIL:
    //             return {
    //                 ...state, RateCard: {
    //                     ...state.RateCard,
    //                     ApiResult: {
    //                         ...state.RateCard.ApiResult,
    //                         CreateNewRateCard: 'Fail'
    //                     },
    //                     RateCardValidations: {
    //                         ...state.RateCard.RateCardValidations,
    //                         validateSlabs: false,
    //                         slabsValidationResult: 'Checking',
    //                     },
    //                     // RCValidationsInitialState()
    //                 },
    //                 ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: false
    //                 }


    //             }

    //         case UPDATE_RATE_CARD_SUCCESS:

    //             delete action.payload.entries;

    //             return {
    //                 ...state, RateCard: {
    //                     ...state.RateCard,
    //                     AllrateCards: state.RateCard.AllrateCards.map((item, index) => {
    //                         if (item.id === action.payload.RateCardPayload.id) {
    //                             // This isn't the item we care about - keep it as-is
    //                             return {
    //                                 ...item,
    //                                 ...action.item
    //                             }
    //                         }
    //                         return item;
    //                         // Otherwise, this is the one we want - return an updated value
    //                     }),
    //                     RCfilterFrom: '',
    //                     RCfilterTo: '',
    //                     RateCardColor: '',
    //                     RateCardDescription: '',
    //                     RateCardTitle: '',
    //                     RateCardNavigation: {
    //                         ...state.RateCard.RateCardNavigation,
    //                         AddRateCard: false,
    //                         EditRateCard: false
    //                     },
    //                     // RCValidationsInitialState()
    //                     RateCardValidations: {
    //                         ...state.RateCard.RateCardValidations,
    //                         validateSlabs: false,
    //                         slabsValidationResult: 'Checking',
    //                     },
    //                 }
    //             }
    //         case UPDATE_RATE_CARD_FAIL:
    //             return {
    //                 ...state, RateCard: {
    //                     ...state.RateCard,
    //                     // RCValidationsInitialState()
    //                     RateCardValidations: {
    //                         ...state.RateCard.RateCardValidations,
    //                         validateSlabs: false,
    //                         slabsValidationResult: 'Checking',
    //                     },
    //                 }
    //             }

    //         case RESET_RATE_CARD_DATA:

    //             return {
    //                 ...state, RateCard: {
    //                     ...state.RateCard,
    //                     RCfilterFrom: "",
    //                     RCfilterTo: "",
    //                     CreateRateCard: state.RateCard.CreateRateCard.map((item, idx) => {
    //                         return {
    //                             ...item,
    //                             ...item.rate = "",
    //                             ...item.rateType = "",
    //                             ...item.dailyPayout = "",
    //                             ...item.dailyPayoutType = "",
    //                             ...item.monthlyPayout = "",
    //                             ...item.monthlyPayoutType = "",
    //                         }
    //                     }),
    //                     RateCardTitle: "",
    //                     RateCardDescription: '',
    //                     RateCardColor: '#ff0000',
    //                     CommissionCalculator: {
    //                         TransactionValue: '',
    //                         CommissionAplicable: '',
    //                         AgentPayout: '',
    //                         TDSfromAgent: '',
    //                         AgentBonus: '',
    //                         ServiceProviderCharges: '',
    //                         GSTforOrg: '',
    //                         Finalcommission: ''
    //                     },
    //                     SetValuesModalData:
    //                     {
    //                         ...state.RateCard.SetValuesModalData,
    //                         From: "",
    //                         To: "",
    //                         rate: "",
    //                         dailyPayout: "",
    //                         monthlyPayout: "",
    //                     },
    //                     Ratecardwarnings: {
    //                         ...state.RateCard.Ratecardwarnings,
    //                         SlabsWarning: "",
    //                         colorwarning: "",
    //                         ratecardDescWarning: "",
    //                         ratecardTitleWarning: "",
    //                     }
    //                 }
    //             }

    //         case VALIDATE_SLABS_BEFORE_SEND_TO_SERVER:
    //             return {
    //                 ...state, RateCard: {
    //                     ...state.RateCard,
    //                     RateCardValidations: {
    //                         ...state.RateCard.RateCardValidations,
    //                         validateSlabs: true,
    //                         sendRCToServer: true,
    //                         // sendRCToServer: true
    //                     },
    //                 },
    //                 ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: false
    //                 }
    //             }

    //         case SLABS_VALIDATION_RESULT:

    //             return {
    //                 ...state, RateCard: {
    //                     ...state.RateCard,
    //                     RateCardValidations: {
    //                         ...state.RateCard.RateCardValidations,
    //                         slabsValidationResult: action.payload,
    //                         // validateSlabs: false
    //                         // sendRCToServer: action.payload
    //                     },
    //                 }


    //             }

    //         case RATE_CARD_WARNINGS:
    //             return ratecardWarnings(action, state);





    //         case CANCLE_EVENT_IN_RC_MAIN:

    //             return {
    //                 ...state, RateCard: {
    //                     ...state.RateCard,
    //                     RCfilterFrom: '',
    //                     RCfilterTo: '',
    //                     RateCardColor: '',
    //                     RateCardDescription: '',
    //                     RateCardTitle: '',

    //                     RateCardNavigation: {
    //                         ...state.RateCard.RateCardNavigation,
    //                         AddRateCard: false,
    //                         EditRateCard: false,
    //                         ViewRateCard: false,
    //                     },
    //                     // RCValidationsInitialState()
    //                     RateCardValidations: {
    //                         ...state.RateCard.RateCardValidations,
    //                         validateSlabs: false,
    //                         // sendRCToServer: false,
    //                         slabsValidationResult: 'Checking',
    //                     },
    //                     CreateRateCard: [],
    //                     ActualRateCard: [],
    //                 }
    //             }



    //         // Bank Deposit Slip Actions 
    //         case RESET_DEPOSIT_SLIP_COMPONENT:
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     openSlipModal: false,
    //                     AmountDepositSlip: "",
    //                     branchsbyCityList: [],
    //                     loadBranchsList: false,
    //                     amount: "",
    //                     SlipDetailsWarnings: {
    //                         ...state.DespositSlipComp.SlipDetailsWarnings,
    //                         fromNameWarning: "",
    //                         amountWarning: "",
    //                         modeOfDepositWarning: "",
    //                         onlineTransferWarning: "",
    //                         referenceNumberWarning: "",
    //                         numberWarning: "",
    //                         toBankAccountNoWarning: "",
    //                         slipImageWarning: "",
    //                     },
    //                     CDMReportList: [],
    //                     slipList: [],
    //                     isGetDepositedSlipSuccess: false,
    //                     isApproveDepositSlipSuccess: false,
    //                     isApproveDepositSuccess: false,
    //                     isSubmitDepositSlipSuccess: false,
    //                     isSendDepositSuccess: false,
    //                     DespositList: [{ id: 1, TenantId: '', Amount: '' }],
    //                     DespositListNew: [{
    //                         id: 1,
    //                         amount: "",
    //                         bankSlipTxId: "",
    //                         branchId: "",
    //                         depositSlipBase64Image: "",
    //                         amountInWords: "",
    //                         // depositedDate: moment(),
    //                         depositedDate: "",
    //                         machineLocation: "",
    //                         machineNo: "",
    //                         depositModeId: "",
    //                         remarks: "",
    //                         toBankAccountNo: 0,
    //                         enableUpdate: false
    //                     }
    //                     ],
    //                     SlipImageList: [{ id: 1, SlipImage: '', TxId: '' }],
    //                     DepositSlipImage: "",
    //                     BankSlipTxId: "",
    //                     depositSlipWarnings: {
    //                         ...state.DespositSlipComp.depositSlipWarnings,
    //                         imageWarnings: "",
    //                         amountWarnings: "",
    //                         orgIdWarnings: "",
    //                         txIDWarnings: "",
    //                         warningsAll: ""
    //                     },
    //                     SlipDetails: {
    //                         ...state.DespositSlipComp.SlipDetails,
    //                         bankName: "",
    //                         slipImage: "",
    //                         cdmStuckSlip: "",
    //                         machineLocation: "",
    //                         machineNo: "",
    //                         fromName: "",
    //                         amount: "",
    //                         amountInWords: "",
    //                         modeOfDeposit: "",
    //                         onlineTransfer: "",
    //                         referenceNumber: "",
    //                         chequeDetails: {
    //                             number: "",
    //                             date: ""
    //                         },
    //                         toBankAccountNo: "",
    //                         dateOfDeposit: "",
    //                         remarks: "",
    //                         slipImage: "",
    //                         tenantDepositMode: "",
    //                         tenantName: "",
    //                         tenantType: "",

    //                     }
    //                 },
    //                 ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: false
    //                 }
    //             }



    //         case SAVE_DEPOSIT_SLIP_DETAILS:
    //             return SaveDepositSlipDetails(action, state);

    //         case SAVE_DEPOSIT_SLIP_DETAILS_WARNINGS:
    //             return SaveDepositSlipDetailsWarnings(action, state);

    //         case SAVE_DEPOSIT_SLIP_DETAILS_TENANT:
    //             return SaveDepositSlipDetailsTenant(action, state);

    //         case SAVE_DEPOSIT_SLIP_DETAILS_TENANT_WARNINGS:
    //             return SaveDepositSlipDetailsTenantWarnings(action, state);

    //         case GET_ALL_DEPOSITS_FROM_DB_SUCCESS:
    //             // //console.log("In reducer Values are")
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     slipList: action.payload.data,
    //                     // isSendDepositSuccess:true
    //                 }
    //             }
    //         case GET_RECIEPT_LISTS_SUCCESS:
    //             // // //console.log("In reducer Values are")
    //             return {
    //                 ...state, AccountingDetails: {
    //                     ...state.AccountingDetails,
    //                     ReceiptList: action.payload.data
    //                 }
    //             }

    //         case GET_RECIEPT_BY_ID_SUCCESS:
    //             // // //console.log("In reducer Values are")
    //             return {
    //                 ...state, AccountingDetails: {
    //                     ...state.AccountingDetails,
    //                     ReceiptDetailsToEdit: action.payload.data,
    //                     GetReceiptDetailsSuccess: true
    //                 }
    //             }
    //         case GET_RECIEPT_BY_ID_FAIL:
    //             // // //console.log("In reducer Values are")
    //             return {
    //                 ...state, AccountingDetails: {
    //                     ...state.AccountingDetails,
    //                     ReceiptDetailsToEdit: {},
    //                     GetReceiptDetailsSuccess: false
    //                 }
    //             }
    //         case GET_RECIEPT_MODE_LISTS_SUCCESS:
    //             // // //console.log("In reducer Values are")
    //             return {
    //                 ...state, AccountingDetails: {
    //                     ...state.AccountingDetails,
    //                     ToAccountList: action.payload.data
    //                 }
    //             }
    //         case GET_RECIEPT_MODE_LISTS_FAIL:
    //             // // //console.log("In reducer Values are")
    //             return {
    //                 ...state, AccountingDetails: {
    //                     ...state.AccountingDetails,
    //                     ToAccountList: []
    //                 }
    //             }

    //         case GET_FROM_ACCOUNT_LISTS_SUCCESS:
    //             // // //console.log("In reducer Values are")
    //             return {
    //                 ...state, AccountingDetails: {
    //                     ...state.AccountingDetails,
    //                     FromAccountList: action.payload.data
    //                 }
    //             }

    //         case GET_FROM_ACCOUNT_LISTS_FAIL:
    //             // // //console.log("In reducer Values are")
    //             return {
    //                 ...state, AccountingDetails: {
    //                     ...state.AccountingDetails,
    //                     FromAccountList: action.payload.data
    //                 }
    //             }

    //         case SAVE_ACCOUNTING_DETAILS:
    //             return SaveAccountingDetails(action, state);

    //         case SAVE_ACCOUNTING_DETAILS_WARNINGS:
    //             return SaveAccountingDetailsWarnings(action, state);

    //         case SAVE_EDITED_ACCOUNTING_DETAILS:
    //             return SaveEditedAccountingDetails(action, state);

    //         case SAVE_EDITED_ACCOUNTING_DETAILS_WARNINGS:
    //             return SaveEditedAccountingDetailsWarnings(action, state);


    //         case SEND_RECIEPT_DETAILS_TO_DB_SUCCESS:
    //             // // //console.log("In reducer Values are")
    //             return {
    //                 ...state, AccountingDetails: {
    //                     ...state.AccountingDetails,
    //                     sendDetailsToDbSuccess: true
    //                 }
    //             }
    //         case SEND_RECIEPT_DETAILS_TO_DB_FAIL:
    //             // // //console.log("In reducer Values are")
    //             return {
    //                 ...state, AccountingDetails: {
    //                     ...state.AccountingDetails,
    //                     sendDetailsToDbSuccess: false
    //                 }
    //             }
    //         case SEND_EDITED_RECIEPT_DETAILS_TO_DB_SUCCESS:
    //             // // //console.log("In reducer Values are")
    //             return {
    //                 ...state, AccountingDetails: {
    //                     ...state.AccountingDetails,
    //                     sendDetailsToDbSuccess: true
    //                 }
    //             }
    //         case SEND_EDITED_RECIEPT_DETAILS_TO_DB_FAIL:
    //             // // //console.log("In reducer Values are")
    //             return {
    //                 ...state, AccountingDetails: {
    //                     ...state.AccountingDetails,
    //                     sendDetailsToDbSuccess: false
    //                 }
    //             }
    //         case GET_DEPOSIT_MODE_LISTS_SUCCESS:
    //             // //console.log("In reducer Values are")
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     // SlipDetails:
    //                     // {
    //                     //     ...state.DespositSlipComp.SlipDetails,
    //                     //     tenantDepositMode:"tenantDepositMode"
    //                     // } ,
    //                     tenantDepositMode: action.payload.data
    //                 }
    //             }

    //         case GET_USER_BANK_BRANCHS_BY_CITY_ID_SUCCESS:
    //             // //console.log("In reducer Values are")
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     branchsbyCityList: action.payload.data,
    //                     loadBranchsList: false
    //                 }
    //             }

    //         case GET_BANK_ACCOUNT_NUMBER_AND_NAME_SUCCESS:
    //             // //console.log("In reducer Values are")
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     bankAccountNoAndNamesList: action.payload.data
    //                 }
    //             }

    //         case GET_ALL_CDM_STUCK_LIST_SUCCESS:
    //             // //console.log("In reducer Values are")
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     CDMReportList: action.payload.data,
    //                     // isSendDepositSuccess:true
    //                 },
    //                 ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: false,
    //                 }
    //             }

    //         case GET_CDM_STUCK_DETAILS_SUCCESS:
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     SlipDetails: action.payload.data,
    //                     isGetDepositedSlipSuccess: true,
    //                 }
    //             }
    //         case GET_DEPOSITS_DETAILS_FROM_DB_SUCCESS:
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     // SlipDetails:action.payload.item,
    //                     SlipDetails: {
    //                         ...state.DespositSlipComp.SlipDetails,
    //                         slipImage: action.payload.data.base64Image,
    //                         remarks: action.payload.data.remarks,
    //                         amount: action.payload.data.amount,
    //                         dateOfDeposit: action.payload.item.dateOfDeposit,
    //                         id: action.payload.item.id,
    //                         tenantDepositMode: action.payload.item.tenantDepositMode,
    //                         tenantName: action.payload.item.tenantName,
    //                         tenantType: action.payload.item.tenantType,
    //                         referenceNumber: action.payload.data.cdmDepositReferenceNo,
    //                         onlineTransfer: action.payload.data.onlineTransferReferenceNo,
    //                         toBankAccountNo: action.payload.data.toBankAccountNumber,
    //                         chequeDetails: {
    //                             number: action.payload.data.chequeNumber,
    //                             date: action.payload.data.chequeDate,
    //                         }
    //                     },
    //                     isGetDepositedSlipSuccess: true,
    //                 }
    //             }
    //         case SEND_SLIP_DETAILS_TO_DB_SUCCESS:
    //             if (action.payload.field == "addReportToList") {
    //                 return {
    //                     ...state, DespositSlipComp: {
    //                         ...state.DespositSlipComp,
    //                         CDMReportList: [...state.DespositSlipComp.CDMReportList,
    //                         action.payload.value],
    //                         isSendDepositSuccess: true
    //                     },
    //                     ProgressIndicator: {
    //                         ...state.ProgressIndicator,
    //                         InProgress: false
    //                     }
    //                 }
    //             } else {
    //                 return {
    //                     ...state, DespositSlipComp: {
    //                         ...state.DespositSlipComp,
    //                         slipList: [...state.DespositSlipComp.slipList, action.payload.value],
    //                         isSendDepositSuccess: true
    //                     }
    //                 }
    //             }




    //         case SAVE_DEPOSIT_SLIP_LIST_ITEMS:
    //             return AddDetailsToListItem(action, state);

    //         case SAVE_DEPOSIT_SLIP_LIST_ITEMS_NEW:
    //             return AddDetailsToListItemNew(action, state);

    //         case DELETE_BANK_DEPOSIT_SLIP_SUCCESS:
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     isDeleteDepositSlipSuccess: true,
    //                     depositedSlipsList: state.DespositSlipComp.depositedSlipsList.filter(function (item, i) {
    //                         return item.id != action.payload
    //                     }),
    //                 }
    //             }

    //         case SEND_DEPOSIT_SLIP_DETAILS_TO_DB_SUCCESS:
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     isSubmitDepositSlipSuccess: action.payload.isSubmitDepositSlipSuccess
    //                 },
    //                 ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: false
    //                 }
    //             }
    //         case SEND_EDITED_DEPOSIT_SLIP_DETAILS_TO_DB_SUCCESS:
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     isSubmitDepositSlipSuccess: action.payload.isSubmitDepositSlipSuccess
    //                 },
    //                 ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: false
    //                 }
    //             }
    //         case SEND_EDITED_DEPOSIT_SLIP_DETAILS_TO_DB_FAIL:
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     isSubmitDepositSlipSuccess: false
    //                 },
    //                 ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: false
    //                 }
    //             }
    //         case SEND_DEPOSIT_SLIP_DETAILS_TO_DB_FAIL:
    //             return {
    //                 ...state, ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: false
    //                 }

    //             }
    //         case GET_CDM_DEPOSIT_SLIPS_LIST_SUCCESS:
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     CDMDepositSlipList: action.payload.data
    //                 },
    //                 ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: false
    //                 }
    //             }
    //         case GET_CDM_DEPOSIT_SLIPS_LIST_FAIL:
    //             return {
    //                 ...state, ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: false
    //                 }
    //             }
    //         case GET_DEPOSITED_SLIP_DETAILS_FROM_DB_SUCCESS:
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     depositedSlipsList: action.payload.data
    //                 },
    //                 ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: false
    //                 }
    //             }
    //         case GET_DEPOSITED_SLIP_DETAILS_FROM_DB_FAIL:
    //             return {
    //                 ...state, ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: false
    //                 }
    //             }
    //         case GET_DEPOSITED_SLIP_DETAILS_FROM_DB_SUCCESS_TENANT:
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     depositDepositListTenant: action.payload.data
    //                 },
    //                 ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: false
    //                 }
    //             }

    //         case GET_DEPOSITED_SLIP_SUCCESS:
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     // getDepositSlipVMTenantAmounts: action.payload.data,
    //                     DespositListNew: action.payload.data,
    //                     approveStatus: action.payload.Approved,
    //                     // BankSlipTxId: action.payload.data.bankSlipTxId,
    //                     // DepositSlipImage: action.payload.item.imageFileName,
    //                     isGetDepositedSlipSuccess: true,
    //                     // id:action.payload.item.id,
    //                     depositSlipId: action.payload.id

    //                 },
    //                 ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: false
    //                 }

    //             }
    //             case REJECT_DEPOSIT_SLIP_SUCCESS:
    //                 return {
    //                     ...state, DespositSlipComp: {
    //                         ...state.DespositSlipComp,
    //                         isApproveDepositSlipSuccess: true,
    //                         approveStatus: false,
    //                         openClearModal: false,
    //                         approveWarning: ""
    //                     },

    //                     ProgressIndicator: {
    //                         ...state.ProgressIndicator,
    //                         InProgress: false
    //                     }
    //                 }
    //             case REJECT_DEPOSIT_SLIP_FAIL:
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     isApproveDepositSlipSuccess: false,
    //                     approveWarning: action.payload
    //                 },

    //                 ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: false
    //                 }
    //             }
    //         case APPROVE_DEPOSIT_SLIP_SUCCESS:
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     isApproveDepositSlipSuccess: true,
    //                     approveStatus: false,
    //                     openClearModal: false,
    //                     approveWarning: ""
    //                 },

    //                 ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: false
    //                 }
    //             }
    //         case APPROVE_DEPOSIT_SLIP_FAIL:
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     isApproveDepositSlipSuccess: false,
    //                     approveWarning: action.payload
    //                 },

    //                 ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: false
    //                 }
    //             }
    //         case APPROVE_DEPOSIT_SUCCESS:
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     isApproveDepositSuccess: true,
    //                 },

    //                 ProgressIndicator: {
    //                     ...state.ProgressIndicator,
    //                     InProgress: false
    //                 }
    //             }


    //         //#endregion  RATECARD Final

    //         default: {
    //             return state;
    //         }
    //     }

    // }

    // // function RCValidationsInitialState() {
    // //     return {
    // //         RateCardValidations: {
    // //             validateSlabs: false,
    // //             slabsValidationResult: 'Checking',
    // //         },
    // //     }
    // // }

    // function SaveRateCardValues(action, state) {
    //     if (action.payload.field === 'From') {
    //         return {
    //             ...state, RateCard: {
    //                 ...state.RateCard,
    //                 RCfilterFrom: action.payload.value,
    //                 SetValuesModalData: {
    //                     ...state.RateCard.SetValuesModalData,
    //                     From: action.payload.value
    //                 },
    //                 Ratecardwarnings: {
    //                     fromWarning: "",
    //                     toWarning: "",
    //                     dailyPayoutWarning: "",
    //                     monthlyPayoutWarning: "",
    //                     rateWarning: "",
    //                 }
    //             },

    //         }
    //     } else if (action.payload.field === 'To') {
    //         return {
    //             ...state, RateCard: {
    //                 ...state.RateCard,
    //                 RCfilterTo: action.payload.value,
    //                 SetValuesModalData: {
    //                     ...state.RateCard.SetValuesModalData,
    //                     To: action.payload.value
    //                 }
    //             }
    //         }
    //     } else if (action.payload.field === 'rate') {
    //         return {
    //             ...state, RateCard: {
    //                 ...state.RateCard,
    //                 SetValuesModalData: {
    //                     ...state.RateCard.SetValuesModalData,
    //                     rate: action.payload.value
    //                 }
    //             }
    //         }
    //     }
    //     else if (action.payload.field === 'rateType') {
    //         return {
    //             ...state, RateCard: {
    //                 ...state.RateCard,
    //                 SetValuesModalData: {
    //                     ...state.RateCard.SetValuesModalData,
    //                     rateType: action.payload.value
    //                 }
    //             }
    //         }
    //     } else if (action.payload.field === 'dailyPayout') {
    //         return {
    //             ...state, RateCard: {
    //                 ...state.RateCard,
    //                 SetValuesModalData: {
    //                     ...state.RateCard.SetValuesModalData,
    //                     dailyPayout: action.payload.value
    //                 }
    //             }
    //         }
    //     }
    //     else if (action.payload.field === 'dailyPayoutType') {
    //         return {
    //             ...state, RateCard: {
    //                 ...state.RateCard,
    //                 SetValuesModalData: {
    //                     ...state.RateCard.SetValuesModalData,
    //                     dailyPayoutType: action.payload.value
    //                 }
    //             }
    //         }
    //     } else if (action.payload.field === 'monthlyPayout') {
    //         return {
    //             ...state, RateCard: {
    //                 ...state.RateCard,
    //                 SetValuesModalData: {
    //                     ...state.RateCard.SetValuesModalData,
    //                     monthlyPayout: action.payload.value
    //                 }
    //             }
    //         }
    //     }
    //     else if (action.payload.field === 'monthlyPayoutType') {
    //         return {
    //             ...state, RateCard: {
    //                 ...state.RateCard,
    //                 SetValuesModalData: {
    //                     ...state.RateCard.SetValuesModalData,
    //                     monthlyPayoutType: action.payload.value
    //                 }
    //             }
    //         }
    //     }
    // }

    // function Ratecard_data_on_createRatecard(action, state) {

    //     return action.payload.field === 'RateCardColor' ?
    //         {
    //             ...state, RateCard: {
    //                 ...state.RateCard,
    //                 RateCardColor: action.payload.value.color
    //             }
    //         } : action.payload.field === 'RateCardTitle' ?
    //             {
    //                 ...state, RateCard: {
    //                     ...state.RateCard,
    //                     RateCardTitle: action.payload.value
    //                 }
    //             } : action.payload.field === 'RateCardDescription' ?
    //                 {
    //                     ...state, RateCard: {
    //                         ...state.RateCard,
    //                         RateCardDescription: action.payload.value
    //                     }
    //                 }
    //                 : action.payload.field === "CurrentPage" ?
    //                     {
    //                         ...state, RateCard: {
    //                             ...state.RateCard,
    //                             currentPage: action.payload.value
    //                         }
    //                     }
    //                     :
    //                     null
    // }

    // function ChangeRateCardValues(action, state) {

    //     // //console.log(" In Function Of Reducer / / / /  ");
    //     // //console.log(state.RateCard.CreateRateCard[action.payload.indx]);
    //     // //console.log(state.RateCard.CreateRateCard[action.payload.indx].rate);
    //     // // //console.log()

    //     return {
    //         ...state, RateCard: {
    //             ...state.RateCard,
    //             // CreateRateCard: action.payload.field === 'rate' ? [...state.RateCard.CreateRateCard, ...state.RateCard.CreateRateCard[action.payload.indx].rate = action.payload.value]
    //             //     : action.payload.field === 'rateType' ? [...state.RateCard.CreateRateCard, ...state.RateCard.CreateRateCard[action.payload.indx].rateType = action.payload.value]
    //             //         : action.payload.field === 'dailyPayout' ? [...state.RateCard.CreateRateCard, ...state.RateCard.CreateRateCard[action.payload.indx].dailyPayout = action.payload.value]
    //             //             : action.payload.field === 'dailyPayoutType' ? [...state.RateCard.CreateRateCard, ...state.RateCard.CreateRateCard[action.payload.indx].dailyPayoutType = action.payload.value]
    //             //                 : action.payload.field === 'monthlyPayout' ? [...state.RateCard.CreateRateCard, ...state.RateCard.CreateRateCard[action.payload.indx].monthlyPayout = action.payload.value]
    //             //                     : action.payload.field === 'monthlyPayoutType' ? [...state.RateCard.CreateRateCard, ...state.RateCard.CreateRateCard[action.payload.indx].monthlyPayoutType = action.payload.value]
    //             //                         : state.RateCard.CreateRateCard
    //             CreateRateCard: state.RateCard.CreateRateCard.map((slab, i) => {

    //                 if (slab.slabId === parseInt(action.payload.slabId)) {
    //                     if (action.payload.field === 'rateType') {
    //                         return { ...slab, ...slab.rateType = action.payload.value }
    //                     } else if (action.payload.field === 'dailyPayoutType') {
    //                         return { ...slab, ...slab.dailyPayoutType = action.payload.value }
    //                     } else if (action.payload.field === 'monthlyPayoutType') {
    //                         return { ...slab, ...slab.monthlyPayoutType = action.payload.value }
    //                     } else if (action.payload.field === 'rate') {
    //                         return { ...slab, ...slab.rate = action.payload.value }
    //                     } else if (action.payload.field === 'dailyPayout') {
    //                         return { ...slab, ...slab.dailyPayout = action.payload.value }
    //                     } else if (action.payload.field === 'monthlyPayout') {
    //                         return { ...slab, ...slab.monthlyPayout = action.payload.value }
    //                     }

    //                 } else return {
    //                     ...slab
    //                 }
    //             }
    //             ),
    //             RateCardValidations: {
    //                 ...state.RateCard.RateCardValidations,
    //                 sendRCToServer: false,
    //             },
    //         }
    //     }

    // }

    // function SaveMtTransferDetails(action, state) {
    //     if (action.payload.field === 'TransMode') {
    //         return {
    //             ...state, MTTransDetails: {
    //                 ...state.MTTransDetails,
    //                 TransMode: action.payload.value,
    //             },
    //         }
    //     } else if (action.payload.field === 'TransAmount') {
    //         return {
    //             ...state, MTTransDetails: {
    //                 ...state.MTTransDetails,
    //                 TransAmount: action.payload.value,
    //                 Get_Additional_Charges: true
    //                 // AdditionalCharges: Number(action.payload.value )/100,
    //                 // TotalAmount: Number(action.payload.value) + Number(action.payload.value)/100,
    //             },
    //         }
    //     } else if (action.payload.field === 'AdditionalCharges') {
    //         return {
    //             ...state, MTTransDetails: {
    //                 ...state.MTTransDetails,
    //                 AdditionalCharges: Number(action.payload.value) / 100,

    //             },
    //         }
    //     } else if (action.payload.field === 'TotalAmount') {
    //         return {
    //             ...state, MTTransDetails: {
    //                 ...state.MTTransDetails,
    //                 TotalAmount: action.payload.value
    //             },
    //         }
    //     } else if (action.payload.field === 'Status') {
    //         return {
    //             ...state, MTTransDetails: {
    //                 ...state.MTTransDetails,
    //                 ApiResult: {
    //                     ...state.MTTransDetails.ApiResult,
    //                     transactionStatus: ""
    //                 },
    //             }
    //         }
    //     } else if (action.payload.field === 'print') {
    //         return {
    //             ...state, MTTransDetails: {
    //                 ...state.MTTransDetails,
    //                 print: action.payload.value
    //             },
    //         }
    //     }
    // }


    // function SaveBeneInformation(action, state) {
    //     if (action.payload.field === 'fullName') {
    //         return {
    //             ...state, MTBeneficiary: {
    //                 ...state.MTBeneficiary,
    //                 BeneDetails: {
    //                     ...state.MTBeneficiary.BeneDetails,
    //                     fullName: action.payload.value
    //                 }, warningsOnBeneDetails: {
    //                     ...state.MTBeneficiary.warningsOnBeneDetails,
    //                     fullName: ''
    //                 },
    //             }
    //         }
    //     } else if (action.payload.field === 'mobileNo') {
    //         return {
    //             ...state, MTBeneficiary: {
    //                 ...state.MTBeneficiary,
    //                 BeneDetails: {
    //                     ...state.MTBeneficiary.BeneDetails,
    //                     mobileNo: action.payload.value
    //                 }, warningsOnBeneDetails: {
    //                     ...state.MTBeneficiary.warningsOnBeneDetails,
    //                     mobileNo: ''
    //                 },
    //             }
    //         }
    //     } else if (action.payload.field === 'acccountNo') {
    //         return {
    //             ...state, MTBeneficiary: {
    //                 ...state.MTBeneficiary,
    //                 BeneDetails: {
    //                     ...state.MTBeneficiary.BeneDetails,
    //                     acccountNo: action.payload.value
    //                 }, warningsOnBeneDetails: {
    //                     ...state.MTBeneficiary.warningsOnBeneDetails,
    //                     acccountNo: ''
    //                 },

    //             }
    //         }
    //     } else if (action.payload.field === 'ConfirmaccountNo') {
    //         return {
    //             ...state, MTBeneficiary: {
    //                 ...state.MTBeneficiary,
    //                 BeneDetails: {
    //                     ...state.MTBeneficiary.BeneDetails,
    //                     ConfirmaccountNo: action.payload.value
    //                 }, warningsOnBeneDetails: {
    //                     ...state.MTBeneficiary.warningsOnBeneDetails,
    //                     ConfirmaccountNo: ''
    //                 },
    //             }
    //         }
    //     } else if (action.payload.field === 'IFSCCode') {
    //         return {
    //             ...state, MTBeneficiary: {
    //                 ...state.MTBeneficiary,
    //                 BeneDetails: {
    //                     ...state.MTBeneficiary.BeneDetails,
    //                     IFSCCode: action.payload.value,
    //                     ifsc: action.payload.value,
    //                 },
    //                warningsOnBeneDetails: {
    //                     ...state.MTBeneficiary.warningsOnBeneDetails,
    //                     IFSCCode: ''
    //                 },
    //             }
    //         }
    //     } else if (action.payload.field === 'IFSCType') {
    //         return {
    //             ...state, MTBeneficiary: {
    //                 ...state.MTBeneficiary,
    //                 BeneDetails: {
    //                     ...state.MTBeneficiary.BeneDetails,
    //                     IFSCType: action.payload.value,

    //                 }, warningsOnBeneDetails: {
    //                     ...state.MTBeneficiary.warningsOnBeneDetails,
    //                     IFSCCode: ''
    //                 },
    //             }
    //         }
    //     } else if (action.payload.field === 'selectedBankId') {
    //         return {
    //             ...state, MTBeneficiary: {
    //                 ...state.MTBeneficiary,
    //                 BankDetails: {
    //                     ...state.MTBeneficiary.BankDetails,
    //                     selectedBankId: action.payload.value,

    //                 }
    //             }
    //         }
    //     } else if (action.payload.field === 'ValidateCheckBox') {
    //         return {
    //             ...state, MTBeneficiary: {
    //                 ...state.MTBeneficiary,
    //                 BeneDetails: {
    //                     ...state.MTBeneficiary.BeneDetails,
    //                     bankAccountVerified: action.payload.value
    //                 },
    //             }
    //         }
    //     }
    // }

    // function SaveTransactionLedgerDetails(action, state) {
    //     if (action.payload.field === 'AccountType') {
    //         return {
    //             ...state, TransactionLedgerDetails: {
    //                 ...state.TransactionLedgerDetails,
    //                 AccountType: action.payload.value,
    //                 // AccountName: 0,               
    //             }
    //         }
    //     } else if (action.payload.field === 'AccountName') {
    //         return {
    //             ...state, TransactionLedgerDetails: {
    //                 ...state.TransactionLedgerDetails,
    //                 AccountName: action.payload.value,
    //                 // AccountNameDup: action.payload.value,

    //             }
    //         }
    //     } else if (action.payload.field === 'UserType') {
    //         return {
    //             ...state, TransactionLedgerDetails: {
    //                 ...state.TransactionLedgerDetails,
    //                 UserType: action.payload.value,

    //             }
    //         }
    //     } else if (action.payload.field === 'accountId') {
    //         return {
    //             ...state, TransactionLedgerDetails: {
    //                 ...state.TransactionLedgerDetails,
    //                 accountId: action.payload.value,

    //             }
    //         }
    //     } else if (action.payload.field === 'fromDate') {
    //         return {
    //             ...state, TransactionLedgerDetails: {
    //                 ...state.TransactionLedgerDetails,
    //                 fromDate: action.payload.value,
    //             }
    //         }
    //     } else if (action.payload.field === 'toDate') {
    //         return {
    //             ...state, TransactionLedgerDetails: {
    //                 ...state.TransactionLedgerDetails,
    //                 toDate: action.payload.value,
    //             }
    //         }
    //     } else if (action.payload.field === 'TxnType') {
    //         return {
    //             ...state, TransactionLedgerDetails: {
    //                 ...state.TransactionLedgerDetails,
    //                 TxnType: action.payload.value,
    //             }
    //         }
    //     } else if (action.payload.field === 'TxnStatus') {
    //         return {
    //             ...state, TransactionLedgerDetails: {
    //                 ...state.TransactionLedgerDetails,
    //                 TxnStatus: action.payload.value,
    //             }
    //         }
    //     }else if (action.payload.field === 'TxnPendingStatus') {
    //         return {
    //             ...state, TransactionLedgerDetails: {
    //                 ...state.TransactionLedgerDetails,
    //                 TxnPendingStatus: action.payload.value,
    //             }
    //         }
    //     }

    // }

    // function ResetBankAndApiDetails(action, state) {

    //     return {
    //         ...state, MTBeneficiary: {
    //             ...state.MTBeneficiary,
    //             ApiDetails: {
    //                 ...state.MTBeneficiary.ApiDetails,
    //                 name: "",
    //                 baseUrl: "",
    //                 code: ""
    //             },
    //             ApiDetailsWarnings: {
    //                 ...state.MTBeneficiary.ApiDetailsWarnings,
    //                 name: "",
    //                 baseUrl: "",
    //                 code: ""
    //             },
    //             ApiDetailsToEdit: {
    //                 ...state.MTBeneficiary.ApiDetailsToEdit,
    //                 name: "",
    //                 baseUrl: "",
    //                 code: ""
    //             },
    //             ApiDetailsToEditWarnings: {
    //                 ...state.MTBeneficiary.ApiDetailsToEditWarnings,
    //                 name: "",
    //                 baseUrl: "",
    //                 code: ""
    //             },
    //             BankDetails: {
    //                 ...state.MTBeneficiary.BankDetails,
    //                 accountName: '',
    //                 accountNumber: '',
    //                 amount: '',
    //                 SelectedBranchId: '',
    //                 selectedBankId: '',
    //                 IFSCCode: '',
    //                 SelectedCityId: '',
    //                 SelectedStateId: '',
    //                 selectedBankBranch: ''
    //             },
    //             BankDetailsWarnings: {
    //                 ...state.MTBeneficiary.BankDetailsWarnings,
    //                 accountName: '',
    //                 accountNumber: '',
    //                 amount: '',
    //                 Bank: '',
    //                 Branch: '',
    //                 // IFSCCode: '',
    //                 // SelectedCityId: '',
    //                 // SelectedStateId: '',
    //                 // selectedBankBranch: ''
    //             },
    //             BankDetailsToEditWarnings: {
    //                 ...state.MTBeneficiary.BankDetailsToEditWarnings,
    //                 accountName: '',
    //                 accountNumber: '',
    //                 currentBalance: '',
    //             }
    //         }
    //     }
    // }

    // function SaveBankDetails(action, state) {
    //     if (action.payload.field === 'AccountName') {
    //         return {
    //             ...state, MTBeneficiary: {
    //                 ...state.MTBeneficiary,
    //                 BankDetails: {
    //                     ...state.MTBeneficiary.BankDetails,
    //                     accountName: action.payload.value
    //                 }, BankDetailsWarnings: {
    //                     ...state.MTBeneficiary.BankDetailsWarnings,
    //                     accountName: ''
    //                 },
    //             }
    //         }
    //     } else
    //         if (action.payload.field === 'AccountNumber') {
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BankDetails: {
    //                         ...state.MTBeneficiary.BankDetails,
    //                         accountNumber: action.payload.value
    //                     }, BankDetailsWarnings: {
    //                         ...state.MTBeneficiary.BankDetailsWarnings,
    //                         accountNumber: ''
    //                     },
    //                 }
    //             }
    //         } else if (action.payload.field === 'Amount') {

    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BankDetails: {
    //                         ...state.MTBeneficiary.BankDetails,
    //                         amount: action.payload.value
    //                     }, BankDetailsWarnings: {
    //                         ...state.MTBeneficiary.BankDetailsWarnings,
    //                         amount: ''
    //                     },
    //                 }
    //             }
    //         } else if (action.payload.field === 'amountInWords') {

    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BankDetails: {
    //                         ...state.MTBeneficiary.BankDetails,
    //                         amountInWords: action.payload.value
    //                     }
    //                 }
    //             }
    //         } else if (action.payload.field === 'BankName') {

    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BankDetails: {
    //                         ...state.MTBeneficiary.BankDetails,
    //                         bankName: action.payload.value
    //                     }
    //                 }
    //             }
    //         } else if (action.payload.field === 'BranchName') {

    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BankDetails: {
    //                         ...state.MTBeneficiary.BankDetails,
    //                         branchName: action.payload.value
    //                     }
    //                 }
    //             }
    //         } else if (action.payload.field === 'StateName') {

    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BankDetails: {
    //                         ...state.MTBeneficiary.BankDetails,
    //                         stateName: action.payload.value
    //                     }
    //                 }
    //             }
    //         } else if (action.payload.field === 'CityName') {

    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BankDetails: {
    //                         ...state.MTBeneficiary.BankDetails,
    //                         cityName: action.payload.value
    //                     }
    //                 }
    //             }
    //         } else if (action.payload.field === 'IFSC') {

    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BankDetails: {
    //                         ...state.MTBeneficiary.BankDetails,
    //                         ifscCode: action.payload.value
    //                     }
    //                 }
    //             }
    //         }


    // }

    // function SaveBankDetailsWarnings(action, state) {
    //     if (action.payload.field === 'accountName') {
    //         return {
    //             ...state, MTBeneficiary: {
    //                 ...state.MTBeneficiary,
    //                 BankDetailsWarnings: {
    //                     ...state.MTBeneficiary.BankDetailsWarnings,
    //                     accountName: action.payload.value
    //                 }
    //             }
    //         }
    //     } else
    //         if (action.payload.field === 'accountNumber') {
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BankDetailsWarnings: {
    //                         ...state.MTBeneficiary.BankDetailsWarnings,
    //                         accountNumber: action.payload.value
    //                     }
    //                 }
    //             }
    //         } else if (action.payload.field === 'amount') {

    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BankDetailsWarnings: {
    //                         ...state.MTBeneficiary.BankDetailsWarnings,
    //                         amount: action.payload.value
    //                     }
    //                 }
    //             }
    //         } else if (action.payload.field === 'Bank') {

    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BankDetailsWarnings: {
    //                         ...state.MTBeneficiary.BankDetailsWarnings,
    //                         Bank: action.payload.value
    //                     }
    //                 }
    //             }
    //         } else if (action.payload.field === 'Branch') {

    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BankDetailsWarnings: {
    //                         ...state.MTBeneficiary.BankDetailsWarnings,
    //                         Branch: action.payload.value
    //                     }
    //                 }
    //             }
    //         }


    // }

    // function SaveBankDetailsToEdit(action, state) {
    //     if (action.payload.field === 'AccountName') {
    //         return {
    //             ...state, MTBeneficiary: {
    //                 ...state.MTBeneficiary,
    //                 BankDetailsToEdit: {
    //                     ...state.MTBeneficiary.BankDetailsToEdit,
    //                     name: action.payload.value
    //                 }, BankDetailsToEditWarnings: {
    //                     ...state.MTBeneficiary.BankDetailsToEditWarnings,
    //                     accountName: ''
    //                 },
    //             }
    //         }
    //     } if (action.payload.field === 'BankName') {
    //         return {
    //             ...state, MTBeneficiary: {
    //                 ...state.MTBeneficiary,
    //                 BankDetailsToEdit: {
    //                     ...state.MTBeneficiary.BankDetailsToEdit,
    //                     bankName: action.payload.value
    //                 }, warningsOnBankDetails: {
    //                     ...state.MTBeneficiary.warningsOnBeneDetails,
    //                     bankName: ''
    //                 },
    //             }
    //         }
    //     } else if (action.payload.field === 'EditBankDetails') {
    //         return {
    //             ...state, MTBeneficiary: {
    //                 ...state.MTBeneficiary,
    //                 BankDetailsToEdit: {
    //                     ...state.MTBeneficiary.BankDetailsToEdit,
    //                     accountNumber: action.payload.value.accountNumber,
    //                     bankAccountId: action.payload.value.bankAccountId,
    //                     name: action.payload.value.accountName,
    //                     currentBalance: action.payload.value.currentBalance,
    //                     bankName: action.payload.value.bankName,
    //                     accountingId: action.payload.value.accountingId,
    //                     branchName: action.payload.value.branchName,
    //                 }
    //             }
    //         }
    //     } else
    //         if (action.payload.field === 'AccountNumber') {
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BankDetailsToEdit: {
    //                         ...state.MTBeneficiary.BankDetailsToEdit,
    //                         accountNumber: action.payload.value
    //                     }, BankDetailsToEditWarnings: {
    //                         ...state.MTBeneficiary.BankDetailsToEditWarnings,
    //                         accountNumber: ''
    //                     },
    //                 }
    //             }
    //         } else if (action.payload.field === 'Amount') {

    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BankDetailsToEdit: {
    //                         ...state.MTBeneficiary.BankDetailsToEdit,
    //                         currentBalance: action.payload.value
    //                     }, BankDetailsToEditWarnings: {
    //                         ...state.MTBeneficiary.BankDetailsToEditWarnings,
    //                         currentBalance: ''
    //                     },
    //                 }
    //             }
    //         } else if (action.payload.field === 'BankAccountID') {

    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BankDetailsToEdit: {
    //                         ...state.MTBeneficiary.BankDetailsToEdit,
    //                         bankAccountID: action.payload.value
    //                     }, warningsOnBankDetails: {
    //                         ...state.MTBeneficiary.warningsOnBeneDetails,
    //                         bankAccountID: ''
    //                     },
    //                 }
    //             }
    //         } else if (action.payload.field === 'openDeactivateModal') {

    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BankDetailsToEdit: {
    //                         ...state.MTBeneficiary.BankDetailsToEdit,
    //                         openDeactivateModal: action.payload.value
    //                     }
    //                 }
    //             }
    //         } else if (action.payload.field === 'accountStatus') {
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BankDetailsToEdit: {
    //                         ...state.MTBeneficiary.BankDetailsToEdit,
    //                         isAccountActive: action.payload.value
    //                     }
    //                 }
    //             }
    //         } else if (action.payload.field === 'amountInWords') {
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BankDetailsToEdit: {
    //                         ...state.MTBeneficiary.BankDetailsToEdit,
    //                         amountInWords: action.payload.value
    //                     }
    //                 }
    //             }
    //         } else if (action.payload.field === 'accountingId') {
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BankDetailsToEdit: {
    //                         ...state.MTBeneficiary.BankDetailsToEdit,
    //                         accountingId: action.payload.value
    //                     }
    //                 }
    //             }
    //         }


    // }



    // function SaveBankDetailsToEditWarnings(action, state) {
    //     if (action.payload.field === 'accountName') {
    //         return {
    //             ...state, MTBeneficiary: {
    //                 ...state.MTBeneficiary,
    //                 BankDetailsToEditWarnings: {
    //                     ...state.MTBeneficiary.BankDetailsToEditWarnings,
    //                     accountName: action.payload.value
    //                 },
    //             }
    //         }
    //     } else
    //         if (action.payload.field === 'accountNumber') {
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BankDetailsToEditWarnings: {
    //                         ...state.MTBeneficiary.BankDetailsToEditWarnings,
    //                         accountNumber: action.payload.value
    //                     }
    //                 }
    //             }
    //         } else if (action.payload.field === 'amount') {

    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     BankDetailsToEditWarnings: {
    //                         ...state.MTBeneficiary.BankDetailsToEditWarnings,
    //                         currentBalance: action.payload.value
    //                     }
    //                 }
    //             }
    //         }

    // }


    // function SaveAdminAPIDetails(action, state) {
    //     if (action.payload.field === 'Name') {
    //         return {
    //             ...state, MTBeneficiary: {
    //                 ...state.MTBeneficiary,
    //                 ApiDetails: {
    //                     ...state.MTBeneficiary.ApiDetails,
    //                     name: action.payload.value
    //                 },
    //                 ApiDetailsWarnings: {
    //                     ...state.MTBeneficiary.ApiDetailsWarnings,
    //                     name: ""
    //                 }
    //             }
    //         }
    //     } else
    //         if (action.payload.field === 'Code') {
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,

    //                     ApiDetails: {
    //                         ...state.MTBeneficiary.ApiDetails,
    //                         code: action.payload.value
    //                     }, ApiDetailsWarnings: {
    //                         ...state.MTBeneficiary.ApiDetailsWarnings,
    //                         code: ""
    //                     }
    //                 }
    //             }
    //         } else if (action.payload.field === 'baseUrl') {

    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     ApiDetails: {
    //                         ...state.MTBeneficiary.ApiDetails,
    //                         baseUrl: action.payload.value
    //                     }, ApiDetailsWarnings: {
    //                         ...state.MTBeneficiary.ApiDetailsWarnings,
    //                         baseUrl: ""
    //                     }

    //                 }
    //             }
    //         }
    // }

    // function SaveAdminApiDetailsWarnings(action, state) {
    //     if (action.payload.field === 'Name') {
    //         return {
    //             ...state, MTBeneficiary: {
    //                 ...state.MTBeneficiary,
    //                 ApiDetailsWarnings: {
    //                     ...state.MTBeneficiary.ApiDetailsWarnings,
    //                     name: action.payload.value
    //                 }
    //             }
    //         }
    //     } else
    //         if (action.payload.field === 'Code') {
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     ApiDetailsWarnings: {
    //                         ...state.MTBeneficiary.ApiDetailsWarnings,
    //                         code: action.payload.value
    //                     }
    //                 }
    //             }
    //         } else if (action.payload.field === 'baseUrl') {

    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     ApiDetailsWarnings: {
    //                         ...state.MTBeneficiary.ApiDetailsWarnings,
    //                         baseUrl: action.payload.value
    //                     }
    //                 }
    //             }
    //         }
    // }


    // function SaveAdminAPIDetailsToEdit(action, state) {
    //     if (action.payload.field === 'Name') {
    //         return {
    //             ...state, MTBeneficiary: {
    //                 ...state.MTBeneficiary,
    //                 ApiDetailsToEdit: {
    //                     ...state.MTBeneficiary.ApiDetailsToEdit,
    //                     name: action.payload.value
    //                 }
    //             }
    //         }
    //     } else
    //         if (action.payload.field === 'Code') {
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     ApiDetailsToEdit: {
    //                         ...state.MTBeneficiary.ApiDetailsToEdit,
    //                         code: action.payload.value
    //                     }
    //                 }
    //             }
    //         } else if (action.payload.field === 'baseUrl') {

    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     ApiDetailsToEdit: {
    //                         ...state.MTBeneficiary.ApiDetailsToEdit,
    //                         baseUrl: action.payload.value
    //                     }
    //                 }
    //             }
    //         } else if (action.payload.field === 'ApiDetails') {
    //             // //console.log("------------------------------In Save  ApiDetails")
    //             // //console.log(action.payload.value.baseUrl)
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     ApiDetailsToEdit: {
    //                         ...state.MTBeneficiary.ApiDetailsToEdit,
    //                         baseUrl: action.payload.value.baseUrl,
    //                         code: action.payload.value.code,
    //                         name: action.payload.value.name,
    //                         apiId: action.payload.value.apiId
    //                     }
    //                 }
    //             }
    //         } else if (action.payload.field === 'openDeactivateModal') {
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     ApiDetailsToEdit: {
    //                         ...state.MTBeneficiary.ApiDetailsToEdit,
    //                         openDeactivateModal: action.payload.value
    //                     }
    //                 }
    //             }
    //         } else if (action.payload.field === 'accountStatus') {

    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     ApiDetailsToEdit: {
    //                         ...state.MTBeneficiary.ApiDetailsToEdit,
    //                         isAccountActive: action.payload.value
    //                     }
    //                 }
    //             }
    //         } else if (action.payload.field === 'apiId') {
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     ApiDetailsToEdit: {
    //                         ...state.MTBeneficiary.ApiDetailsToEdit,
    //                         apiId: action.payload.value
    //                     }
    //                 }
    //             }
    //         } else if (action.payload.field === 'BankAccountID') {
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     ApiDetailsToEdit: {
    //                         ...state.MTBeneficiary.ApiDetailsToEdit,
    //                         bankAccountId: action.payload.value
    //                     }
    //                 }
    //             }
    //         } else if (action.payload.field === 'Amount') {
    //             // //console.log("In -------------------Amount")
    //             // //console.log(action.payload.value)
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     ApiDetailsToEdit: {
    //                         ...state.MTBeneficiary.ApiDetailsToEdit,
    //                         currentBalance: action.payload.value
    //                     }
    //                 }
    //             }
    //         } else if (action.payload.field === 'openAddAmountModal') {
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     ApiDetailsToEdit: {
    //                         ...state.MTBeneficiary.ApiDetailsToEdit,
    //                         openAddAmountModal: action.payload.value
    //                     }
    //                 }
    //             }
    //         } else if (action.payload.field === 'accountingId') {
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     ApiDetailsToEdit: {
    //                         ...state.MTBeneficiary.ApiDetailsToEdit,
    //                         accountingId: action.payload.value
    //                     }
    //                 }
    //             }
    //         }
    // }

    // function SaveAdminApiDetailsToEditWarnings(action, state) {
    //     if (action.payload.field === 'Name') {
    //         return {
    //             ...state, MTBeneficiary: {
    //                 ...state.MTBeneficiary,
    //                 ApiDetailsToEditWarnings: {
    //                     ...state.MTBeneficiary.ApiDetailsToEditWarnings,
    //                     name: action.payload.value
    //                 }
    //             }
    //         }
    //     } else
    //         if (action.payload.field === 'Code') {
    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     ApiDetailsToEditWarnings: {
    //                         ...state.MTBeneficiary.ApiDetailsToEditWarnings,
    //                         code: action.payload.value
    //                     }
    //                 }
    //             }
    //         } else if (action.payload.field === 'baseUrl') {

    //             return {
    //                 ...state, MTBeneficiary: {
    //                     ...state.MTBeneficiary,
    //                     ApiDetailsToEditWarnings: {
    //                         ...state.MTBeneficiary.ApiDetailsToEditWarnings,
    //                         baseUrl: action.payload.value
    //                     }
    //                 }
    //             }
    //         }
    // }
    // function warningsONBeneInformation(action, state) {
    //     if (action.payload.field === 'fullName') {
    //         return {
    //             ...state, MTBeneficiary: {
    //                 ...state.MTBeneficiary,
    //                 warningsOnBeneDetails: {
    //                     ...state.MTBeneficiary.warningsOnBeneDetails,
    //                     fullName: action.payload.value
    //                 },
    //             }
    //         }
    //     } else if (action.payload.field === 'mobileNo') {
    //         return {
    //             ...state, MTBeneficiary: {
    //                 ...state.MTBeneficiary,
    //                 warningsOnBeneDetails: {
    //                     ...state.MTBeneficiary.warningsOnBeneDetails,
    //                     mobileNo: action.payload.value
    //                 },
    //             }
    //         }
    //     } else if (action.payload.field === 'acccountNo') {
    //         return {
    //             ...state, MTBeneficiary: {
    //                 ...state.MTBeneficiary,
    //                 warningsOnBeneDetails: {
    //                     ...state.MTBeneficiary.warningsOnBeneDetails,
    //                     acccountNo: action.payload.value
    //                 },
    //             }
    //         }
    //     } else if (action.payload.field === 'ConfirmaccountNo') {
    //         return {
    //             ...state, MTBeneficiary: {
    //                 ...state.MTBeneficiary,
    //                 warningsOnBeneDetails: {
    //                     ...state.MTBeneficiary.warningsOnBeneDetails,
    //                     ConfirmaccountNo: action.payload.value
    //                 },
    //             }
    //         }
    //     } else if (action.payload.field === 'IFSCCode') {
    //         return {
    //             ...state, MTBeneficiary: {
    //                 ...state.MTBeneficiary,
    //                 warningsOnBeneDetails: {
    //                     ...state.MTBeneficiary.warningsOnBeneDetails,
    //                     IFSCCode: action.payload.value
    //                 },
    //             }
    //         }
    //     } else if (action.payload.field === 'OnFinalValidation') {
    //         return {
    //             ...state, MTBeneficiary: {
    //                 ...state.MTBeneficiary,
    //                 warningsOnBeneDetails: action.payload.value
    //             }
    //         }
    //     }
    // }


    // function SaveBeniValues_On_Transfer_or_Schedule(action, state) {

    //     if (action.payload.field === 'Depositing') {
    //         return {
    //             ...state, moneyTransfer: {
    //                 ...state.moneyTransfer,
    //                 ...state.moneyTransfer.benificiaries.map(
    //                     (beni, inx) => inx === action.payload.index ? beni.Depositing = action.payload.value : beni
    //                 )
    //             }
    //         }
    //     } else if (action.payload.field === 'Charges') {
    //         return {
    //             ...state, moneyTransfer: {
    //                 ...state.moneyTransfer,
    //                 ...state.moneyTransfer.benificiaries.map(
    //                     (beni, inx) => inx === action.payload.index ? beni.Charges = action.payload.value : beni
    //                 )
    //             }
    //         }
    //     } else if (action.payload.field === 'ImpsOrNeft') {
    //         return {
    //             ...state, moneyTransfer: {
    //                 ...state.moneyTransfer,
    //                 ...state.moneyTransfer.benificiaries.map(
    //                     (beni, inx) => inx === action.payload.index ? beni.ImpsOrNeft = action.payload.value : beni
    //                 )
    //             }
    //         }
    //     }
    // }

    // function saveCustomerIPDetails(action, state) {
    //     //console.log("-----action.payload.val")
    //     //console.log(action.payload.val)
    //     if (action.payload.field === 'fullName') {
    //         return {
    //             ...state,
    //             MTcustomer: {
    //                 ...state.MTcustomer,
    //                 fullName: action.payload.val,
    //                 CustomerDetails: {
    //                     ...state.MTcustomer.CustomerDetails,
    //                     fullName: action.payload.val
    //                 },
    //                 WarnsOnCustomerDetails: {
    //                     ...state.MTcustomer.WarnsOnCustomerDetails,
    //                     FullName: '',
    //                     statusCode: ""
    //                 }
    //             }
    //         }
    //     } else if (action.payload.field === 'dateOfBirth') {
    //         return {
    //             ...state,
    //             ...state,
    //             MTcustomer: {
    //                 ...state.MTcustomer,
    //                 CustomerDetails: {
    //                     ...state.MTcustomer.CustomerDetails,
    //                     // dateOfBirth: action.payload.val,
    //                     DOB: action.payload.val
    //                 },
    //                 WarnsOnCustomerDetails: {
    //                     ...state.MTcustomer.WarnsOnCustomerDetails,
    //                     DOB: '',
    //                     statusCode: ""
    //                 }
    //             }
    //         }
    //     } else if (action.payload.field === 'gender') {
    //         return {
    //             ...state,
    //             ...state,
    //             MTcustomer: {
    //                 ...state.MTcustomer,
    //                 CustomerDetails: {
    //                     ...state.MTcustomer.CustomerDetails,
    //                     gender: action.payload.val
    //                 }, WarnsOnCustomerDetails: {
    //                     ...state.MTcustomer.WarnsOnCustomerDetails,
    //                     Gender: '',
    //                     statusCode: ""
    //                 }
    //             }
    //         }
    //     } else if (action.payload.field === 'kyckey') {
    //         return {
    //             ...state,
    //             ...state,
    //             MTcustomer: {
    //                 ...state.MTcustomer,
    //                 CustomerDetails: {
    //                     ...state.MTcustomer.CustomerDetails,
    //                     ekyc: {
    //                         ...state.MTcustomer.CustomerDetails.ekyc,
    //                         key: action.payload.val,
    //                     },
    //                 }, WarnsOnCustomerDetails: {
    //                     ...state.MTcustomer.WarnsOnCustomerDetails,
    //                     KYCType: '',
    //                     statusCode: ""
    //                 }
    //             }
    //         }
    //     } else if (action.payload.field === 'kycvalue') {
    //         return {
    //             ...state,
    //             ...state,
    //             MTcustomer: {
    //                 ...state.MTcustomer,
    //                 CustomerDetails: {
    //                     ...state.MTcustomer.CustomerDetails,
    //                     ekyc: {
    //                         ...state.MTcustomer.CustomerDetails.ekyc,
    //                         value: action.payload.val
    //                     },
    //                 }, WarnsOnCustomerDetails: {
    //                     ...state.MTcustomer.WarnsOnCustomerDetails,
    //                     KYCReference: '',
    //                     statusCode: ""
    //                 }
    //             }
    //         }
    //     } else if (action.payload.field === 'address') {
    //         return {
    //             ...state,
    //             ...state,
    //             MTcustomer: {
    //                 ...state.MTcustomer,
    //                 CustomerDetails: {
    //                     ...state.MTcustomer.CustomerDetails,
    //                     address: action.payload.val
    //                 }, WarnsOnCustomerDetails: {
    //                     ...state.MTcustomer.WarnsOnCustomerDetails,
    //                     Address: '',
    //                     statusCode: ""
    //                 }
    //             }
    //         }
    //     } else if (action.payload.field === 'Age') {
    //         return {
    //             ...state,
    //             ...state,
    //             MTcustomer: {
    //                 ...state.MTcustomer,
    //                 CustomerDetails: {
    //                     ...state.MTcustomer.CustomerDetails,
    //                     age: action.payload.val
    //                 }
    //             }
    //         }
    //     } else if (action.payload.field === 'Status') {
    //         return {
    //             ...state,
    //             MTcustomer: {
    //                 ...state.MTcustomer,
    //                 CustomerDetails: {
    //                     ...state.MTcustomer.CustomerDetails,
    //                     age: action.payload.val
    //                 }
    //             }
    //         }
    //     }
    // }


    // function warningsoncustomeripdetails(action, state) {

    //     if (action.payload.field === 'FullName') {
    //         return {
    //             ...state,
    //             MTcustomer: {
    //                 ...state.MTcustomer,
    //                 WarnsOnCustomerDetails: {
    //                     ...state.MTcustomer.WarnsOnCustomerDetails,
    //                     FullName: action.payload.value,
    //                 },
    //             }
    //         }
    //     } else if (action.payload.field === 'MobileNo') {
    //         return {
    //             ...state,
    //             MTcustomer: {
    //                 ...state.MTcustomer,
    //                 WarnsOnCustomerDetails: {
    //                     ...state.MTcustomer.WarnsOnCustomerDetails,
    //                     customerMobile: action.payload.value,
    //                 },
    //             }
    //         }
    //     } else if (action.payload.field === 'DOB') {
    //         return {
    //             ...state,
    //             MTcustomer: {
    //                 ...state.MTcustomer,
    //                 WarnsOnCustomerDetails: {
    //                     ...state.MTcustomer.WarnsOnCustomerDetails,
    //                     DOB: action.payload.value,
    //                 },
    //             }
    //         }
    //     } else if (action.payload.field === 'Gender') {
    //         return {
    //             ...state,
    //             MTcustomer: {
    //                 ...state.MTcustomer,
    //                 WarnsOnCustomerDetails: {
    //                     ...state.MTcustomer.WarnsOnCustomerDetails,
    //                     Gender: action.payload.value,
    //                 },
    //             }
    //         }
    //     } else if (action.payload.field === 'Address') {
    //         return {
    //             ...state,
    //             MTcustomer: {
    //                 ...state.MTcustomer,
    //                 WarnsOnCustomerDetails: {
    //                     ...state.MTcustomer.WarnsOnCustomerDetails,
    //                     Address: action.payload.value,
    //                 },
    //             }
    //         }
    //     } else if (action.payload.field === 'KYCType') {
    //         return {
    //             ...state,
    //             MTcustomer: {
    //                 ...state.MTcustomer,
    //                 WarnsOnCustomerDetails: {
    //                     ...state.MTcustomer.WarnsOnCustomerDetails,
    //                     KYCType: action.payload.value,
    //                 },
    //             }
    //         }
    //     } else if (action.payload.field === 'KYCReference') {
    //         return {
    //             ...state,
    //             MTcustomer: {
    //                 ...state.MTcustomer,
    //                 WarnsOnCustomerDetails: {
    //                     ...state.MTcustomer.WarnsOnCustomerDetails,
    //                     KYCReference: action.payload.value,
    //                 },
    //             }
    //         }
    //     }

    // }

    // function OnBeneficiaryEdit(action, state) {
    //     let fieldName = action.payload.fieldName;
    //     let fieldValue = action.payload.fieldValue;
    //     if (fieldName == 'ACHolder') {
    //         return {
    //             ...state, benificiaryDetails: {
    //                 ...state.benificiaryDetails,
    //                 beneficiaryEdit: {
    //                     ...state.benificiaryDetails.beneficiaryEdit,
    //                     acctHolderName: fieldValue
    //                 }
    //             },

    //         };
    //     }
    //     else if (fieldName === 'mobileNo') {
    //         return {
    //             ...state, benificiaryDetails: {
    //                 ...state.benificiaryDetails,
    //                 beneficiaryEdit: {
    //                     ...state.benificiaryDetails.beneficiaryEdit,
    //                     acctMobileNo: fieldValue
    //                 }
    //             },
    //             ApiResponseOnCust_Details: {
    //                 ...state.ApiResponseOnCust_Details,
    //                 FocusBeniFornInput: false,
    //             },
    //         };
    //     } else if (fieldName === 'BeniAddress') {
    //         return {
    //             ...state, benificiaryDetails: {
    //                 ...state.benificiaryDetails,
    //                 beneficiaryEdit: {
    //                     ...state.benificiaryDetails.beneficiaryEdit,
    //                     BeniAddress: fieldValue
    //                 }
    //             },
    //             ApiResponseOnCust_Details: {
    //                 ...state.ApiResponseOnCust_Details,
    //                 FocusBeniFornInput: false,
    //             },
    //         };
    //     }
    //     else if (fieldName === 'transferAmount') {
    //         return {
    //             ...state, benificiaryDetails: {
    //                 ...state.benificiaryDetails,
    //                 beneficiaryEdit: {
    //                     ...state.benificiaryDetails.beneficiaryEdit,
    //                     transferAmount: fieldValue
    //                 }
    //             },
    //             ApiResponseOnCust_Details: {
    //                 ...state.ApiResponseOnCust_Details,
    //                 FocusBeniFornInput: false,
    //             },
    //         };
    //     }
    //     else if (fieldName === 'acctNo') {
    //         return {
    //             ...state, benificiaryDetails: {
    //                 ...state.benificiaryDetails,
    //                 beneficiaryEdit: {
    //                     ...state.benificiaryDetails.beneficiaryEdit,
    //                     acctNo: fieldValue
    //                 }
    //             },
    //             ApiResponseOnCust_Details: {
    //                 ...state.ApiResponseOnCust_Details,
    //                 FocusBeniFornInput: false,
    //             },
    //         };
    //     }
    //     else if (fieldName === 'confAcctNo') {
    //         return {
    //             ...state, benificiaryDetails: {
    //                 ...state.benificiaryDetails,
    //                 beneficiaryEdit: {
    //                     ...state.benificiaryDetails.beneficiaryEdit,
    //                     confAccNo: fieldValue
    //                 }
    //             },
    //             ApiResponseOnCust_Details: {
    //                 ...state.ApiResponseOnCust_Details,
    //                 FocusBeniFornInput: false,
    //             },
    //         };
    //     }
    //     else if (fieldName === 'IFSC') {
    //         return {
    //             ...state, benificiaryDetails: {
    //                 ...state.benificiaryDetails,
    //                 beneficiaryEdit: {
    //                     ...state.benificiaryDetails.beneficiaryEdit,
    //                     bankIFSC: fieldValue
    //                 }
    //             },
    //             ApiResponseOnCust_Details: {
    //                 ...state.ApiResponseOnCust_Details,
    //                 FocusBeniFornInput: false,
    //             },
    //         };
    //     }
    //     else if (fieldName === 'bankAddress') {
    //         return {
    //             ...state, benificiaryDetails: {
    //                 ...state.benificiaryDetails,
    //                 beneficiaryEdit: {
    //                     ...state.benificiaryDetails.beneficiaryEdit,
    //                     bankAddress: fieldValue
    //                 }
    //             }
    //         };
    //     }

    //     else if (fieldName === 'bankName') {
    //         // 'ANDHRA BANK', 'HDFC', 'ICICI', 'SBI'
    //         let ifscCode = fieldValue == 'ANDHRA BANK' ? 'ANDB0000000' : fieldValue == 'ICICI' ? 'ICIC0000000' :
    //             fieldValue == 'HDFC' ? 'HDFC0000000' : fieldValue == 'SBI' ? 'SBIN0000000' : '';

    //         return {
    //             ...state, benificiaryDetails: {
    //                 ...state.benificiaryDetails,
    //                 beneficiaryEdit: {
    //                     ...state.benificiaryDetails.beneficiaryEdit,
    //                     selectedBank: fieldValue, bankIFSC: ifscCode
    //                 },
    //                 beneficiaryValidations: {
    //                     ...state.benificiaryDetails.beneficiaryValidations,
    //                     isBankDefaultVisible: true
    //                 }
    //             }
    //         };

    //     }
    //     else if (fieldName === 'bankState') {
    //         return {
    //             ...state, benificiaryDetails: {
    //                 ...state.benificiaryDetails,
    //                 beneficiaryEdit: {
    //                     ...state.benificiaryDetails.beneficiaryEdit,
    //                     selectedBankState: fieldValue
    //                 },
    //                 beneficiaryValidations: {
    //                     ...state.benificiaryDetails.beneficiaryValidations,
    //                     isBankStateDefaultVisible: true
    //                 }
    //             }
    //         };

    //     }
    //     else if (fieldName === 'bankBranch') {
    //         return {
    //             ...state, benificiaryDetails: {
    //                 ...state.benificiaryDetails,
    //                 beneficiaryEdit: {
    //                     ...state.benificiaryDetails.beneficiaryEdit,
    //                     selectedBankBranch: fieldValue
    //                 },
    //                 beneficiaryValidations: {
    //                     ...state.benificiaryDetails.beneficiaryValidations,
    //                     isBankBranchDefaultVisible: true
    //                 }
    //             }
    //         };

    //     }
    // }
    // function SaveAddOrEditApiData(action, state) {

    //     // //console.log("In Reducer values are");
    //     // //console.log("field: " + action.payload.field + " and value: " + action.payload.value);

    //     switch (action.payload.field) {
    //         case 'name':
    //             return {
    //                 ...state,
    //                 APIs: {
    //                     ...state.APIs,
    //                     AddOrEditAPI: {
    //                         ...state.APIs.AddOrEditAPI,
    //                         name: action.payload.value
    //                     },
    //                     Warnings: {
    //                         name: '',
    //                     }
    //                 }
    //             }
    //         case 'beniverifycost':
    //             return {
    //                 ...state,
    //                 APIs: {
    //                     ...state.APIs,
    //                     AddOrEditAPI: {
    //                         ...state.APIs.AddOrEditAPI,
    //                         beneVerificationCharges: action.payload.value
    //                     },
    //                     Warnings: {
    //                         beneVerificationCharges: '',
    //                     }
    //                 }
    //             }

    //         case 'moneytrascharges':
    //             return {
    //                 ...state,
    //                 APIs: {
    //                     ...state.APIs,
    //                     AddOrEditAPI: {
    //                         ...state.APIs.AddOrEditAPI,
    //                         moneyTransferCharges: action.payload.value
    //                     },
    //                     Warnings: {
    //                         moneyTransferCharges: '',
    //                     }
    //                 }
    //             }
    //         case 'priority':
    //             return {
    //                 ...state,
    //                 APIs: {
    //                     ...state.APIs,
    //                     AddOrEditAPI: {
    //                         ...state.APIs.AddOrEditAPI,
    //                         priority: action.payload.value,
    //                     }
    //                 }
    //             }
    //         case 'walletminamount':
    //             return {
    //                 ...state,
    //                 APIs: {
    //                     ...state.APIs,
    //                     AddOrEditAPI: {
    //                         ...state.APIs.AddOrEditAPI,
    //                         walletMinAmountTrigger: action.payload.value
    //                     },
    //                     Warnings: {
    //                         walletMinAmountTrigger: '',
    //                     }
    //                 }
    //             }
    //         case 'baseurl':
    //             return {
    //                 ...state,
    //                 APIs: {
    //                     ...state.APIs,
    //                     AddOrEditAPI: {
    //                         ...state.APIs.AddOrEditAPI,
    //                         baseUrl: action.payload.value
    //                     },
    //                     Warnings: {
    //                         baseUrl: '',
    //                     }
    //                 }
    //             }
    //     }
    // }
    // function SaveAddOrEditApiDataWarnings(action, state) {

    //     // //console.log("In Reducer values are");
    //     // //console.log("field: " + action.payload.field + " and value: " + action.payload.value);
    //     switch (action.payload.field) {
    //         case 'name':
    //             return {
    //                 ...state,
    //                 APIs: {
    //                     ...state.APIs,
    //                     Warnings: {
    //                         ...state.APIs.Warnings,
    //                         name: action.payload.value,
    //                     }
    //                 }
    //             }
    //         case 'beniverifycost':
    //             return {
    //                 ...state,
    //                 APIs: {
    //                     ...state.APIs,
    //                     Warnings: {
    //                         ...state.APIs.Warnings,
    //                         beneVerificationCharges: action.payload.value,
    //                     }
    //                 }
    //             }

    //         case 'moneytrascharges':
    //             return {
    //                 ...state,
    //                 APIs: {
    //                     ...state.APIs,
    //                     Warnings: {
    //                         ...state.APIs.Warnings,
    //                         moneyTransferCharges: action.payload.value,
    //                     }
    //                 }
    //             }

    //         case 'walletminamount':
    //             return {
    //                 ...state,
    //                 APIs: {
    //                     ...state.APIs,
    //                     Warnings: {
    //                         ...state.APIs.Warnings,
    //                         walletMinAmountTrigger: action.payload.value,
    //                     }
    //                 }
    //             }
    //         case 'baseurl':
    //             return {
    //                 ...state,
    //                 APIs: {
    //                     ...state.APIs,
    //                     Warnings: {
    //                         ...state.APIs.Warnings,
    //                         baseUrl: action.payload.value,
    //                     }
    //                 }
    //             }
    //     }
    // }


    // function UpdateCustomerEditForm(action, state) {
    //     let fieldName = action.payload.fieldName;
    //     let fieldValue = action.payload.fieldValue;

    //     if (fieldName == 'FirstName') {
    //         return {
    //             ...state,
    //             moneyTransfer: {
    //                 ...state.moneyTransfer,
    //                 customerDetails: {
    //                     ...state.moneyTransfer.customerDetails,
    //                     firstName: fieldValue
    //                 }
    //             }
    //         }
    //     }
    //     if (fieldName == 'LastName') {
    //         return {
    //             ...state,
    //             moneyTransfer: {
    //                 ...state.moneyTransfer,
    //                 customerDetails: {
    //                     ...state.moneyTransfer.customerDetails,
    //                     lastName: fieldValue
    //                 }
    //             }
    //         }
    //     }
    //     if (fieldName == 'eKYC') {
    //         return {
    //             ...state,
    //             moneyTransfer: {
    //                 ...state.moneyTransfer,
    //                 customerDetails: {
    //                     ...state.moneyTransfer.customerDetails,
    //                     selectedEKYC: fieldValue,
    //                     eKYCInfo: ''
    //                 }
    //             }
    //         }
    //     }
    //     if (fieldName == 'eKYCInfo') {
    //         return {
    //             ...state,
    //             moneyTransfer: {
    //                 ...state.moneyTransfer,
    //                 customerDetails: {
    //                     ...state.moneyTransfer.customerDetails,
    //                     eKYCInfo: fieldValue,
    //                 }
    //             }
    //         }
    //     }
    //     if (fieldName == 'Address') {
    //         return {
    //             ...state,
    //             moneyTransfer: {
    //                 ...state.moneyTransfer,
    //                 customerDetails: {
    //                     ...state.moneyTransfer.customerDetails,
    //                     address: fieldValue
    //                 }
    //             }
    //         }
    //     }
    // }

    // function ratecardWarnings(action, state) {

    //     switch (action.payload.field) {
    //         case 'RateCardColor':
    //             return {
    //                 ...state, RateCard: {
    //                     ...state.RateCard,
    //                     Ratecardwarnings: {
    //                         ...state.RateCard.Ratecardwarnings,
    //                         colorwarning: action.payload.value,
    //                     },
    //                 }
    //             }
    //         case 'RateCardTitle':
    //             return {
    //                 ...state, RateCard: {
    //                     ...state.RateCard,
    //                     Ratecardwarnings: {
    //                         ...state.RateCard.Ratecardwarnings,
    //                         ratecardTitleWarning: action.payload.value
    //                     },
    //                 }
    //             }
    //         case 'RateCardDescription':
    //             return {
    //                 ...state, RateCard: {
    //                     ...state.RateCard,
    //                     Ratecardwarnings: {
    //                         ...state.RateCard.Ratecardwarnings,
    //                         ratecardDescWarning: action.payload.value,
    //                     },
    //                 }
    //             }
    //         case 'resetwarnings':
    //             return {
    //                 ...state, RateCard: {
    //                     ...state.RateCard,
    //                     Ratecardwarnings: {
    //                         ...state.RateCard.Ratecardwarnings,
    //                         ratecardDescWarning: action.payload.value,
    //                         ratecardTitleWarning: action.payload.value,
    //                         SlabsWarning: action.payload.value,
    //                     },
    //                 }
    //             }
    //         case 'Slabs':
    //             return {
    //                 ...state, RateCard: {
    //                     ...state.RateCard,
    //                     Ratecardwarnings: {
    //                         ...state.RateCard.Ratecardwarnings,
    //                         SlabsWarning: action.payload.value,
    //                     },
    //                 }
    //             }
    //         case 'from':
    //             return {
    //                 ...state, RateCard: {
    //                     ...state.RateCard,
    //                     Ratecardwarnings: {
    //                         ...state.RateCard.Ratecardwarnings,
    //                         fromWarning: action.payload.value,
    //                     },
    //                 }
    //             }

    //         case 'to':
    //             return {
    //                 ...state, RateCard: {
    //                     ...state.RateCard,
    //                     Ratecardwarnings: {
    //                         ...state.RateCard.Ratecardwarnings,
    //                         toWarning: action.payload.value,
    //                     },
    //                 }
    //             }
    //         case 'rate':
    //             return {
    //                 ...state, RateCard: {
    //                     ...state.RateCard,
    //                     Ratecardwarnings: {
    //                         ...state.RateCard.Ratecardwarnings,
    //                         rateWarning: action.payload.value,
    //                     },
    //                 }
    //             }

    //         case 'dailyPayout':
    //             return {
    //                 ...state, RateCard: {
    //                     ...state.RateCard,
    //                     Ratecardwarnings: {
    //                         ...state.RateCard.Ratecardwarnings,
    //                         dailyPayoutWarning: action.payload.value,

    //                     },
    //                 }
    //             }

    //         case 'monthlyPayout':
    //             return {
    //                 ...state, RateCard: {
    //                     ...state.RateCard,
    //                     Ratecardwarnings: {
    //                         ...state.RateCard.Ratecardwarnings,
    //                         monthlyPayoutWarning: action.payload.value,
    //                     },
    //                 }
    //             }
    //     }
    // }

    // function SaveDepositSlipDetails(action, state) {
    //     // //console.log("Index : " + action.payload.Index);

    //     switch (action.payload.field) {
    //         case 'AddItemNew':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     DespositListNew: action.payload.value
    //                 }
    //             }
    //         case 'RemoveItemNew':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     DespositListNew: state.DespositSlipComp.DespositListNew.filter(item => item.id !== action.payload.Index),
    //                 }
    //             }
    //         case 'AddItem':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     DespositList: action.payload.value
    //                 }
    //             }
    //         case 'RemoveItem':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     DespositList: state.DespositSlipComp.DespositList.filter(item => item.id !== action.payload.Index),
    //                 }
    //             }
    //         case 'AddSlipItem':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     SlipImageList: action.payload.value
    //                 }
    //             }
    //         case 'RemoveSlipItem':

    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     SlipImageList: state.DespositSlipComp.SlipImageList.filter(item => item.id !== action.payload.Index),
    //                 }
    //             }
    //         case 'orgName':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     orgName: action.payload.value
    //                 }
    //             }
    //         case 'Amount':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     warningsDeposit: ""
    //                 }
    //             }
    //         case 'pictureBase64':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     DepositSlipImage: action.payload.value
    //                 }
    //             }
    //         case 'TXId':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     BankSlipTxId: action.payload.value
    //                 }
    //             }
    //     }
    // }

    // function SaveDepositSlipDetailsWarnings(action, state) {

    //     switch (action.payload.field) {
    //         case 'AddItem':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     DespositList: action.payload.value
    //                 }
    //             }

    //         case 'orgID':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     depositSlipWarnings: {
    //                         ...state.DespositSlipComp.depositSlipWarnings,
    //                         orgIdWarnings: action.payload.value,

    //                     }
    //                 }
    //             }
    //         case 'Amount':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     depositSlipWarnings: {
    //                         ...state.DespositSlipComp.depositSlipWarnings,
    //                         amountWarnings: action.payload.value,
    //                     }
    //                 }
    //             }

    //         case 'pictureBase64':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,

    //                     depositSlipWarnings: {
    //                         ...state.DespositSlipComp.depositSlipWarnings,
    //                         imageWarnings: action.payload.value,
    //                     }
    //                 }
    //             }
    //         case 'TXId':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,

    //                     depositSlipWarnings: {
    //                         ...state.DespositSlipComp.depositSlipWarnings,

    //                         txIDWarnings: action.payload.value,
    //                     }
    //                 }
    //             }
    //         case 'AllWranings':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,

    //                     depositSlipWarnings: {
    //                         ...state.DespositSlipComp.depositSlipWarnings,
    //                         txIDWarnings: action.payload.value,
    //                         imageWarnings: action.payload.value,
    //                         amountWarnings: action.payload.value,
    //                         orgIdWarnings: action.payload.value
    //                     }
    //                 }
    //             }
    //         case 'warningsAll':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,

    //                     depositSlipWarnings: {
    //                         ...state.DespositSlipComp.depositSlipWarnings,
    //                         warningsAll: action.payload.value
    //                         // txIDWarnings: action.payload.value,
    //                         // imageWarnings: action.payload.value,
    //                         // amountWarnings: action.payload.value,
    //                         // orgIdWarnings: action.payload.value
    //                     }
    //                 }
    //             }
    //     }
    // }



    // function AddDetailsToListItemNew(action, state) {

    //     switch (action.payload.field) {


    //         case 'Amount':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     DespositListNew: state.DespositSlipComp.DespositListNew.map((item, i) =>
    //                         i == action.payload.i ? {
    //                             ...item,
    //                             amount: action.payload.value,

    //                         }
    //                             : item
    //                     ),

    //                 }
    //             }
    //         case 'AmountInWords':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     DespositListNew: state.DespositSlipComp.DespositListNew.map((item, i) =>
    //                         i == action.payload.i ? {
    //                             ...item,
    //                             amountInWords: action.payload.value
    //                         }
    //                             : item
    //                     ),

    //                 }
    //             }
    //         case 'modeOfDeposit':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     DespositListNew: state.DespositSlipComp.DespositListNew.map((item, i) =>
    //                         i == action.payload.i ? {
    //                             ...item,
    //                             depositModeId: action.payload.value,
    //                         }
    //                             : item
    //                     ),

    //                 }
    //             }
    //         case 'BankSlipTxId':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     DespositListNew: state.DespositSlipComp.DespositListNew.map((item, i) =>
    //                         i == action.payload.i ? {
    //                             ...item,
    //                             bankSlipTxId: action.payload.value,
    //                         }
    //                             : item
    //                     ),

    //                 }
    //             }
    //         case 'toBankAccountNo':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     DespositListNew: state.DespositSlipComp.DespositListNew.map((item, i) =>
    //                         i == action.payload.i ? {
    //                             ...item,
    //                             toBankAccountNo: action.payload.value,
    //                         }
    //                             : item
    //                     ),
    //                     itemIndex: action.payload.i,
    //                     loadBranchsList: true
    //                 }
    //             }
    //         case 'BranchId':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     DespositListNew: state.DespositSlipComp.DespositListNew.map((item, i) =>
    //                         i == action.payload.i ? {
    //                             ...item,
    //                             branchId: action.payload.value,
    //                         }
    //                             : item
    //                     ),

    //                 }
    //             }
    //         case 'DepositSlipBase64Image':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     DespositListNew: state.DespositSlipComp.DespositListNew.map((item, i) =>
    //                         i == action.payload.i ? {
    //                             ...item,
    //                             depositSlipBase64Image: action.payload.value,
    //                             base64Image: action.payload.value,
    //                         }
    //                             : item
    //                     ),

    //                 }
    //             }
    //         case 'remarks':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     DespositListNew: state.DespositSlipComp.DespositListNew.map((item, i) =>
    //                         i == action.payload.i ? {
    //                             ...item,
    //                             remarks: action.payload.value,
    //                         }
    //                             : item
    //                     ),

    //                 }
    //             }
    //         case 'machineNo':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     DespositListNew: state.DespositSlipComp.DespositListNew.map((item, i) =>
    //                         i == action.payload.i ? {
    //                             ...item,
    //                             machineNo: action.payload.value,
    //                         }
    //                             : item
    //                     ),

    //                 }
    //             }
    //         case 'machineLocation':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     DespositListNew: state.DespositSlipComp.DespositListNew.map((item, i) =>
    //                         i == action.payload.i ? {
    //                             ...item,
    //                             machineLocation: action.payload.value,
    //                         }
    //                             : item
    //                     ),

    //                 }
    //             }
    //         case 'dateOfDeposit':

    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     DespositListNew: state.DespositSlipComp.DespositListNew.map((item, i) =>
    //                         i == action.payload.i ? {
    //                             ...item,
    //                             depositedDate: action.payload.value,
    //                             // dateOfDeposit:action.payload.value,
    //                         }
    //                             : item
    //                     ),

    //                 }
    //             }

    //         case 'enableUpdate':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,

    //                     DespositListNew: state.DespositSlipComp.DespositListNew.map((item, i) =>
    //                         i == action.payload.i ? {
    //                             ...item,
    //                             enableUpdate: action.payload.value,
    //                         }
    //                             : item
    //                     ),

    //                 }
    //             }
    //         case 'slipType':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,

    //                     DespositListNew: state.DespositSlipComp.DespositListNew.map((item, i) =>
    //                         i == action.payload.i ? {
    //                             ...item,
    //                             slipType: action.payload.value,
    //                         }
    //                             : item
    //                     ),

    //                 }
    //             }


    //     }
    // }
    // function AddDetailsToListItem(action, state) {

    //     switch (action.payload.field) {

    //         case 'orgID':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     DespositList: state.DespositSlipComp.DespositList.map((item, i) =>
    //                         i == action.payload.i ? {
    //                             ...item,
    //                             TenantId: action.payload.value,
    //                         }
    //                             : item
    //                     ),
    //                     depositSlipWarnings: {
    //                         ...state.DespositSlipComp.depositSlipWarnings,
    //                         amountWarnings: "",
    //                         warningsAll: ""
    //                     }
    //                 }
    //             }
    //         case 'Amount':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     DespositList: state.DespositSlipComp.DespositList.map((item, i) =>
    //                         i == action.payload.i ? {
    //                             ...item,
    //                             Amount: action.payload.value,
    //                         }
    //                             : item
    //                     ),
    //                     AmountDepositSlip: action.payload.value,
    //                     depositSlipWarnings: {
    //                         ...state.DespositSlipComp.depositSlipWarnings,
    //                         amountWarnings: "",
    //                         warningsAll: ""
    //                     }
    //                 }
    //             }
    //         case 'BankSlipTxId':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     DespositList: state.DespositSlipComp.DespositList.map((item, i) =>
    //                         i == action.payload.i ? {
    //                             ...item,
    //                             BankSlipTxId: action.payload.value,
    //                         }
    //                             : item
    //                     ),
    //                     // AmountDepositSlip: action.payload.value,
    //                     depositSlipWarnings: {
    //                         ...state.DespositSlipComp.depositSlipWarnings,
    //                         BankSlipTxIdWarnings: "",
    //                         warningsAll: ""
    //                     }
    //                 }
    //             }
    //         case 'DepositModeId':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     DespositList: state.DespositSlipComp.DespositList.map((item, i) =>
    //                         i == action.payload.i ? {
    //                             ...item,
    //                             DepositModeId: action.payload.value,
    //                         }
    //                             : item
    //                     ),
    //                     // AmountDepositSlip: action.payload.value,
    //                     depositSlipWarnings: {
    //                         ...state.DespositSlipComp.depositSlipWarnings,
    //                         DepositModeIdWarnings: "",
    //                         warningsAll: ""
    //                     }
    //                 }
    //             }
    //         case 'DepositSlipBase64Image':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     DespositList: state.DespositSlipComp.DespositList.map((item, i) =>
    //                         i == action.payload.i ? {
    //                             ...item,
    //                             DepositSlipBase64Image: action.payload.value,
    //                         }
    //                             : item
    //                     ),
    //                     // AmountDepositSlip: action.payload.value,
    //                     depositSlipWarnings: {
    //                         ...state.DespositSlipComp.depositSlipWarnings,
    //                         slipImageWarnings: "",
    //                         warningsAll: ""
    //                     }
    //                 }
    //             }

    //         case 'depositSlipBase64Image':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     depositSlipBase64Image: action.payload.value,
    //                     openSlipModal: true,
    //                     warningsAll: ""
    //                 }
    //             }

    //     }
    // }

    // function SaveDepositSlipDetailsTenant(action, state) {

    //     switch (action.payload.field) {
    //         case 'fromName':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     SlipDetails: {
    //                         ...state.DespositSlipComp.SlipDetails,
    //                         fromName: action.payload.value
    //                     },
    //                     SlipDetailsWarnings: {
    //                         ...state.DespositSlipComp.SlipDetailsWarnings,
    //                         fromNameWarning: "",
    //                     }
    //                 }
    //             }

    //         case 'amount':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     SlipDetails: {
    //                         ...state.DespositSlipComp.SlipDetails,
    //                         amount: action.payload.value
    //                     },
    //                     SlipDetailsWarnings: {
    //                         ...state.DespositSlipComp.SlipDetailsWarnings,
    //                         amountWarning: "",
    //                     }
    //                 }
    //             }

    //         case 'amountInWords':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     SlipDetails: {
    //                         ...state.DespositSlipComp.SlipDetails,
    //                         amountInWords: action.payload.value
    //                     },
    //                     SlipDetailsWarnings: {
    //                         ...state.DespositSlipComp.SlipDetailsWarnings,
    //                         amountWarning: "",
    //                     }
    //                 }
    //             }
    //         case 'modeOfDeposit':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     SlipDetails: {
    //                         ...state.DespositSlipComp.SlipDetails,
    //                         modeOfDeposit: action.payload.value
    //                     },
    //                     SlipDetailsWarnings: {
    //                         ...state.DespositSlipComp.SlipDetailsWarnings,
    //                         modeOfDepositWarning: "",
    //                     }
    //                 }
    //             }
    //         case 'onlineTransfer':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     SlipDetails: {
    //                         ...state.DespositSlipComp.SlipDetails,
    //                         onlineTransfer: action.payload.value
    //                     },
    //                     SlipDetailsWarnings: {
    //                         ...state.DespositSlipComp.SlipDetailsWarnings,
    //                         onlineTransferWarning: "",
    //                     }
    //                 }
    //             }
    //         case 'refNumber':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     SlipDetails: {
    //                         ...state.DespositSlipComp.SlipDetails,
    //                         referenceNumber: action.payload.value
    //                     },
    //                     SlipDetailsWarnings: {
    //                         ...state.DespositSlipComp.SlipDetailsWarnings,
    //                         referenceNumberWarning: "",
    //                     }
    //                 }
    //             }
    //         case 'chequeNumber':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     SlipDetails: {
    //                         ...state.DespositSlipComp.SlipDetails,
    //                         chequeDetails: {
    //                             ...state.DespositSlipComp.SlipDetails.chequeDetails,
    //                             number: action.payload.value
    //                         },
    //                         SlipDetailsWarnings: {
    //                             ...state.DespositSlipComp.SlipDetailsWarnings,
    //                             numberWarning: "",
    //                         }
    //                     }
    //                 }
    //             }
    //         case 'date':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     SlipDetails: {
    //                         ...state.DespositSlipComp.SlipDetails,
    //                         chequeDetails: {
    //                             ...state.DespositSlipComp.SlipDetails.chequeDetails,
    //                             date: action.payload.value
    //                         }
    //                     }
    //                 }
    //             }
    //         case 'toBankAccountNo':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     SlipDetails: {
    //                         ...state.DespositSlipComp.SlipDetails,
    //                         toBankAccountNo: action.payload.value
    //                     },
    //                     SlipDetailsWarnings: {
    //                         ...state.DespositSlipComp.SlipDetailsWarnings,
    //                         toBankAccountNoWarning: "",
    //                     }
    //                 }
    //             }
    //         case 'dateOfDeposit':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     SlipDetails: {
    //                         ...state.DespositSlipComp.SlipDetails,
    //                         dateOfDeposit: action.payload.value
    //                     }
    //                 }
    //             }
    //         case 'remarks':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     SlipDetails: {
    //                         ...state.DespositSlipComp.SlipDetails,
    //                         remarks: action.payload.value
    //                     }
    //                 }
    //             }
    //         case 'slipImage':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     SlipDetails: {
    //                         ...state.DespositSlipComp.SlipDetails,
    //                         slipImage: action.payload.value,
    //                         cdmStuckSlip: action.payload.value,
    //                     },
    //                     SlipDetailsWarnings: {
    //                         ...state.DespositSlipComp.SlipDetailsWarnings,
    //                         slipImageWarning: "",
    //                     }
    //                 }
    //             }
    //         case 'retailerName':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     SlipDetails: {
    //                         ...state.DespositSlipComp.SlipDetails,
    //                         retailerName: action.payload.value
    //                     },
    //                 }
    //             }

    //         case 'BankName':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     SlipDetails: {
    //                         ...state.DespositSlipComp.SlipDetails,
    //                         bankName: action.payload.value
    //                     },
    //                 }
    //             }
    //         case 'MachineLocation':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     SlipDetails: {
    //                         ...state.DespositSlipComp.SlipDetails,
    //                         machineLocation: action.payload.value
    //                     },
    //                 }
    //             }
    //         case 'MachineNo':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     SlipDetails: {
    //                         ...state.DespositSlipComp.SlipDetails,
    //                         machineNo: action.payload.value
    //                     },
    //                 }
    //             }

    //         case 'view':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     SlipDetails: action.payload.value,
    //                     isGetDepositedSlipSuccess: true,
    //                 }
    //             }
    //         case 'clearModal':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     openClearModal: action.payload.value,
    //                 }
    //             }
    //         case 'rejectModal':
    //                 return {
    //                     ...state, DespositSlipComp: {
    //                         ...state.DespositSlipComp,
    //                         openRejectModal: action.payload.value,
    //                     }
    //                 }
    //         case 'comment':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     comment: action.payload.value,
    //                 }
    //             }
    //         case 'viewImageModal':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     viewImageModal: action.payload.value,
    //                 }
    //             }
    //         case 'base64Image':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     base64Image: action.payload.value,
    //                 }
    //             }

    //         case 'bankDepositSlipId':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     bankDepositSlipId: action.payload.value,
    //                 }
    //             }
    //         case 'reconDate':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     reconDate: action.payload.value,
    //                 }
    //             }
    //         case 'password':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     password: action.payload.value,
    //                 }
    //             }
    //         case 'viewModal':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     viewModal: action.payload.value,
    //                 }
    //             }
    //         case 'viewSubModal':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     viewSubModal: action.payload.value,
    //                     viewModal: false
    //                 }
    //             }


    //         default:
    //             {
    //                 return state;
    //             }
    //     }
    // }


    // function SaveAccountingDetails(action, state) {
    //     if (action.payload.field === 'Mode') {
    //         return {
    //             ...state, AccountingDetails: {
    //                 ...state.AccountingDetails,
    //                 Mode: action.payload.value,
    //                 ModeWarning: ""
    //             }
    //         }
    //     } else if (action.payload.field === 'FromAccount') {
    //         return {
    //             ...state, AccountingDetails: {
    //                 ...state.AccountingDetails,
    //                 FromAccount: action.payload.value,
    //                 FromAccountWarning: ""
    //             }
    //         }
    //     } else if (action.payload.field === 'ToAccount') {
    //         return {
    //             ...state, AccountingDetails: {
    //                 ...state.AccountingDetails,
    //                 ToAccount: action.payload.value,
    //                 ToAccountWarning: ""
    //             }
    //         }
    //     } else if (action.payload.field === 'Date') {
    //         return {
    //             ...state, AccountingDetails: {
    //                 ...state.AccountingDetails,
    //                 Date: action.payload.value
    //             }
    //         }
    //     } else if (action.payload.field === 'chequeDate') {
    //         return {
    //             ...state, AccountingDetails: {
    //                 ...state.AccountingDetails,
    //                 chequeDate: action.payload.value
    //             }
    //         }
    //     } else if (action.payload.field === 'chequeNumber') {
    //         return {
    //             ...state, AccountingDetails: {
    //                 ...state.AccountingDetails,
    //                 chequeNumber: action.payload.value
    //             }
    //         }
    //     } else if (action.payload.field === 'DepositSlipBase64Image') {
    //         return {
    //             ...state, AccountingDetails: {
    //                 ...state.AccountingDetails,
    //                 SlipImage: action.payload.value,
    //                 Base64Image: action.payload.value
    //             },
    //         }

    //     } else if (action.payload.field === 'Amount') {
    //         return {
    //             ...state, AccountingDetails: {
    //                 ...state.AccountingDetails,
    //                 Amount: action.payload.value,
    //                 AmountWarning: ""
    //             }
    //         }
    //     } else if (action.payload.field === 'Remarks') {
    //         return {
    //             ...state, AccountingDetails: {
    //                 ...state.AccountingDetails,
    //                 Remarks: action.payload.value
    //             }
    //         }
    //     }

    // }

    // function SaveAccountingDetailsWarnings(action, state) {
    //     if (action.payload.field === 'ModeWarning') {
    //         return {
    //             ...state, AccountingDetails: {
    //                 ...state.AccountingDetails,
    //                 ModeWarning: action.payload.value
    //             }
    //         }
    //     } else if (action.payload.field === 'FromAccountWarning') {
    //         return {
    //             ...state, AccountingDetails: {
    //                 ...state.AccountingDetails,
    //                 FromAccountWarning: action.payload.value
    //             }
    //         }
    //     } else if (action.payload.field === 'ToAccountWarning') {
    //         return {
    //             ...state, AccountingDetails: {
    //                 ...state.AccountingDetails,
    //                 ToAccountWarning: action.payload.value
    //             }
    //         }
    //     } else if (action.payload.field === 'AmountWarning') {
    //         return {
    //             ...state, AccountingDetails: {
    //                 ...state.AccountingDetails,
    //                 AmountWarning: action.payload.value
    //             }
    //         }
    //     } else if (action.payload.field === 'DateWarning') {
    //         return {
    //             ...state, AccountingDetails: {
    //                 ...state.AccountingDetails,
    //                 DateWarning: action.payload.value
    //             }
    //         }
    //     }

    // }

    // function SaveEditedAccountingDetails(action, state) {
    //     if (action.payload.field === 'Remarks') {
    //         return {
    //             ...state, AccountingDetails: {
    //                 ...state.AccountingDetails,
    //                 ReceiptDetailsToEdit: {
    //                     ...state.AccountingDetails.ReceiptDetailsToEdit,
    //                     remarks: action.payload.value
    //                 }
    //             }
    //         }
    //     } else if (action.payload.field === 'DepositSlipBase64Image') {
    //         return {
    //             ...state, AccountingDetails: {
    //                 ...state.AccountingDetails,
    //                 ReceiptDetailsToEdit: {
    //                     ...state.AccountingDetails.ReceiptDetailsToEdit,
    //                     SlipImage: action.payload.value
    //                 }
    //             }
    //         }
    //     } else if (action.payload.field === 'chequeNumber') {
    //         return {
    //             ...state, AccountingDetails: {
    //                 ...state.AccountingDetails,
    //                 ReceiptDetailsToEdit: {
    //                     ...state.AccountingDetails.ReceiptDetailsToEdit,
    //                     chequeNumber: action.payload.value
    //                 }
    //             }
    //         }
    //     } else if (action.payload.field === 'Date') {
    //         return {
    //             ...state, AccountingDetails: {
    //                 ...state.AccountingDetails,
    //                 ReceiptDetailsToEdit: {
    //                     ...state.AccountingDetails.ReceiptDetailsToEdit,
    //                     receiptDate: action.payload.value
    //                 }
    //             }
    //         }
    //     } else if (action.payload.field === 'chequeDate') {
    //         return {
    //             ...state, AccountingDetails: {
    //                 ...state.AccountingDetails,
    //                 ReceiptDetailsToEdit: {
    //                     ...state.AccountingDetails.ReceiptDetailsToEdit,
    //                     chequeDate: action.payload.value
    //                 }
    //             }
    //         }
    //     } else if (action.payload.field === 'Amount') {
    //         return {
    //             ...state, AccountingDetails: {
    //                 ...state.AccountingDetails,
    //                 ReceiptDetailsToEdit: {
    //                     ...state.AccountingDetails.ReceiptDetailsToEdit,
    //                     amount: action.payload.value,
    //                     AmountWarning: ""
    //                 }
    //             }
    //         }
    //     }

    // }

    // function SaveEditedAccountingDetailsWarnings(action, state) {
    //     if (action.payload.field === 'ModeWarning') {
    //         return {
    //             ...state, AccountingDetails: {
    //                 ...state.AccountingDetails,
    //                 ReceiptDetailsToEdit: {
    //                     ...state.AccountingDetails.ReceiptDetailsToEdit,
    //                     ModeWarnings: action.payload.value
    //                 }
    //             }
    //         }
    //     } else if (action.payload.field === 'AmountWarning') {
    //         return {
    //             ...state, AccountingDetails: {
    //                 ...state.AccountingDetails,
    //                 ReceiptDetailsToEdit: {
    //                     ...state.AccountingDetails.ReceiptDetailsToEdit,
    //                     AmountWarning: action.payload.value
    //                 }
    //             }
    //         }
    //     } else if (action.payload.field === 'FromAccountWarning') {
    //         return {
    //             ...state, AccountingDetails: {
    //                 ...state.AccountingDetails,
    //                 ReceiptDetailsToEdit: {
    //                     ...state.AccountingDetails.ReceiptDetailsToEdit,
    //                     FromAccountWarnings: action.payload.value
    //                 }
    //             }
    //         }
    //     } else if (action.payload.field === 'ToAccountWarning') {
    //         return {
    //             ...state, AccountingDetails: {
    //                 ...state.AccountingDetails,
    //                 ReceiptDetailsToEdit: {
    //                     ...state.AccountingDetails.ReceiptDetailsToEdit,
    //                     ToAccountWarnings: action.payload.value
    //                 }
    //             }
    //         }
    //     }

    // }


    // function SaveDepositSlipDetailsTenantWarnings(action, state) {
    //     // //console.log("In reducer");
    //     // //console.log(action.payload.value);
    //     // //console.log(action.payload.field)

    //     switch (action.payload.field) {
    //         case 'fromName':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     SlipDetailsWarnings: {
    //                         ...state.DespositSlipComp.SlipDetailsWarnings,
    //                         fromNameWarning: action.payload.value
    //                     }
    //                 }
    //             }
    //         case 'amount':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     SlipDetailsWarnings: {
    //                         ...state.DespositSlipComp.SlipDetailsWarnings,
    //                         amountWarning: action.payload.value
    //                     }
    //                 }
    //             }
    //         case 'slipImage':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     SlipDetailsWarnings: {
    //                         ...state.DespositSlipComp.SlipDetailsWarnings,
    //                         slipImageWarning: action.payload.value
    //                     }

    //                 }
    //             }
    //         case 'toBankAccountNo':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     SlipDetailsWarnings: {
    //                         ...state.DespositSlipComp.SlipDetailsWarnings,
    //                         toBankAccountNoWarning: action.payload.value
    //                     }
    //                 }
    //             }

    //         case 'chequeNumber':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     SlipDetailsWarnings: {
    //                         ...state.DespositSlipComp.SlipDetailsWarnings,
    //                         numberWarning: action.payload.value
    //                     }
    //                 }
    //             }
    //         case 'refNumber':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     SlipDetailsWarnings: {
    //                         ...state.DespositSlipComp.SlipDetailsWarnings,
    //                         referenceNumberWarning: action.payload.value
    //                     }
    //                 }
    //             }
    //         case 'onlineTransfer':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     SlipDetailsWarnings: {
    //                         ...state.DespositSlipComp.SlipDetailsWarnings,
    //                         onlineTransferWarning: action.payload.value
    //                     }
    //                 }
    //             }
    //         case 'modeOfDeposit':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     SlipDetailsWarnings: {
    //                         ...state.DespositSlipComp.SlipDetailsWarnings,
    //                         modeOfDepositWarning: action.payload.value
    //                     }
    //                 }
    //             }
    //         case 'Warnings':
    //             return {
    //                 ...state, DespositSlipComp: {
    //                     ...state.DespositSlipComp,
    //                     SlipDetailsWarnings: action.payload.value
    //                 }
    //             }
    //         default:
    //             {
    //                 return state;
    //             }
    //     }
}