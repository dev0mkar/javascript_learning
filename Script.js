//   first chapter topic 
// variables and declaration 
 // var this variables is now not used much but 
  // let is to declare variables cant 
// scope(globle , blecked , functional )
// reassinged &redeclaration 
// temporal dead zone 
// hoisting impact per type 
// comman questions 
//  1)why var leaks outside the block but let doesn't
//  2) why const allowes object properties 

// const names = "omkarr";
// const city = "pimpri";
// let age = 10;
// console.log(name,city,age)
 
// let a ={
//     name: "omkar"
// }
// let b = a;  
// b.name = "maithili";
// a.name = "Tanushree";
// console.log(b)
// console.log(a)


//  Arithmetic Operators 
 // + , - , / , *,%,** ;

 // Addtion +
//  1 + 2 = 3;
//  "om"+ "kar" = "omkar";
// plus operator does addtion as well as concatenation;

// Substraction -
// 10 - 9 = 1;
  // this is used for substraction only 

// Division /
  // 2/10 = 5
  // this operator is used for division 

// Multiplication  * 
 // 10 * 2 = 20;
 // this operator is used to multiply 

// % modules 
  // 2%10 = 0 ;
// this opeator is used to check remender

// **  exponetation 
// 2 ** 4 = 16 ;
  // this is used to multiply this value double time 

// Comparison Operator 

// terniory operator
  

// if (12 > 11 && 12 > 19){
//   console.log("Congratualtion for the success" );
// }
// else{
//   console.log("Better luck next time");
// }


// Control Flow 
// this is called  *early return pattern*
  // 1 Example 
  //  function getScore(score){
  //    if(score >= 90 && score <= 100) return "A+"
  //    else if (score >=80 && score <= 89) return"A"
  //    else if (score >= 70  && score <=79)return "B"
  //    else if (score >= 60 && score <= 69) return "C"
  //    else if (score >= 30 && score <= 59) return "D"
  //    else if (score >= 0 && score <=32)return "fail"
  //    else return "Invalid marks" 
  //  }
  //  console.log(getScore(20));
  // 2 Example 
    
  //  Rock Paper Scissors Logic
//     function rps(user, computer )
// {
//     if (user === computer ) return "draw"
//     if (user === "rock" && computer === "scissor") return "user"
//     if(user === "scissor"&& computer === "paper") return "user"
//     if(user === "paper" && computer === "rock")  return "user"
//     else return "computer"
// }
// console.log(rps("rock","scissor"));


// Loops
   //  this is for loop 
    // for (i=1;i<101;i++){
    //   console.log(i);
    // }

  //  this is while loop 
      // i = 1;
      // while(i<32){
      //   console.log(i);
      //   i++;
      // }

// this is do while 
  
  // i = 1;
  // do{
   
  //   console.log(i);
  //      i++;
     
  // }
  // while(i<10)

// Break 
  
  //  for (i=1;i<201;i++){
 
  //   if(i===74){
  //     continue;
  //   }
  //      console.log(i);
  //  }
 
  
  // print 1 to 10 using for loops 
    
  // for(let i= 1; i<11; i++){
  //   console.log(i);
  // }

  // print 10 to 1 using while loops 
  // let i= 10;
  //   while(i>0){
  //   console.log(i);
  //   i--
  // }   
// Print even number form 1 to 20 using for loop 

  //  for(let i = 1 ; i<21 ; i++){
  //    if(i%2===0){
  //     console.log(i);
  //    }
  //  }

// print odd number 1 to 15 using while loop 

  // let i = 1 ;
  //  while (i<16){
  //   if(i%2 !== 0){
  //     console.log(i)
  //   }
  //   i++;
  //  }

// print 5 table using for loops 


  // for(let i = 1; i<11;i++){
  //   console.log(`5 x ${i} = ${5*i}`);
  // }

// print 1 to 100 sum using loop 

  // let sum = 0;
  // for(let i = 1; i<101;i++){
  //   sum = sum + i;
  // }
  // console.log(sum)

// print 1 to 50 number which are divisible by 3

//  for( let i = 1 ; i< 51 ; i++){
//     if(i%3===0){
//       console.log(i);
//     }
//  }

// ask user for number and print whether each number from 1 
// to that number is ever or odd

  // let val = prompt("give a number");
  // for(let i = 1; i<=val;i++){
  //   if(i%2===0){
  //     console.log(`${i} is even number`);
  //   }
  //   else{
  //     console.log(`${i} is odd number`);
  //   }
  // }
   
// Count How many number between 1 to 100 are divisible by both 
  //  3 and 5 both

  // for(i = 1; i<101; i++){
  //   if(i%3 === 0  &&  i%5 ==0){
  //     console.log(`${i} is divisible by 3 & 5 both`)
  //   }
  // }

//Question Releted  to Break And Continue 

  // write a loop from 1 to 100 that 
    // *print each number 
    // *stops completely when it fined the first number divisible by 7 

// for(let i = 1; i<101; i++){
//   if(i%7===0){
//     break;

//   }
//   console.log(i)
// }

// Skip Multiples of 3 

  // write a loop from 1 to 20 that :
  //  * skips number divisible by 3 
  //  * print all other 

  // for(let i = 1 ; i<21; i++){
  //   if(i%3===0){
  //     continue;
  //   }
  //   console.log(i)
  // }

// Print First 5 odd numbers Only
  //  let count = 0;
  // for(let i =1 ; i<101 ; i++){
  //   if(i%2===1){
  //     count++;
  //     console.log(i)
  //   }
  //   if(count===5) break;
  // }

  // Ek number lo aur check karo ki wo prime number hai ya nahi using loop.
// let val = prompt("Enter a number");
// isprime= true;
//    for(let i = 2; i<val ; i++){
//        if(val%i===0){
//         isprime = false;
//        }
//    }
//    if(val>1 && isprime){
//   console.log(`${val} is prime number`)
// }
// else{
//    console.log(`${val} is not prime number`)
// }
// Ek string lo aur uske characters ko ek-ek karke print karo using a loop.
  //  let str = prompt("enter a word");
  //  for(let i = 0; i<str.length;i++){
    
  //  }
  //   console.log(str[i])


// Functions in javascript 
 
    // FUNCTION STATEMENT 

  // function abcd(){
  //   console.log("hello omkar");
  // }
  // abcd();

  // //Function Expression
  // let fnc = function(){
  //   console.log("this is expression function");
  // }
  // fnc();

  // // FAT ARROW FUNCTION 
 
  // let fnc2 = ()=>{
  //   console.log("this is fat arrow function");
  // }
  // fnc2();

// Parameters and arguments 
         // passing valu1 while making function is called Parameters
  //  function addtion(val1,val2){
  //   console.log(`sum of ${val1} and ${val2} is ${val1 + val2}`)
  //   }

  //  addtion(12,13) // Passing real values in the funtion is called arguments 

// Rest Operator 
  //  using ... while passing parameter to use multiple arguments we call this rest operator
  //  function abcd(...val){
  //   console.log(val)
  //  }

  // abcd(1, 2, 3, 4, 5, 6, 7, 8);

  // Spread Operator 

// return value and early return 



