// Import required packages
const express = require('express')   // Web framework for Node.js
const cors = require('cors')         // Allows frontend to talk to backend
const dotenv = require('dotenv')     // Loads secret variables from .env file

// Load environment variables from .env file
// This must be called before using process.env
dotenv.config()

// Create Express application
const app = express()

// ============================================================
// MIDDLEWARE
// Middleware runs on every request before it reaches the route
// ============================================================

// Allow requests from frontend (React app on port 5173)
app.use(cors())

// Allow Express to understand JSON data in requests
app.use(express.json())

// ============================================================
// ROUTES
// Routes define what happens when a specific URL is called
// ============================================================

// Import satellite routes
const satelliteRoutes = require('./routes/satellite')

// All satellite routes will start with /api/satellite
// Example: /api/satellite/iss-position
app.use('/api/satellite', satelliteRoutes)

// Root route — just to check if server is running
app.get('/', (req, res) => {
  res.json({
    message: 'SatTracker Backend is Running!',
    version: '1.0.0',
    status: 'OK'
  })
})

// ============================================================
// START SERVER
// Listen for incoming requests on the specified port
// PORT comes from .env file — default is 5000
// ============================================================
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log('Server is running on port: ' + PORT)
})