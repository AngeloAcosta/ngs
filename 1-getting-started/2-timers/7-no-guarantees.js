setTimeout(
  () => console.log('Hello after 0.5 seconds. MAYBE!'),
  500,
);

for (let i = 0; i < 1e10; i++) {
  // Block Node Synchronously
}

// var count = 0;
// const test1 = () => console.log('Hello after 0.5 seconds. MAYBE!');
// const test = setTimeout(test1, 500);

// for (let i = 0; i < 1e10; i++) {
//   console.log(test1);
// }
