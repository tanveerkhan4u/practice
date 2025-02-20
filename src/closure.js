// function main(){
//     const name = 'tanveer';

//     function sayMyName(){
//         console.log(name);
        
//     }
//     sayMyName();
// }
// main();

// closure means that inner function has always access to the variables and parameters of the outer function, even after the outer function.

function a(){
    let name = 'tanveer'
    

    function b(){
        console.log(name)
    }
    b()
}

a()