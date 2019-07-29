const express = require('express');
const router = express.Router();

/**
 * GET v1/status
 */
router.get('/api/san/vmax/cc', (req, res) => res.send('OK'));

module.exports = router;
