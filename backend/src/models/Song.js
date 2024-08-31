const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        maxlength: [50, 'Title cannot exceed 100 characters'],
    },
    artist: {
        type: String,
        required: [true, 'Artist is required'],
        maxlength: [50, 'Artist name cannot exceed 100 characters'],
    },
    album: {
        type: String,
        required: [true, 'Album is required'],
        maxlength: [50, 'Album name cannot exceed 100 characters'],
    },
    genre: {
        type: String,
        required: [true, 'Genre is required'],
        enum: ['Pop', 'Rock', 'Hip-Hop', 'Jazz', 'Classical', 'Electronic', 'Country'], 
    }
});

const Song = mongoose.model('Song', songSchema);

module.exports = Song;
