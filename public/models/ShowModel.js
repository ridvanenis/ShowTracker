/**
 * Created by ridvanenis on 30/10/14.
 */
/**
 * Created by ridvanenis on 30/10/14.
 */
var mongoose = require('mongoose');
var Schema =  mongoose.Schema;

var showSchema = new Schema({
    _id: Number,
    name: String,
    airsDayOfWeek: String,
    airsTime: String,
    firstAired: Date,
    genre: [String],
    network: String,
    overview: String,
    rating: Number,
    ratingCount: Number,
    status: String,
    poster: String,
    subscribers: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    }],
    episodes: [{
        season: Number,
        episodeNumber: Number,
        episodeName: String,
        firstAired: Date,
        overview: String,
        watchlist: [{
            type: mongoose.Schema.Types.ObjectId, ref:'User'
        }]
    }]
});

var ShowModel = mongoose.model('Show',showSchema);
exports.Show = ShowModel;