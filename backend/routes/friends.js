const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Route to send a friend request
router.post('/request', (req, res) => {
    const { userId, friendId } = req.body;
    User.findById(userId)
        .then(user => {
            if (!user) return res.status(404).json({ msg: 'User not found' });
            user.friends.push(friendId);
            user.save()
                .then(() => res.json({ msg: 'Friend request sent' }))
                .catch(err => res.status(400).json(err));
        })
        .catch(err => res.status(400).json(err));
});

module.exports = router;
