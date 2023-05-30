// // Basic Structure

// let promise = new Promise((resolve, reject) => {
//     let a = 1 + 1
//     if (a == 3)
//         resolve("Success")
//     else
//         reject("Failed")
// })

// promise.then((message) => {
//     console.log(message)
// }).catch((err) => {
//     console.log(err)
// })

// // Promise BST

// promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //console.log("Promise Fulfilled")
//         //resolve("Success")
//         console.log("Promise Rejected")
//         reject(new Error("404"))
//     }, 5000);
// })

// promise.then((response) => {
//     console.log(response)
// }).catch((err) => {
//     console.log(err)
// })

// console.log(promise)

// ------------------------------- {Async Await}

function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Done");
      }, 5000);
    });
  }
  
  // wait for the promise to resolve then clg the data
  const fiveSecLater = async () => {
    console.log("Loading...")
    const res = await fetchData();
    console.log(res);
  };
  
  fiveSecLater();
  


  