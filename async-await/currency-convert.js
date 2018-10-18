const axios = require("axios");

// const getExchangeRate = (from, to) => {
//   return axios
//     .get(
//       "http://data.fixer.io/api/latest?access_key=fb6cc2f482ad28028939a96e414c1508"
//     )
//     .then(response => {
//       const euro = 1 / response.data.rates[from];
//       const rate = euro * response.data.rates[to];
//       return rate;
//     });
// };

const getExchangeRate = async (from, to) => {
  try {
    const response = await axios.get(
      "http://data.fixer.io/api/latest?access_key=fb6cc2f482ad28028939a96e414c1508"
    );
    const euro = 1 / response.data.rates[from];
    const rate = euro * response.data.rates[to];

    if (isNaN(rate)) {
      throw new Error();
    }

    return rate;
  } catch (e) {
    throw new Error("Unable to get exchange rate");
  }
};

// const getCountries = currencyCode => {
//   return axios
//     .get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
//     .then(response => {
//       return response.data.map(country => {
//         return country.name;
//       });
//     });
// };

const getCountries = async currencyCode => {
  try {
    const response = await axios.get(
      `https://restcountries.eu/rest/v2/currency/${currencyCode}`
    );

    if (!response) {
      throw new Error();
    }

    return response.data.map(country => {
      return country.name;
    });
  } catch (e) {
    throw new Error("Unable to get countries");
  }
};

// const convertCurrency = (from, to, amount) => {
//   let convertedAmount;
//   return getExchangeRate(from, to)
//     .then(rate => {
//       convertedAmount = (amount * rate).toFixed(2);
//       return getCountries(to);
//     })
//     .then(countries => {
//       return `${amount} ${from} is worth ${convertedAmount} ${to}. You can spend these in the following countries: ${countries.join(
//         ", "
//       )}`;
//     });
// };

const convertCurrency = async (from, to, amount) => {
  const rate = await getExchangeRate(from, to);
  const countries = await getCountries(to);
  const convertedAmount = (amount * rate).toFixed(2);
  return `${amount} ${from} is worth ${convertedAmount} ${to}. You can spend these in the following countries: ${countries.join(
    ", "
  )}`;
};

convertCurrency("CAD", "USD", 20).then(message => {
  console.log(message);
});

// getExchangeRate("USD", "CAD")
//   .then(rate => {
//     console.log(rate);
//   })
//   .catch(e => {
//     console.log(e);
//   });

// getCountries("USD")
//   .then(countries => {
//     console.log(countries);
//   })
//   .catch(e => {
//     console.log(e);
//   });
