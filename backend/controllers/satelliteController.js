// axios is a library that helps us make HTTP requests to other APIs
const axios = require('axios')

// ============================================================
// FUNCTION 1: Get Current ISS Position
// This function calls the "Where The ISS At" API
// and returns the real-time position of the ISS
// ============================================================
const getISSPosition = async (req, res) => {
  try {
    // Step 1: Call the external ISS API
    // "async/await" means — wait for the API to respond before moving on
    const response = await axios.get(
      'https://api.wheretheiss.at/v1/satellites/25544'
      // 25544 is the official NORAD ID of the International Space Station
    )

    // Step 2: Send the data back to whoever called our API (frontend)
    res.json({
      success: true,
      data: {
        latitude: response.data.latitude,    // How far North or South
        longitude: response.data.longitude,  // How far East or West
        altitude: response.data.altitude,    // Height above Earth in km
        velocity: response.data.velocity,    // Speed in km/s
        visibility: response.data.visibility, // "daylight" or "eclipsed"
        timestamp: response.data.timestamp   // Current time in Unix format
      }
    })

  } catch (error) {
    // Step 3: If something goes wrong — send an error response
    // This could happen if the external API is down
    res.status(500).json({
      success: false,
      message: 'Failed to fetch ISS position',
      error: error.message
    })
  }
}

// ============================================================
// FUNCTION 2: Get Next ISS Passes Over a Location
// This function takes latitude & longitude from the frontend
// and returns the TLE data (orbital data) of the ISS
// TLE = Two Line Element — used to calculate future passes
// ============================================================
const getNextPasses = async (req, res) => {
  try {
    // Step 1: Get latitude and longitude from the request
    // These come from the URL like: /iss-passes?lat=24.86&lon=67.00
    const { lat, lon } = req.query

    // Step 2: Validate — make sure both values are provided
    // If not, send a 400 Bad Request error
    if (!lat || !lon) {
      return res.status(400).json({
        success: false,
        message: 'Latitude and Longitude are required!'
      })
    }

    // Step 3: Call the ISS TLE API
    // TLE data helps us calculate where ISS will be in the future
    const url = `https://api.wheretheiss.at/v1/satellites/25544/tles`
    const response = await axios.get(url)

    // Step 4: Send the TLE data back to the frontend
    res.json({
      success: true,
      data: response.data
    })

  } catch (error) {
    // Step 5: If something goes wrong — send an error response
    console.log('ERROR:', error.message)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch ISS passes',
      error: error.message
    })
  }
}

// ============================================================
// Export both functions so other files can use them
// routes/satellite.js imports these functions
// ============================================================
module.exports = {
  getISSPosition,
  getNextPasses
}