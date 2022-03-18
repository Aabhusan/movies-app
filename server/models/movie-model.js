const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Movie = new Schema(
    {
        // name: { type: String, required: true },
        // time: { type: [String], required: true },
        // rating: { type: Number, required: false },
        name: String,
        time: [String],
        rating: Number,
    },
    { timestamps: true },
)

module.exports = mongoose.model('movies', Movie)
