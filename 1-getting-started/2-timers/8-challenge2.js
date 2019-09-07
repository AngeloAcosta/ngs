// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.

// const n = setTimeout(
//     () => console.log('Hello after 0.5 seconds. MAYBE!'),
//     500,
// );

// for (let i = 0; i < 1e10; i++) {
//     // Block Node Synchronously
// }

let counter = 0;

const myF = () =>{
    console.log("Hello World");
    counter += 1;

    if (counter == 5){
        console.log("Done!");
        // clearInterval(timerId);
    }
}

const timerId = setInterval(myF,1000);