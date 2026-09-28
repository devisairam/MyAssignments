class order
{
    productName:string
    orderId:string
    price:number

    constructor(productName:string,orderId:string,price:number)
    {
        this.productName=productName
        this.orderId=orderId
        this.price=price
        console.log(`Order created successfully for ${this.productName}`);
    }

    placeOrder()
    {
        console.log(`Order placed for ${this.productName} with order id ${this.orderId}`);        
    }

    cancelOrder()
    {
        console.log(`Order cancelled for ${this.productName}`);        
    }
}

const order1=new order("iPhone 16","ORD123",85000)
order1.placeOrder()
order1.cancelOrder()