// const axios = require('axios');
// require("dotenv").config();

// const openWeatherMapApiKey = process.env.OPEN_WEATHER_MAP_API_KEY  // Replace with your OpenWeatherMap API key
// const openWeatherMapUrl = 'http://api.openweathermap.org/data/2.5/weather';
// const openWeatherMapUrl2 = 'http://api.openweathermap.org/data/2.5/forecast';

// // List of Nigerian states
// const states = [
//     'Lagos',
//      'Abuja',
//       'Kano',
//        'Oyo',
//         'Rivers',
//          'Kaduna',
//           'Delta',
//            'Ogun',
//             'Ondo',
//              'Akwa Ibom',
//              'Ebonyi',
//              'Enugu',
//              'Imo',
//              'Anambra',
//              'Abia',
//               'Kogi',
//               'Nasarawa',
//               'Bauchi',
//               'Bayelsa',
//               'Edo',
//               'Kwara',
//               'Osun',
//               'Adamawa',
//               'Katsina',
//               'Cross River',
//               'Borno',
//               'Niger',
//               'Plateau',
//               'Taraba',
//               'Kebbi',
//               'Sokoto',
//               'Yobe',
//               'Jigawa',
//               'Zamfara',
//               'Gombe',
//               'Ekiti',
//               'Benue'
//     // Add more states as needed
// ];

// // Function to fetch weather data for a given state from OpenWeatherMap
// async function getWeatherData(state) {
//     const params = {
//         q: state + ',NG',
//         appid: openWeatherMapApiKey,
//     };

//     try {
//         const response = await axios.get(openWeatherMapUrl, openWeatherMapUrl2, { params });

//         if (response.status === 200) {
//             const temperature = response.data.main.temp;
//             const humidity = response.data.main.humidity;
//             console.log(`Weather in ${response.data.name}: Temperature ${temperature}°C, Humidity ${humidity}%`);
//         } else {
//             console.error(`Error fetching weather data for ${state} from OpenWeatherMap: ${response.status}, ${response.statusText}`);
//         }
//     } catch (error) {
//         console.error(`Error fetching weather data for ${state} from OpenWeatherMap: ${error.message}`);
//     }
// }

// const temperature = apiResponse.main.temp;
// const humidity = apiResponse.main.humidity;

// // Log or use the extracted values
// console.log(`Temperature: ${temperature}K`);
// console.log(`Humidity: ${humidity}%`);

// // Iterate through the list of states and fetch weather and soil pH data for each
// async function fetchDataForStates() {
//     for (const state of states) {
//         await getWeatherData(state);
       
//     }
// }

// // Run the script
// fetchDataForStates();
