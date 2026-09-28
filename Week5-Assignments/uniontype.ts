type PaymentMethod="UPI"|"CreditCard"|"PayPal"

function makePayment(payBy:PaymentMethod)
{
    console.log(`Payment done by: ${payBy}`);    
}

makePayment("UPI")
makePayment("CreditCard")