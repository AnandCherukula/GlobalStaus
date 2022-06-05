// http://localhost:44396/
export const PE_API_URL = NODE_ENV === 'development' ? 'http://localhost:8080/' :
    NODE_ENV === 'testing' ? 'http://10.22.1.121/pxptestapi/' :
    NODE_ENV === 'production' ? 'http://paisaexpress.com/paisaexpressapi/' : '';

// Input Fileds Lable Style 
export const Labelstyle = {
        fontSize: 20.5,
    }
    // Input Fileds Lable Style 
export const Labelstyle1 = {
    fontSize: 20,

}
export const LabelstyleNew1 = {
    width: "100%",
    margin: 10,
    color: "white",
    borderRadius: 21,
    borderColor: "rgb(1, 142, 211)",
    backgroundColor: "rgb(1, 142, 211)",
    fontWeight: 450,
}
export const LabelstyleNew2 = {
    width: "90%",
    margin: 10,
    color: "white",
    borderRadius: 21,
    // borderColor: "rgb(1, 142, 211)",
    backgroundColor: "rgb(1, 142, 211)",
    // fontWeight: 450,
}

export const InputTextStyle = {
    // textTransform: 'capitalize',
    fontSize: 20
}

export const SelectTextStyle = {
    height: 40,
    fontSize: 20,

}

export const SpinnerModalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

export const ApiSuccessOrFailureModalStyles = {
    content: {
        top: '80%',
        left: '20%',
        right: 'auto',
        bottom: '0%',
        // marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
};

import { css } from 'react-emotion';
export const SpinnerCss = css `
display: block;
margin: 0 auto;
border-color: red;
`;

// //console.log(NODE_ENV);
// //console.log("Current URL");
// //console.log(PE_API_URL);


export function toTitleCase(str) {
    // //console.log(" In Function  toTitleCase ");
    // //console.log(str);
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

export const LabelstyleNew = {
    width: "100%",
    fontSize: 20,
    color: "rgb(1, 142, 211)",
    fontWeight: 500,
    paddingLeft: 20
}
export const Labelstyle5 = {
    fontSize: 10,
    color: "#bababa",
    lineHeight: 0
}
export const LabelstyleNew3 = {
    fontSize: 17,
}

export function ReturnCustomerId(MTcustomer) {

    return MTcustomer.customerId !== undefined && MTcustomer.customerId !== '' ?
        MTcustomer.customerId :
        MTcustomer.ExistingCustomer.id !== undefined && MTcustomer.ExistingCustomer.id !== '' ?
        MTcustomer.ExistingCustomer.id : MTcustomer.customerId;
}

export function ReturnCustomerMobileNo(MTcustomer) {
    return MTcustomer.customerMobile !== undefined && MTcustomer.customerMobile !== '' ?
        MTcustomer.customerMobile : MTcustomer.ExistingCustomer.mobileNo;
}

// export const imageLocation='../../../../../services/PE.Web/Images/';

export const IsProduction = NODE_ENV == "production" ? true : false;

var a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
var b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

export function inWords(num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return;
    var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
    return str;
}