const somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('It worked')
    // reject('It didnt work')
  }, 2500)
})

somePromise.then((message) => {
  console.log(message);
}).catch((error) => {
  console.log(error);
})
