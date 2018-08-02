const request = require('request')

const geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    const encodedAddress = encodeURIComponent(address);

    request({
      url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
      json: true
    }, (error, response, body) => {
      if (error) {
        reject('Unable to connect to server')
      } else if (body.status === 'ZERO_RESULTS') {
        reject('Unable to find that address')
      } else if (body.status === 'OK'){
        resolve({
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        })
      }
    })
  })
}

geocodeAddress('191460000000000000000000').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}).catch((error) => {
  console.log(error);
})

// const asyncAdd = (a,b) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof a === 'number' && typeof b === 'number') {
//         resolve(a + b)
//       } else {
//         reject('arguments must be numbers')
//       }
//     }, 1500)
//   })
// }
//
// asyncAdd(3,1).then((result) => {
//   console.log(result);
//   return asyncAdd(result, 33)
// }).then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// })

// const somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('It worked')
//     // reject('It didnt work')
//   }, 2500)
// })
//
// somePromise.then((message) => {
//   console.log(message);
// }).catch((error) => {
//   console.log(error);
// })
