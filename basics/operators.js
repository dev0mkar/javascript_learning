// Operators

     // Arithmetic operators
     //  + , - , / , * , % ,**

     // + Plus Operator

          a = 1 + 3 ; 
          a = "om" + "kar";

     // - Minus Operator

          a = 4 - 1 ; 
          a = 10 - 5;

     // / - Divide Operator

          a = 12/6;
          a = 10/2;

     // * - Multiply Operator
          
          a = 10*2;
          a = 20*5;

     //% - Modulas  -> this returns reminder

          a = 12/2;
          output>0
          a = 12/5;
          output>2

          // ** - exponentiation Operator  
          
          a = 2 ** 3 
          output>8
     
     // Comparison Operators 
     //  == , === , != , !== , > , < , >= , <= 

     // == Not-Strict Comparision

          12 == 12    //true
          12 == "12" //true 
          12 == 13  //false
     
     // === // Strict Comparision

          12 === 12    //true
          12 === "12" //false 
          12 === 13  //false

     // !=   // Not-Strict Comparision

          12 != 13    //true
          12 != "12" //false

     // !== Strict Comparision

          12 !== 13    //true
          12 !== "12" //true
          12 !== 12  //false
     
     //  >  // Greater then 

          12 > 13   //false
          12 > 15  //true
     
     //  <  // Less/Smaller then 

          // 12<13    //true
          // 13<15   //false

     //  >=  // greater then or equal to 

          // 12 >= 13   //true
          // 12 >= 12  //false
          // 12 >= 11 //false  

     //   <= // less then or equal to 

          // 12<=13    //true
          // 12<=12   //true
          // 12<=11  //false

     // Assignment Operators

          // a = 10 ;       //10
          // a += 2 ;      //2
          // a -= 2 ;     //8
          // a *= 2 ;    //20
          // a /= 2 ;   //5
          // a %= 2 ;  //0

     // Logical Operators 

          // && this is AND Operator 

          // true  && false - false;
          // true  && true  - true ;
          // false && true  - false;

          // (if any one condition using AND Operator is false then it always return false) 

          // || this is OR Operator

          // true  || false - true;
          // false || false - true;
          // true  || true  - true;

          // (if any one condition is true then whole it returns true)

          // !  this is NOT Operator 

          // !12   - false;
          // !0    - true ; 
          // !true - false;

          // (its NOT Operator used to reverse the value if its true then false and if its false then true )

     // Urary Operator 
          // + - // this convert the datatype into number the value

          // +"5"     -  5
          // +"omkar" - NaN
          // +"12"    - 12

          // -  // this is used to minus the values

          // -"5"   -      //-5
          // -"omkar" -   //NaN
          // -"12"    -  //-12

          // ! // this is NOT Operator 

          // - !12  -       false;
          // - !0   -       true ;
          // - !undefined - true;

          // ++ this is increment operator 

               // let  a = 10 ;
               // ++a
               // output > 11;
               
               
          // -- this is decrement operator

                    // let b = 25;
                    // b-- + b ;
                    // output > 49

     // Ternary Operator 
     
          // // -    ?:  
          // 12>13 ? console.log("true") : ("false");
          // 13>12 ? console.log("true") : ("hui hui")

          // (its basically the conditions operator use same like if else )


// Typeof , Instanceof 
  
      // typeof
     //    typeof 12 - Number ;
     //    typeof "omkar" - String;
     //    typeof true     - Boolean;
     //    this are the quickes of the js it shows wrong type
     //    typeof null - Object;
     //    typeof []   - Object;
     //    typeof NaN  - Number;

      //Instance of (this work correct only with reference data type)

     //   a = [];
     //   a instanceof Array ;
     //   output > true ;

     //   b = {};
     //   b instanceof Object;
     //   output > true ;

     //   c = function c(){};
     //   c instanceof Array;
     //   output > false;
