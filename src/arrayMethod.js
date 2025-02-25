// concat method mean concatination
// ye use hota hai jab dono array ko combine krke new array bnana ho aur array me value add krni ho vo bhi ho sakta hai

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = ["a", "b", "c", "d", "e"];

// const newArr = arr1.concat(arr2);
// console.log(newArr);

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = ["tanveer", "ahmed", "khan"];


// const newArr = arr2.concat(arr1);
// console.log(newArr);

// const arr1 = [1, 2, 3, 4, 5];

// const NewArr = arr1.concat(100);
// console.log(NewArr);


// join method
// array ke element ko jodh ke string banta hai mtlb uske beech me seperator mtlb question mark ya space kuch bhi daal ke join krte hai usko string bana sakte hai simple elementr ko milake string bana sakte hai ye string return karta hai as a seperator  use krta hai jo string me add krna ho vo add krta hai like comma space question mark etc

// const arr2 = ["tanveer", "ahmed", "khan"];
// const arr1 = [1, 2, 3, 4, 5];

// const newArr = arr2.join("  ");
// console.log(newArr);

// const arr1 = ["how", "are", "you", "baby"];

// const joinMethod = arr1.join(" ");
//     console.log(joinMethod);

// Slice Method
// slice mtlb tukda krna part krna means it is used to extract a part of array and return a new array without modifying the original array. yani ki isme hmm index dete hai starting kha se or end kha tk chahiye ahr hmm index na de to puri ki puri array return kr dega aur new array dega aur purani array me change nii krega aur main point jha se extract krenge to starting index include hoga or end index exclude nhi hoga

// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const sliceArr = arr1.slice(1);
// console.log(sliceArr);


// const arr1 = [100, 200, 300, 400, 500, 600, 700, 800, 900];

// const sliceMethod = arr1.slice(0,6);
// console.log(sliceMethod);

// indexOf method

// push method 

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// push method me array ke element kuch bhi add krna mtlb insert krta hai chahe wo number ho ya string
 
// arr.push(11)
// console.log(arr);

// pop method

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// pop method me array ke last element ko remove krta hai

// arr.pop()
// console.log(arr);

// toString method
// array ko string me convert krta hai aur new string array me return krta hai

const array = ["tanveer", "ahmed", "khan", "how", "are", "you", "baby"];

const string = array.toString();
console.log(string);