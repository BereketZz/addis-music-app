const Song = require('../models/Song');

exports.calculateStats = async () => {
    const totalSongs = await Song.countDocuments();
    const totalArtists = await Song.distinct('artist').then(artists => artists.length);
    const totalAlbums = await Song.distinct('album').then(albums => albums.length);
    const totalGenres = await Song.distinct('genre').then(genres => genres.length);

    const songsByGenre = await Song.aggregate([
        { $group: { _id: '$genre', count: { $sum: 1 } } }
    ]);

    const songsByArtist = await Song.aggregate([
        { $group: { _id: '$artist', count: { $sum: 1 } } }
    ]);

    const songsByAlbum = await Song.aggregate([
        { $group: { _id: '$album', count: { $sum: 1 } } }
    ]);

    return {
        totalSongs,
        totalArtists,
        totalAlbums,
        totalGenres,
        songsByGenre,
        songsByArtist,
        songsByAlbum
    };
};
