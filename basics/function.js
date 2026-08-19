// Functions 

    //   regular function  declaration   
       
         // function introduce(){
         //     console.log("i omkar mulik");
         // }
         // introduce();

    // function expression 

        //   let fnc = function(){
        //     console.log("expression function");
        //   }
            //   fnc();
    
    //  fat arrow function

    //    let you = () =>{
    //     return "fat arrow function";
    //    }
    //    let i = you();

// Parameter and arguments 

    // function add(v1 ,v2){
    //     return v1 + v2;
    // }
    // console.log(add(11,12));
    //  v1 and v2 are parameters 
    //  11 , 12 are the value called arguments which you pass

// Default , rest , spread Parameters

     // default ~
        // function dft(v1 = 0 , v2 = 0){
        //     console.log(v1+v2)
        // }
        //  dft();
        // v1 = 0 , v2 = 0 -> this are the default parameters

     // Rest parameter 

    //   function ary(...val){
    //     console.log(val)
    //   }
    //   ary(1,2,3,4,5,6,7,8,9,10);

     // spread parameter

//  return 

        // function rtn(){
        //    return "omkardev"}
        // let rtns = rtn();
        // console.log(rtns);

// First class Functions

        // function shout(msg){
        //     return msg.toUpperCase();
        // }
        // function processMessage(fn){
        //     console.log(fn("omkar"));
        // }
        // processMessage(shout);

        // JS TREATS FUNCTION AS VALUES AND CAN ASSIGN TO VARABILES ,
        //  PASS AS ARGUMENTS , RETURN FROM OTHER FUNCTION

// Higher order function

        // function createMulitple(x){
        //     return function(y){
        //         return x*y;
        //     }
        // }
        // let double = createMulitple(9);
        // console.log(double(13));

        // Function that accepet other function or retun function are Higher order functions

// Pure and Impure Functions
     
        //    this is pure function as it dont chage as vaule of outside
        
        //   function abcd(){
        //     console.log("leo");
        //   }

        // this is impure function as it changes the outside value
        
        //   let a = 21;
        //   function hue(){
        //     ++a;
        //     console.log(a)
        //    }
        //    hue();

// Closure 

        // function outer(){
        //     let count = 0;
        //     return function(){
        //         count++
        //         console.log(count);
        //     }
        // }
        // let counter = outer();
        // counter();
        // counter();
        // counter();
        // counter();
        // counter();
        // counter();
        // counter();

// lexical scoping 

        // function abcd(){
        //     let a = 10;
        //     console.log("huiyi")
        //     return function efgh(){
        //         let b = 11;
        //           console.log(a)
        //           return function ijkl(){
        //             let c = 12;
        //             console.log(b)
        //           }
        //     }
        // }
        // let aman = abcd();
        //  let priya = aman()
        //  priya();


// IIFE (IMMEDIATELY INVOAKED FUNCTION EXPRESSION)

        // (function(){
        //     alert("run it immediately now!!!!")
        // })();
        // used to create private scope instantally

// Pratice Question

// use rest pramenter to any number of scores and return total 

//    function totalScore(...scores){
//         let total = 0;
//         scores.forEach(function(score){
//         total = total + score;
//         })
//         return total;
//    }
//    console.log(totalScore(2,4,6,8,10))


// pass a function into other function and then excute it 

//     function greet(msg){
//         msg();
//     }
//     greet(function(){
//         console.log("hello, omkar here!!")
//     });