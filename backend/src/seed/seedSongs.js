const mongoose = require('mongoose');
const connectDB = require('../config/db');
const Song = require('../models/Song');

const seedSongs = async () => {
    await connectDB();

    // Define seed data
    const songs = [
        {
            title: 'Bohemian Rhapsody',
            artist: 'Queen',
            album: 'A Night at the Opera',
            genre: 'Rock',
        },
        {
            title: 'Shape of You',
            artist: 'Ed Sheeran',
            album: '÷ (Divide)',
            genre: 'Pop',
        },
        {
            title: 'Billie Jean',
            artist: 'Michael Jackson',
            album: 'Thriller',
            genre: 'Pop',
        },
        {
            title: 'Imagine',
            artist: 'John Lennon',
            album: 'Imagine',
            genre: 'Rock',
        },
        {
            title: 'Hotel California',
            artist: 'Eagles',
            album: 'Hotel California',
            genre: 'Rock',
        },
    ];

    try {
        // Clear existing data
        await Song.deleteMany({});
        console.log('Songs collection cleared');

        // Insert seed data
        await Song.insertMany(songs);
        console.log('Songs collection seeded');

        mongoose.connection.close();
        console.log('Database connection closed');
    } catch (err) {
        console.error(err.message);
        mongoose.connection.close();
        process.exit(1);
    }
};

seedSongs();
