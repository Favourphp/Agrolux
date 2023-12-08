// controllers/weatherController.js
const axios = require('axios');

const openWeatherMapApiKey = process.env.OPEN_WEATHER_MAP_API_KEY;
const openWeatherMapUrl = 'http://api.openweathermap.org/data/2.5/weather';

async function getWeatherData(state) {
    const params = {
        q: state + ',NG',
        appid: openWeatherMapApiKey,
    };

    try {
        const response = await axios.get(openWeatherMapUrl, { params });

        if (response.status === 200) {
            const temperature = response.data.main.temp;
            const humidity = response.data.main.humidity;
            return {
                state,
                temperature,
                humidity,
            };
        } else {
            throw new Error(`Error fetching weather data for ${state} from OpenWeatherMap: ${response.status}, ${response.statusText}`);
        }
    } catch (error) {
        throw new Error(`Error fetching weather data for ${state} from OpenWeatherMap: ${error.message}`);
    }
}

module.exports = {
    getWeatherData,
};
