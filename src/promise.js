// promise jo hota hai wo javascript me object hota hai jo represent krta hai ki koi bhi asynchronous operation complete hua hai ya fail hua hai eventual completion or failure.
// resolve callback function hai wo promise ko fulfill krne ke liye use hota hai aur reject callback function hai wo promise ko reject krne ke liye use hota hai.
// promise ka result handlekrne ke liye hum .then() jab operation succeed hoga to .then krega aur jab failed operation hoga to .catch()krega method ka use krte hai.


const promise = new Promise((resolve, reject) => {
    const randomNum = Math.random()
    if(randomNum > 0.5){
        resolve(randomNum)
    }
    else{
        reject(new Error('Random number is less than 0.5'))
    }
        
})
promise.then((result) => {
console.log('random number is', result)
})                      
.catch((error) => {
console.log(error)
})

