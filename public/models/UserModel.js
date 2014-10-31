/**
 * Created by ridvanenis on 30/10/14.
 */
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema =  mongoose.Schema;

var userSchema = new Schema({
    email: { type: String, unique: true },
    password: String
});

userSchema.pre('save', function(next) {
    var user = this;
    if (!user.isModified('password')) return next();
    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
    console.log(this.password);
    var user = this;
     bcrypt.compare(candidatePassword, user.password, function(err, isMatch) {
        console.log(user);
        if (err) return cb(err);
        cb(null, isMatch);
    });
};


var UserModel = mongoose.model('User',userSchema);
exports.User = UserModel;
