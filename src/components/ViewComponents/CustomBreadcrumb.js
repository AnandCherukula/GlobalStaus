import React, { Component } from 'react';
import {
    Badge, Row, Col, Card, CardHeader, CardBody, Table, Pagination, PaginationItem,
    PaginationLink, Button, Label, Input, Breadcrumb, BreadcrumbItem
} from 'reactstrap';

import { connect } from 'react-redux';

import { Route, Link, Switch } from 'react-router-dom';
import Role from '../../views/UsersManagement/Role';

class CustomBreadcrumb extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startDates: '',
            endDates: '',
            focusedInput: ''

        }
    }

    BreadcrumbContent() {
  
        // let Role = localStorage.getItem('UserRole');
        let Role = this.props.LoginDetails.roleName;

        Role=="Retailer" ? Role= "RetailerPage": 
        Role=="Admin" ? Role= "Admin":
        Role=="Agent" ? Role= "AgentPage":
        Role=="FSE" ? Role= "FsePage":
        Role=="Distributor" ? Role= "DistributorPage":
        Role=="Finance Executive" ? Role= "Finance":
        Role=="Finance Head" ? Role= "Finance":

        null
        let from = this.props.from;
        //console.log(from);
        //console.log("--------------------------Role");

        //console.log(Role);
        

        let PresentCreatingOrgType = this.props.OrganizationDetails.PresentCreatingOrgType;
        if (from === 'Dashboard') {
            return <BreadcrumbItem>
                    Home 
                    </BreadcrumbItem>
        }
        else if (from === 'TransactionHistory') {
            return  <BreadcrumbItem>
                        <Link to='/Dashboard'>
                            Home 
                        </Link> / TransactionHistory
                    </BreadcrumbItem>;
        }
        else if (from === 'AdminUser') {
            if (localStorage.getItem('UserRole') === 'Admin') {
                return  <BreadcrumbItem> 
                            <Link to='/Admin'>
                                Home 
                            </Link> / Management / AdminUser
                        </BreadcrumbItem>
            }
        }
        else if (from === 'CashInHistory') {
            if (localStorage.getItem('UserRole') === 'Admin') {
                return <BreadcrumbItem> 
                            <Link to='/Admin'>
                                Home 
                            </Link> / CashIn History
                        </BreadcrumbItem>
            }

            else if (localStorage.getItem('UserRole') === 'Distributor') {
                return      <BreadcrumbItem> 
                                <Link to='/Dashboard'>
                                    Home 
                                </Link> / CashIn History
                            </BreadcrumbItem>
            }
        }
        else if (from === 'LedgerHistory') {
            return <BreadcrumbItem> 
                        <Link to={Role}>
                        Home 
                        </Link> / Ledger History
                    </BreadcrumbItem>
        }else if (from === 'Role') {
            return this.HomelinkBreasCrumb();
        }
        else if (from === 'Retailer' || from === 'AdminRetailer') {
            return  <BreadcrumbItem> 
                        <Link to={Role}>
                        Home 
                        </Link> / Retailers
                    </BreadcrumbItem>
        }
        else if (from === 'Distributor') {
            return this.DistributorBreadcrumb();
        }
        else if (from === 'Agent' ) {

            return this.AgentBreadcrumb(Role);
        }  else if ( from === 'FSE') {
            return this.AgentBreadcrumb(Role);
        }
        else if (from === 'Support') {
            return this.SupportBreadcrumb();
        }
        else if (from === 'UserRegistration') {
            if (this.props.fromcomponent === 'AdminRetailer') {
                return      <BreadcrumbItem> 
                                <Link to={Role}>
                                 Home 
                                </Link> / 
                                <Link to={Role=="Admin"?'/AdminRetailer':"/FSERetailer"}>
                                 Retailers
                                </Link> / Add Retailer
                            </BreadcrumbItem>;
        }else if (this.props.fromcomponent === 'Distributor') {
                return      <BreadcrumbItem> 
                                <Link to={Role}>
                                Home 
                                    </Link> / <Link to='/Distributor'>
                                Distributor
                                    </Link> / Create Organization
                            </BreadcrumbItem>;
            }
        }else if (from === 'MoneyTransfer') {
            return this.HomelinkBreasCrumb();           
        } else if (from === 'EditDistributorOrRetailerBank') {
                    if (this.props.fromcomponent === 'Distributor') {
                        return this.EditBankFromDistributorBreasCrumb();
                    }
                    else if (this.props.fromcomponent === 'AdminRetailer') {
                        return  <BreadcrumbItem> 
                                        <Link to={Role}>
                                            Home 
                                        </Link> /
                                        <Link to={Role=="Admin"?PresentCreatingOrgType=="AdminRetailer"? '/AdminRetailer': '/PendingRetailer':"/FSERetailer"}>
                                            Retailers
                                        </Link> / Bank
                                </BreadcrumbItem>
                    }else if (this.props.fromcomponent === 'PendingRetailer') {
                        return  <BreadcrumbItem> 
                                        <Link to={Role}>
                                            Home 
                                        </Link> /
                                        <Link to='/ApproveRetailer'>
                                             Un Approved Retailer
                                        </Link> / Bank
                                </BreadcrumbItem>
                    } else if (this.props.fromcomponent === 'Retailer') {
                        return this.EditBankFromRetailerBreasCrumb();
                    }
        } else if (from === 'CashDeposit') {
                return     <BreadcrumbItem> 
                                    <Link to='/Dashboard'>
                                    Home 
                                    </Link> / Transactions /{this.props.from}
                            </BreadcrumbItem>
        } else if (from === 'EditDocuments') {
            return          <BreadcrumbItem> 
                                    <Link to={Role}>
                                        Home 
                                    </Link> / <Link to={Role=="Admin"?PresentCreatingOrgType=="AdminRetailer"? '/AdminRetailer': '/PendingRetailer':"/FSERetailer"}>
                                            {
                                            PresentCreatingOrgType == "AdminRetailer" ?   "Retailers" : 
                                            PresentCreatingOrgType == "PendingRetailer" ? "Approve Retailer" :
                                            PresentCreatingOrgType == "Distributor" ? "Distributor" :
                                            PresentCreatingOrgType == "PendingDistributor" ? "Approve Distributor" :
                                            null
                                            } 
                                    </Link> / {this.props.from}
                            </BreadcrumbItem>
        }else if (from === 'EditBasicDetails') {
            return              <BreadcrumbItem> 
                                        <Link to={Role}>
                                            Home 
                                        </Link> / <Link to={Role=="Admin"?PresentCreatingOrgType=="AdminRetailer"? '/AdminRetailer': '/PendingRetailer':"/FSERetailer"}>
                                            {
                                            PresentCreatingOrgType == "AdminRetailer" ?   "Retailers" : 
                                            PresentCreatingOrgType == "PendingRetailer" ? "Approve Retailer" :
                                            PresentCreatingOrgType == "Distributor" ? "Distributor" :
                                            PresentCreatingOrgType == "PendingDistributor" ? "Approve Distributor" :
                                            null
                                            } 
                                        </Link> / Edit Basic Details
                                </BreadcrumbItem>
        }  
        else if(from==='User') {
                return          <BreadcrumbItem> 
                                    <Link to={Role}>
                                        Home  
                                    </Link>
                                    <Link to={"/"+this.props.UserDetails.EditingUserType}>
                                        / User 
                                    </Link> 
                                        / {this.props.UserDetails.EditUserClicked ? "Edit" : "Add"}  User
                                </BreadcrumbItem>
        }
        else if (from === 'PendingUsers') {
            return                  <BreadcrumbItem>
                                        <Link to={Role}>
                                        Home 
                                        </Link> / Pending Users
                                    </BreadcrumbItem>
        } else if (from === 'ApproveRetailer') {
            return                  <BreadcrumbItem>
                                        <Link to='/Admin'>
                                        Home 
                                        </Link> / Approve Retailer
                                    </BreadcrumbItem>
        } else if (from === 'ApproveDistributor') {
            return                  <BreadcrumbItem>
                                        <Link to='/Admin'>
                                        Home 
                                        </Link> / Approve Distributor
                                    </BreadcrumbItem>
        }

        else if (from === 'APIs') {
                return      <BreadcrumbItem>
                            <Link to={Role}>
                                Home 
                                    </Link> / MoneyTrasfer APIs
                            </BreadcrumbItem>
        } else if (from === 'pendingDeposits') {
            return      <BreadcrumbItem>
                                    <Link to={Role}>
                                    Home 
                                    </Link> / Pending Deposits
                        </BreadcrumbItem>
        } else if (from === 'RejectedUsers') {
            return <BreadcrumbItem>
                                    <Link to='/Admin'>
                                    Home 
                                    </Link> 
                                    / Rejected Users
                    </BreadcrumbItem>
        } else if (from === 'UserEnquiry') {
            return      <BreadcrumbItem> 
                                <Link to='/Admin'>
                                Home 
                                </Link> / User Enquiry
                        </BreadcrumbItem>
        }else if (from === 'RateCardHome') {
            return      <BreadcrumbItem> 
                                <Link to='/Admin'>
                                Home 
                                </Link> / All RateCards
                        </BreadcrumbItem>
        } else if (from === 'Add RateCard') {
            return <BreadcrumbItem> <Link to='/Admin'>
                                Home 
                                </Link>/<Link to='/RatecardHome'>
                                All Ratecards
                                </Link> / Add Rate Card
                    </BreadcrumbItem>
        }else if (from === 'Edit RateCard') {
            return <BreadcrumbItem> <Link to='/Admin'>
                                Home 
                                </Link>/<Link to='/RatecardHome'>
                                All Ratecards
                                </Link> / Edit Rate Card
                    </BreadcrumbItem>
        }else if (from === 'View RateCard') {
            return <BreadcrumbItem> <Link to='/Admin'>
                                Home 
                                </Link>/<Link to='/RatecardHome'>
                                All Ratecards
                                </Link> / View Rate Card
                    </BreadcrumbItem>
        } else if (from === 'MTcustomer') {
            return <BreadcrumbItem> <Link to={Role}>
                            Home 
                            </Link>/<Link to='/MoneyTransfer'>
                            MoneyTransfer
                            </Link> / Customer Details

                            </BreadcrumbItem>
        } else if (from === 'MThome') {
            return <BreadcrumbItem> <Link to={Role}>
                            Home 
                            </Link> / Money Transfer
                            </BreadcrumbItem>
        }  else if(from==='DepositSlips'){
            return      <BreadcrumbItem> <Link to={Role=="Finance Executive" ? "/Finance":Role}>
                        Home
                        </Link> / Deposit Slips
                        </BreadcrumbItem>
        } else if(from==='FSEScoreboard'){
            return      <BreadcrumbItem> <Link to={Role=="Finance Executive" ? "/Finance":Role}>
                        Home
                        </Link> / FSE Scoreboard
                        </BreadcrumbItem>
        } 
        else if(from==='RetailerScoreboard_fse'){
            return      <BreadcrumbItem> <Link to={Role=="Finance Executive" ? "/Finance":Role}>
                        Home
                        </Link> / Retailer Scoreboard
                        </BreadcrumbItem>
        }else if(from==='TranscationStatus'){
            return      <BreadcrumbItem> <Link to={Role=="Finance Executive" ? "/Finance":Role}>
                        Home
                        </Link> / Transcation Status
                        </BreadcrumbItem>
        }else if(from==='UserEnquiry'){
            return      <BreadcrumbItem> <Link to={Role=="Finance Executive" ? "/Finance":Role}>
                        Home
                        </Link> / User Enquiry
                        </BreadcrumbItem>
        }else if(from==='RetailerScoreboard'){
            return      <BreadcrumbItem> <Link to={Role=="Finance Executive" ? "/Finance":Role}>
                        Home
                        </Link> / {Role=="Admin"?"Retailer":"" } Scoreboard
                        </BreadcrumbItem>
        }else if(from==='DailyTransaction'){
            return      <BreadcrumbItem> <Link to={Role=="Finance Executive" ? "/Finance":Role}>
                        Home
                        </Link> / Daily Transactions
                        </BreadcrumbItem>
        }else if(from==='UserEnquiry1'){
            return      <BreadcrumbItem> <Link to={Role=="Finance Executive" ? "/Finance":Role}>
                        Home
                        </Link> / User Enquiry
                        </BreadcrumbItem>
        }else if(from==='CashInTransit'){
            return      <BreadcrumbItem> <Link to={Role=="Finance Executive" ? "/Finance":Role}>
                        Home
                        </Link> / Cash In Transit
                        </BreadcrumbItem>
        } else if(from==='Payment'){
            return      <BreadcrumbItem> <Link to={Role=="Finance Executive" ? "/Finance":Role}>
                        Home
                        </Link> / Payment
                        </BreadcrumbItem>
        }else if(from==='Receipt'){
            return      <BreadcrumbItem> <Link to={Role=="Finance Executive" ? "/Finance":Role}>
                        Home
                        </Link> / Receipt
                        </BreadcrumbItem>
        }else if(from==='AddReceipt'){
            return      <BreadcrumbItem> <Link to={Role=="Finance Executive" ? "/Finance":Role}>
                            Home
                            </Link>
                            <Link to={"/Receipt"}>
                            / Receipt
                            </Link>  / Add Receipt
                        </BreadcrumbItem>
        }else if(from==='UpdateReceipt'){
            return      <BreadcrumbItem> <Link to={Role=="Finance Executive" ? "/Finance":Role}>
                            Home
                            </Link>
                            <Link to={"/Receipt"}>
                            / Receipt
                            </Link>  / Update Receipt
                        </BreadcrumbItem>
        }else if(from==='AddPayment'){
            return      <BreadcrumbItem> <Link to={Role=="Finance Executive" ? "/Finance":Role}>
                            Home
                            </Link>
                            <Link to={"/Payment"}>
                            / Payment
                            </Link>  / Add Payment
                        </BreadcrumbItem>
        }else if(from==='UpdatePayment'){
            return      <BreadcrumbItem> <Link to={Role=="Finance Executive" ? "/Finance":Role}>
                            Home
                            </Link>
                            <Link to={"/Payment"}>
                            / Payment
                            </Link>  / Update Payment
                        </BreadcrumbItem>
        }else if(from==='TransactionLedger'){
            return      <BreadcrumbItem> <Link to={Role=="Finance Executive" ? "/Finance":Role}>
                        Home
                        </Link> / Transaction Ledger
                        </BreadcrumbItem>
        }else if(from==='AccountLedger'){
            return      <BreadcrumbItem> <Link to={Role=="Finance Executive" ? "/Finance":Role}>
                        Home
                        </Link> / Account Ledger
                        </BreadcrumbItem>
        } else if(from==='AccountTransaction'){
            return      <BreadcrumbItem> <Link to={Role=="Finance Executive" ? "/Finance":Role}>
                        Home
                        </Link> / Account Transaction
                        </BreadcrumbItem>
        } else if(from==='APITransaction'){
            return      <BreadcrumbItem> <Link to={Role=="Finance Executive" ? "/Finance":Role}>
                        Home
                        </Link> / API Transaction
                        </BreadcrumbItem>
        }  else if(from==='UploadSlip') {
            return <BreadcrumbItem> 
                            <Link to={Role}>
                            Home 
                            </Link>
                            /
                            <Link to={Role=="FsePage"?'/AdminDepositSlips':'/Deposits'}>
                                Deposit Slips 
                            </Link> 
                            / Upload Slip
                    </BreadcrumbItem>
            }else if(from==='AdminDepositSlips') {
                    return    <BreadcrumbItem> 
                                <Link to={Role}>
                                Home 
                                </Link>
                                 / Admin Deposit Slips 
                               
                            </BreadcrumbItem>
           }else if(from==='ViewDepositedSlip') {
                            let roleName=this.props.LoginDetails.roleName;
                            return <BreadcrumbItem> 
                                      <Link to={Role}>
                                            Home 
                                            </Link>
                                            /
                                            <Link to='/AdminDepositSlips'>
                                               { roleName == "Admin" ?  "Admin Deposit Slips"  :  "Deposit Slips"  } 
                                            </Link> 
                                                / View Deposited Slip
                                </BreadcrumbItem>
            }  else if(from==="CDMStuck"){
                return <BreadcrumbItem> 
                <Link to={Role=="Finance Executive" ? "/Finance":Role}>
                Home  
                </Link>
                /   Deposits
               
            </BreadcrumbItem>  
            }  else if(from==="ReportCDMSTuck"){         
                            return <BreadcrumbItem> 
                                        <Link to={Role}>
                                        Home 
                                        </Link>
                                        /
                                        <Link to='/BankDeposits'>
                                          Deposits
                                        </Link> 
                                        / Upload  Deposits
                                    </BreadcrumbItem>  
            } else if(from==="UpdateSlip"){         
                return <BreadcrumbItem> 
                            <Link to={Role}>
                            Home 
                            </Link>
                            /
                            <Link to='/BankDeposits'>
                              Deposits
                            </Link> 
                            / View And Update Slip
                        </BreadcrumbItem>  
}
else if(from==="ViewSlip"){         
    return <BreadcrumbItem> 
                <Link to={Role}>
                Home 
                </Link>
                /
                <Link to='/BankDeposits'>
                  Deposits
                </Link> 
                / View Slip
            </BreadcrumbItem>  
}   else if(from==="ApproveSlip"){         
    return <BreadcrumbItem> 
                <Link to={Role}>
                Home 
                </Link>
                /
                <Link to='/BankDeposits'>
                  Deposits
                </Link> 
                / View And Approve Slip
            </BreadcrumbItem>  
}        
            else if(from==='AccountingTransaction') {
                return <BreadcrumbItem> 
                                <Link to={Role}>
                                Home 
                                </Link>
                                / Accounting Transactions          
                    </BreadcrumbItem>
            }else if(from==='RetailerTransactions') {
                    return <BreadcrumbItem> 
                                    <Link to={Role}>
                                    Home 
                                    </Link>
                                    / Retailer Transactions          
                        </BreadcrumbItem>
            }else if(from==='RetailerTransactions') {  
                return <BreadcrumbItem> 
                                <Link to={Role}>
                                Home 
                                </Link>
                                / Retailer Transactions          
                    </BreadcrumbItem>
            }else if(from==='Banks') { 
                    return <BreadcrumbItem> 
                                    <Link to={Role}>
                                    Home 
                                    </Link>
                                    / Banks          
                        </BreadcrumbItem>
            } else if(from==='BanksTransactionHistory') { 
                return <BreadcrumbItem> 
                                <Link to={Role}>
                                Home  
                                </Link> 
                                <Link to="/Banks">
                                /  Banks
                                </Link>
                                / Banks Transaction History          
                        </BreadcrumbItem>
            } else if(from==='APIPool') { 
                return <BreadcrumbItem> 
                                <Link to={Role}>
                                Home 
                                </Link>
                                / API Pool         
                    </BreadcrumbItem>
            }else if(from==='DetailsTransaction') { 
                return <BreadcrumbItem> 
                                <Link to={Role}>
                                Home  
                                </Link> 
                                <Link to="/AccountingTransaction">
                                /  Accounting Transactions
                                </Link>
                                /  Transaction Details        
                    </BreadcrumbItem>
            }else if(from==='AddBank') { 
                return <BreadcrumbItem> 
                                <Link to={Role}>
                                Home  
                                </Link> 
                                <Link to="/Banks">
                                /  Banks
                                </Link>
                                /  Add Bank       
                    </BreadcrumbItem>
            }else if(from==='UpdateBank') { 
                return <BreadcrumbItem> 
                                <Link to={Role}>
                                Home  
                                </Link> 
                                <Link to="/Banks">
                                /  Banks
                                </Link>
                                /  Update Bank       
                    </BreadcrumbItem>
            }else if(from==='AddApi') { 
                return <BreadcrumbItem> 
                                <Link to={Role}>
                                Home  
                                </Link> 
                                <Link to="/ApiPool">
                                /  API Pool
                                </Link>
                                /  Add API       
                    </BreadcrumbItem>
            }else if(from==='UpdateApi') { 
                return <BreadcrumbItem> 
                                <Link to={Role}>
                                Home  
                                </Link> 
                                <Link to="/ApiPool">
                                /  API Pool
                                </Link>
                                /  Update API       
                    </BreadcrumbItem>
            }else if(from==='ApiTransactionHistory') { 
                return <BreadcrumbItem> 
                                <Link to={Role}>
                                Home  
                                </Link> 
                                <Link to="/ApiPool">
                                /  API Pool
                                </Link>
                                / API Transaction History  
                    </BreadcrumbItem>
            }else if(from==='RetailerIncentMonitoring') { 
                return <BreadcrumbItem> 
                                <Link to={Role}>
                                Home  
                                </Link> 
                                 /  Retailer Incent Monitoring      
                    </BreadcrumbItem>
            }else if(from==='RetailerFSECashIn') { 
                return <BreadcrumbItem> 
                                <Link to={Role}>
                                Home  
                                </Link> 
                                 /  Retailer FSE Cash In     
                    </BreadcrumbItem>
            }else if(from==='RetailerCashInHistory') { 
                return <BreadcrumbItem> 
                                <Link to={Role}>
                                Home  
                                </Link> 
                                 /  Retailer Cash In History    
                    </BreadcrumbItem>
            }else if(from==='RetailerLedgerHistory') { 
                return <BreadcrumbItem> 
                                <Link to={Role}>
                                Home  
                                </Link> 
                                 /  Retailer Ledger History      
                    </BreadcrumbItem>
            }else if(from==='RetailerTransactionHistory') { 
                return <BreadcrumbItem> 
                                <Link to={Role}>
                                Home  
                                </Link> 
                                 /  Retailer Transaction History      
                    </BreadcrumbItem>
            }else if(from==='FSECashInHistory') { 
                return <BreadcrumbItem> 
                                <Link to={Role}>
                                Home  
                                </Link> 
                                 /  FSE Cash In History    
                    </BreadcrumbItem>
            }else if(from==='FSELedgerHistory') { 
                return <BreadcrumbItem> 
                                <Link to={Role}>
                                Home  
                                </Link> 
                                 /  FSE Ledger History      
                    </BreadcrumbItem>
            }else if(from==='FSETransactionHistory') { 
                return <BreadcrumbItem> 
                                <Link to={Role}>
                                Home  
                                </Link> 
                                 /  FSE Transaction History      
                    </BreadcrumbItem>
            } else if(from==='Home') { 
                return <BreadcrumbItem> 
                               <Link to={Role}>
                                    Home  
                                </Link>         
                    </BreadcrumbItem>
            }
    }

    EditBankFromRetailerBreasCrumb() {

        if (localStorage.getItem('UserRole') === 'Admin') {
            return <BreadcrumbItem>
                                    <Link to={Role}>
                                    Home 
                                    </Link> / <Link to='/Retailer'>
                                    Retailers
                                    </Link> / Bank
                   </BreadcrumbItem>
        }
        else if (localStorage.getItem('UserRole') === 'Retailer') {
            return <BreadcrumbItem> 
                                    <Link to={Role}>
                                    Home 
                                    </Link> /<Link to='/Retailer'>
                                    Retailers
                                    </Link> / Bank
                   </BreadcrumbItem>
        }
        else if (localStorage.getItem('UserRole') === 'Distributor') {
            return <BreadcrumbItem> 
                                    <Link to={Role}>
                                    Home
                                    </Link> / <Link to='/Retailer'>
                                    Retailers
                                    </Link> / Bank
                   </BreadcrumbItem>
        }
        else if (localStorage.getItem('UserRole') === 'Agent') {
            return <BreadcrumbItem> 
                                    <Link to={Role}>
                                    Home
                                    </Link> / <Link to='/Retailer'>
                                    Retailers
                                    </Link> / Bank
                   </BreadcrumbItem>
        }
    }

    EditBankFromDistributorBreasCrumb() {

        if (localStorage.getItem('UserRole') === 'Admin') {
            return <BreadcrumbItem> 
                                    <Link to={Role}>
                                    Home
                                    </Link> / <Link to='/Distributor'>
                                    Distributors
                                    </Link> / Bank
                   </BreadcrumbItem>
        }
        else if (localStorage.getItem('UserRole') === 'Retailer') {
            return <BreadcrumbItem>
                                    <Link to={Role}>
                                    Home
                                    </Link> /<Link to='/Distributor'>
                                    Distributors
                                    </Link> / Bank
                   </BreadcrumbItem>
        }
        else if (localStorage.getItem('UserRole') === 'Distributor') {
            return <BreadcrumbItem> <Link to={Role}>
                                    Home
                                    </Link> / <Link to='/Distributor'>
                                     Distributors
                                    </Link> / Bank
                   </BreadcrumbItem>
        }
        else if (localStorage.getItem('UserRole') === 'Agent') {
            return <BreadcrumbItem> <Link to={Role}>
                                    Home
                                    </Link> / <Link to='/Distributor'>
                                        Distributors
                                    </Link> / Bank
                   </BreadcrumbItem>
        }


    }



    HomelinkBreasCrumb() {

        // // //console.log("3");
        if (localStorage.getItem('UserRole') === 'Admin') {
            return  <BreadcrumbItem> 
                                    <Link to='/Admin'>
                                        Home
                                    </Link> {this.props.contentPath}
                    </BreadcrumbItem>
        }
        else if (localStorage.getItem('UserRole') === 'Retailer') {
            return  <BreadcrumbItem> 
                                    <Link to='/RetailerPage'>
                                    Home
                                    </Link> {this.props.contentPath}
                    </BreadcrumbItem>
        }
        else if (localStorage.getItem('UserRole') === 'Distributor') {
            return  <BreadcrumbItem> 
                                    <Link to='/Dashboard'>
                                    Home
                                    </Link> 
                                    {this.props.contentPath}
                    </BreadcrumbItem>
        }
        else if (localStorage.getItem('UserRole') === 'Agent') {
            return <BreadcrumbItem> 
                                    <Link to='/AgentPage'>
                                    Home
                                    </Link> {this.props.contentPath}
                    </BreadcrumbItem>
        }
        
    }
   
    DistributorBreadcrumb() {
        return      <BreadcrumbItem> 
                                <Link to='/Dashboard'>
                                Home
                                </Link> / Management / Distributors
                   </BreadcrumbItem>
    }
    AgentBreadcrumb(Role) {
                    
        return      <BreadcrumbItem> 
                                <Link to= {Role} >
                                Home
                                </Link> / Users
                    </BreadcrumbItem>

    }
    SupportBreadcrumb() {
        if (localStorage.getItem('UserRole') === 'Admin') {
            return <BreadcrumbItem> 
                                <Link to='/Admin'>
                                Home
                                </Link> / Support
                   </BreadcrumbItem>
        }
        else if (localStorage.getItem('UserRole') === 'Retailer') {
            return <BreadcrumbItem> 
                                <Link to='/RetailerPage'>
                                Retailer
                                </Link> / Support
                   </BreadcrumbItem>
        }
        else if (localStorage.getItem('UserRole') === 'Distributor') {
            return <BreadcrumbItem> 
                                <Link to='/Dashboard'>
                                Home
                                </Link> / Support
                   </BreadcrumbItem>
        }
        else if (localStorage.getItem('UserRole') === 'Agent') {
            return <BreadcrumbItem> 
                                <Link to='/AgentPage'>
                                Home
                                </Link> / Support
                   </BreadcrumbItem>
        }
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Breadcrumb style={{ marginLeft: -40,padding:"5px 40px",fontSize:18}} >
                    {this.BreadcrumbContent()}
                </Breadcrumb>
            </div>
        )
    }
}

const mapStateToProps = ({ reportReducer, userManagementReducer,Authentication }) => {
    const { OrganizationDetails,UserDetails } = userManagementReducer;
    const { lpbAdminTrans } = reportReducer;
    const { LoginDetails } = Authentication;
    return { lpbAdminTrans, OrganizationDetails , UserDetails, LoginDetails};
};

export default connect(mapStateToProps, {

})(CustomBreadcrumb);


