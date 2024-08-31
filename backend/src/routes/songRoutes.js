const express = require('express');
const router = express.Router();
const songController = require('../controllers/songController');

router.post('/songs', songController.createSong);
router.get('/songs', songController.getAllSongs);
router.put('/songs/:id', songController.updateSong);
router.delete('/songs/:id', songController.deleteSong);
router.get('/songs/stats', songController.getStats);

module.exports = router;
