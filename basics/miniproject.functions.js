// bmi calculator
function bmi(weight,height){
     return weight / (height*height);
}
console.log(bmi(65,1.7).toFixed(2));


// DISCOUNT CALCUALATOR 

  function discountCalculator(discount){
    return function(price){
        return price - price * (discount/100);
    }
  }
  let twenty = discountCalculator(20);
  let ten = discountCalculator(10);
  console.log(ten(200));
  console.log(twenty(200));


  // counter 

   function counter(){
       let count = 0;
       return function(){
            count++;
            return count;
       }
   }
   let counter2 = counter()
   console.log(counter2());
   console.log(counter2());
   console.log(counter2());
   console.log(counter2());
   console.log(counter2());
   console.log(counter2());
   console.log(counter2());



   /// create a pure function to transform a value


   function transform(val){
    return val*2
   }
   console.log(transform(9));