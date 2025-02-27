const express = require('express');
const router = express.Router();
const Group = require('../models/Group');

// Route to create a group
router.post('/create', (req, res) => {
    const { name, members } = req.body;
    const newGroup = new Group({ name, members });
    newGroup.save()
        .then(group => res.json(group))
        .catch(err => res.status(400).json(err));
});

module.exports = router;
