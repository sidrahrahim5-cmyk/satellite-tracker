// Express Router — helps us define API endpoints
const express = require('express')
const router = express.Router()

// Import controller functions
// Controllers contain the actual logic
const {
  getISSPosition,
  getNextPasses
} = require('../controllers/satelliteController')

// ============================================================
// ROUTE 1: GET /api/satellite/iss-position
// When frontend calls this — getISSPosition function runs
// Example: http://localhost:5000/api/satellite/iss-position
// ============================================================
router.get('/iss-position', getISSPosition)

// ============================================================
// ROUTE 2: GET /api/satellite/iss-passes
// When frontend calls this — getNextPasses function runs
// Example: http://localhost:5000/api/satellite/iss-passes?lat=24.86&lon=67.00
// ============================================================
router.get('/iss-passes', getNextPasses)

// Export router so server.js can use it
module.exports = router