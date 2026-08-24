// Discount calculator 

 function discountCalculator(discount=0){
    return function(price){
        return price - price * (discount /100);
    }
 }
 let discounter = discountCalculator(10);
 discounter(400);
 console.log(discounter(400));

 