// routes/weatherRoute.js
const express = require('express');
const { getWeatherData } = require('../controllers/weatherController');

const router = express.Router();

router.get('/weather', async (req, res) => {
    const state = req.query.state;
    if (!state) {
        return res.status(400).json({ error: 'State parameter is required' });
    }

    try {
        const weatherData = await getWeatherData(state);
        res.json(weatherData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
