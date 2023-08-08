class salesContext {
    
    constructor(strategy, amount) {
        this.strategy = strategy;
        this.amount = strategy.calculate(amount);
    }
}

class discountStrategy  {

    
    constructor(discount) {
       
        this.discount = discount;
    }


    calculate(amount){
        return amount * this.discount;
    }

}


const discountSale = new discountStrategy(0.8);
const sale = new salesContext(discountSale, 10);

console.log(sale.amount);





