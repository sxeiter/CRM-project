'use strict'

const calculate = (price, amount, promo) => {
    let totalPrice = price;
        if(amount > 10)  {
            totalPrice =  totalPrice - (totalPrice * 0.03);
        }

        if (totalPrice > 30000) {
            totalPrice =  totalPrice - ((totalPrice - 30000) * 0.15);
        }

        if (promo === 'METHED') {
            totalPrice =  totalPrice - (totalPrice * 0.1); 
        }

        if (promo === 'G3H2Z1' && price >= 2000) {
            totalPrice = totalPrice - 500;
        }
        return totalPrice;
} 


console.log(calculate(10000, 11, "G3H2Z1"));

