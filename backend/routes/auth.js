const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/signup', (req, res) => {
    const { username, password } = req.body;
    const newUser = new User({ username, password });
    newUser.save()
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err));
});

router.post('/signin', (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username, password })
        .then(user => {
            if (!user) return res.status(400).json({ msg: 'Invalid credentials' });
            res.json(user);
        })
        .catch(err => res.status(400).json(err));
});

module.exports = router;
