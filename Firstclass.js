// Name = "Kanchan Mehta";
// Age = "45";
// Date = "04.09.2024";
// x = "Null";
// Y = 
// console.log(Name)
// console.log(Age)
// console.log(Date)

//object
// const profile = {
//     Username : "Kanchan Mehta",
//     isfollow : true,
//     followers : 456,
//     following : 1,
// }
// console.log(typeof(profile["Username"]));

//conditionals in js
// let user = true;
// if (user){
//     console.log("watching movies..");
// }
// else{console.log("Login");}

// let age = 18;
// if (age >= 18){
//     console.log("Can apply for driving license.");
//     }
// else if (age == 17){
//     console.log("Can apply for learner's license");
// }
// else {
//     console.log("Cannot Apply");
// }


    // a = Number(3);
    // b = Number(8);
    // //Write your code here
    // LHS = (a+b)**3;
    // RHS = a**3+b**3+3*a**2*b+3*a*b**2;
    // console.log(LHS);
    // console.log(RHS);
    // if (LHS==RHS){
    //   console.log("VERIFIED");
    // }
    // else {
    //   console.log("NOT VERIFIED");
    // }
     

    function averageGrade(arr) {
        // return the average value
        let sum = 0;
         for (let i = 0; i < arr.length; i++) {
           sum += arr[i];
         }
         return sum / arr.length;
       // do not console.log here
       }
       
       /*Do not change the code below */
       
       var readline = require("readline").createInterface(process.stdin);
       
       let inputArr = [];
       var lineNumber = -1;
       var inputSize;
       
       //multipleline input from User
       readline.on("line", readInputs);
       
       function readInputs(line) {
         inputArr.push(line);
         lineNumber++;
       
         //Exit Condition
         if (lineNumber == 0) {
           logic("s");
           readline.close();
         }
       }
       
       function logic(input) {
         let str = JSON.parse(inputArr[0].trim());
         console.log(averageGrade(str));
       }
       
      let num  = n;
      for(let i = 1; i <= 10;, i++)
      {
        console.log(`${n} * ${i}`);
    }