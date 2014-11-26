/**
 * Created by ridvanenis on 30/10/14.
 */
/**
 * Created by ridvanenis on 30/10/14.
 */
var mongoose = require('mongoose');
var Schema =  mongoose.Schema;

var episode = new Schema({
    season: Number,
    episodeNumber: Number,
    episodeName: String,
    firstAired: Date,
    overview: String,
    watchlist: [{
        type: mongoose.Schema.Types.ObjectId, ref:'User'
    }]
});

mongoose.model('episode', episode);

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
    episodes: [episode]
});


var ShowModel = mongoose.model('Show',showSchema);
exports.Show = ShowModel;