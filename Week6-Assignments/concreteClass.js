import { CanaraBank } from "./abstractCanaraBank.js";
class Amazon extends CanaraBank {
    recordPaymentDetails() {
        console.log("Record the payment details");
    }
}
const obj = new Amazon();
obj.cashOnDelivery();
obj.upiPayments();
obj.internetBanking();
obj.recordPaymentDetails;
