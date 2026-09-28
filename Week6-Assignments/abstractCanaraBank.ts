import { Payments } from "./paymentInterface.js";

export abstract class CanaraBank implements Payments
{
    cashOnDelivery():void
    {
        console.log("Cash on Delivery");        
    }
    upiPayments():void
    {
        console.log("UPI payment");        
    }
    cardPayments():void
    {
        console.log("Card Payment");        
    }
    internetBanking():void 
    {
        console.log("Internet Banking");        
    }

    abstract recordPaymentDetails():void
   
}