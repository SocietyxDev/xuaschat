const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    groups: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Group' }]
});

module.exports = mongoose.model('User', userSchema);
