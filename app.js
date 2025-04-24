// *************************************************** day-1 **********************************************************


// Problem: Do numbers ko add karke unka sum print karo.Example: agar input 5 aur 10 hai, toh output 15 hona chahiye.
// const sum = (a, b) => a + b;
// console.log(sum(5, 10));


// Problem: Ek number diya gaya hai, check karo ki woh even hai ya odd.Agar number even hai, toh print "Even", agar odd hai toh print "Odd".
// const checkNumber = (num) => {
//     if (num % 2 === 0) {
//         console.log("Even");
//     } else {
//         console.log("Odd");
//     }
// }
// checkNumber(8)


// Problem: Ek number diya gaya hai, uska factorial calculate karo.Example: agar input 4 hai, toh output 24 hoga(4! = 4 * 3 * 2 * 1).
// const findFactorial = (num) => {
//     let fact = 1;
//     for (let i = num; i > 0; i--) {
//         fact *= i;
//     }
//     return fact
// }
// console.log(findFactorial(4))




// *************************************************** day-2 **********************************************************


// Problem: Do numbers diye gaye hain. Batao kaunsa number bada hai.
// const findMax = (x, y) => {
//     if (x > y) {
//         console.log(x, "is greater");
//     } else {
//         console.log(y, "is greater")
//     }
// }
// findMax(9, 15)


// Problem: Ek number diya gaya hai. Check karo ki woh prime number hai ya nahi.
// const isPrime = (num) => {
//     if (num < 2) return false;
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(4) ? "prime" : "not prime");


// Problem: Ek number N diya gaya hai. 1 se leke N tak ke saare numbers print karo.
// const oneToN = (num) => {
//     for (let i = 1; i <= num; i++) {
//         console.log(i)
//     }
// }
// oneToN(5)





// *************************************************** day-3 **********************************************************




// Problem: Ek number diya gaya hai, uske sabhi digits ka sum nikaalo.
// let num = 12345;
// let sum = 0;
// while (num > 0) {
//     const lastDigit = num % 10;
//     sum += lastDigit;
//     num = Math.floor(num / 10);
// }
// console.log(sum)



// Problem: Ek number diya gaya hai, usko reverse karke print karo.
// let num = 12345;
// let rev = 0;
// while (num > 0) {
//     const lastDigit = num % 10;
//     rev = rev * 10 + lastDigit;
//     num = Math.floor(num / 10);
// }
// console.log(rev);



// Problem: Ek number diya gaya hai.Check karo ki woh palindrome hai ya nahi. (Palindrome = reverse karne par bhi same number)
// const checkPalindrome = (num) => {
//     const original = num;
//     let rev = "";
//     while (num > 0) {
//         const lastDigit = num % 10;
//         rev += lastDigit;
//         num = Math.floor(num / 10);
//     }
//     if (original == rev) {
//         return "Palindrome"
//     } else {
//         return "Not Palindrome"
//     }
// }
// console.log(checkPalindrome(131));





// *************************************************** day-4 **********************************************************



// Problem: Ek number diya gaya hai, usme kitne digits hain ye count karo.
// let num = 759;
// let count = 0;
// while (num > 0) {
//     num = Math.floor(num / 10);
//     count++;
// }
// console.log(count);



// Problem: Ek 3 - digit number diya gaya hai.Check karo ki woh Armstrong number hai ya nahi. ex- (1³ + 5³ + 3³ = 1 + 125 + 27 = 153)
// let num = 370;
// const original = num;
// let sum = 0;
// while (num > 0) {
//     const lastDigit = num % 10;
//     sum += Math.pow(lastDigit, 3);
//     num = Math.floor(num / 10);
// }
// console.log(original === sum ? "Armstrong Number" : "Not Armstrong Number")



// Problem: Do numbers diye gaye hain.Unka GCD(Greatest Common Divisor) ya HCF nikaalo. Input: 20, 28 → Output: 4
// const findHCF = (a, b) => {
//     let hcf = 1
//     for (let i = 1; i <= Math.min(a, b); i++) {
//         if (a % i === 0 && b % i === 0) {
//             hcf = i
//         }
//     }
//     return hcf
// }
// console.log(findHCF(20, 28))




// *************************************************** day-5 **********************************************************
