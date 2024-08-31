const Joi = require('joi');

const songValidationSchema = Joi.object({
    title: Joi.string().max(100).required(),
    artist: Joi.string().max(100).required(),
    album: Joi.string().max(100).required(),
    genre: Joi.string().valid('Pop', 'Rock', 'Hip-Hop', 'Jazz', 'Classical', 'Electronic', 'Country').required(),
});

module.exports = songValidationSchema;
