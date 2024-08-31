const Song = require('../models/Song');

// Create a new song
exports.createSong = async (req, res) => {
    try {
        const song = await Song.create(req.body);
        res.status(201).json(song);
    } catch (err) {
        res.status(400).json({ message: 'Error creating song', error: err.message });
    }
};

// Get all songs
exports.getAllSongs = async (req, res) => {
    try {
        const songs = await Song.find();
        res.status(200).json(songs);
    } catch (err) {
        res.status(400).json({ message: 'Error fetching songs', error: err.message });
    }
};

// Update a song by ID
exports.updateSong = async (req, res) => {
    try {
        const song = await Song.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(song);
    } catch (err) {
        res.status(400).json({ message: 'Error updating song', error: err.message });
    }
};

// Delete a song by ID
exports.deleteSong = async (req, res) => {
    try {
        await Song.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Song deleted successfully' });
    } catch (err) {
        res.status(400).json({ message: 'Error deleting song', error: err.message });
    }
};

// Get statistics
exports.getStats = async (req, res) => {
    try {
        const stats = await require('../utils/stats').calculateStats();
        res.status(200).json(stats);
    } catch (err) {
        res.status(400).json({ message: 'Error fetching statistics', error: err.message });
    }
};
