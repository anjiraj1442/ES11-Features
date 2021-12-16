//accept a list of promises and returns a new promise that resolves to an array of values, which were settled (either resolved or rejected) by the input promises.



const promise1 = new Promise((resolve, reject)=>{
     setTimeout(()=>{
          console.log('The first promise has resolved');
          resolve("one")
     },100)
});

const promise2 = new Promise((resolve, reject)=>{
     setTimeout(()=>{
          console.log('The second promise has resolved');
          resolve("two")
     },100)
});

const promise3 = new Promise((resolve, reject)=>{
     setTimeout(()=>{
          console.log('The third promise has resolved');
          reject("three")
     },100)
});


// Promise.allSettled([promise1, promise2])
//     .then((result) => {
//         console.log(result);
//     });
//op

// The first promise has resolved
// The second promise has resolved
// [
//   { status: 'fulfilled', value: 'one' },
//   { status: 'fulfilled', value: 'two' }
// ]

Promise.allSettled([promise1, promise2,promise3])
    .then((result) => {
        console.log(result);
    });
