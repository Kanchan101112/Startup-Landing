// // let groupA = ["love", "care", "affection", "submission", "admiration"];
// // deletedWord = groupA.shift();

// // console.log(groupA);//(4) ['care', 'affection', 'submission', 'admiration']
// // console.log("deleted word =", deletedWord);

// // let age = 45;
// // if(age >= 18){
// //     console.log("can vote");
// // }else {console.log("cannot vote");}

// // //split method in js
// // let string = "My favourite language is JavaScript";
// // console.log(string.split());//converts whole string to an array of one element
// // //['My favourite language is JavaScript']

// // console.log(string.split(" "));// gives seperate elements after each space
// // //(5) ['My', 'favourite', 'language', 'is', 'JavaScript']

// // console.log(string.split(""));//makes each character an element of the array
// // //(35) ['M', 'y', ' ', 'f', 'a', 'v', 'o', 'u', 'r', 'i', 't', 'e', ' ', 'l', 'a', 'n', 'g', 'u', 'a', 'g', 'e', ' ', 'i', 's', ' ', 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']


// // //Array reduce method
// // let digit = 4867267

// // let total = digit.toString().split("").reduce((acc, element) => acc + parseInt(element), 0);
// //    console.log(total);
  
// // let number = parseInt(9);
// // function isPrime(number){
// //     if (number <2){
// // return false;}
// // for (let i = 2; i < number; i++){
// //     if (number%i ===0){
// // return false;}  
// // }
// // return true;
// // }
// // if (isPrime(number)){
// //     console.log(`${number} is a prime number`);
// //   } else {
// //     console.log(`${number} is not a prime number`);
// //   }

// // let string = "My Name is Kanchan";
// // function numOfWords(string){
// //   // Your code here
// // var words = string.split(" ")
// //   // return the output , do not use console.log here
// // return words.length;
// //  }console.log(numOfWords(string));//4
// // let num  = "7";
// // for(let i = 1; i <= 10; i++)
// // {
// //   console.log(`${num} x ${i} = ${num*i}`);
// // }

// // let n = prompt("Enter your Input");

// //     if (n >= 0 & n <9) {
// //         console.log(n); 
// //     }
// //     let reverseNum = 0;
// //     while (n>0){
// //     let remain = n%10;
// //     reverseNum = reverseNum*10 + remain
// //     n = Math.floor(n/10);
// //     }console.log(`Reverse of input is ${reverseNum}`);

// // let n = prompt();
// // function SumofDigits(n) {
// //     //complete this function
// //     if (n < 10)
// //     return n;
    
// //     // Recursive call
// //     let remain = n % 10 
// //     n = Math.floor(n / 10);
// //     return remain+n;
// // }console.log(SumofDigits(n));

// let t = Number(4);
// let index = 1;

// while(t > 0) {
// let n = Number(t[index]);
// // Write your code here
//   let midPoint = Math.floor(n / 2)+1;
// //printing th upper half
// for (let i = 1; i <=midPoint; i++){
//     let str = "";
// for (let j = midPoint - i; j > 0; j--) {
//   str += " ";}
// for (let j  = 1; j <=2*i -1; j++){
//     str += "*";
//   }
// console.log(str);}
// //printing the lower half of diamond
// for (let i = 1; i < midPoint; i++){
//     let str = "";
// for (let j = 1; j <= i; j++) {
//   str += " ";}
// for (let j  = 1; j <=2*(midPoint -i)-1; j++){
//     str += "*";
//   }
// console.log(str);}}

// function celToForen(num){
//   let fahrenhiat = num*(9/5) + 32
//   return fahrenhiat;
// }
// console.log

// let arr = [4, 5 ,8 ,6 ,7, 9, 3];
// let start = arr[0];
// function reverseArray(arr, start, end) {
//   while(start < end) {
//     // Swap elements at start and end
//     let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;

//     // Move start and end inward
//     start += 1;
//     end -= 1;
//   return start;}
// }
// reverseArray(arr, start, end);

// let fruits = ["apple", "banana","cherry"];
// for (i=0; i<fruits.length;i++);{
//     if (fruits[i]="banana"){
//         console.log("exists");
//     }
// }
