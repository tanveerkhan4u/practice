// function main(){
//     const name = 'tanveer';

//     function sayMyName(){
//         console.log(name);
        
//     }
//     sayMyName();
// }
// main();

// closure means that inner function has always access to the variables and parameters of the outer function, even after the outer function.basically closure jo hai scope chain ko create krte phle inner function variable ko inner function me find krta hai aise hi outer function me find krta aur globally bhi variable ko find krta hai



// function outer(){
//     let a = 5

//     function inner(){
//         function inner2(){
//             console.log(a)

//         }
//         inner2()
//     }
//     return inner
// }

// const result = outer()
// result()



function outer(){
let a=5;

function inner(){

    function inner3(){

        console.log(5)
    }
    inner3()

}
return inner

}

const result = outer()
result()
