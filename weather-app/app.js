const yargs = require('yargs');
const geocode = require('./geocode/geocode')
const weather = require('./weather/weather');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.address, (error, result) => {
  if (error) {
    console.log(error);
  } else {
    console.log(result.address);
    weather.getWeather(result.latitude, result.longitude, (error, weatherResult) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`Its currently ${weatherResult.temperature}. It feels like ${weatherResult.apparentTemperature}`);
      }
    });
  }
})
