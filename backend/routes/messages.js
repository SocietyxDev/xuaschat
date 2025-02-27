const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const Group = require('../models/Group');

// Route to send a message
router.post('/send', (req, res) => {
    const { sender, content, groupId } = req.body;
    const newMessage = new Message({ sender, content });
    newMessage.save()
        .then(message => {
            Group.findById(groupId)
                .then(group => {
                    if (!group) return res.status(404).json({ msg: 'Group not found' });
                    group.messages.push(message._id);
                    group.save()
                        .then(() => res.json(message))
                        .catch(err => res.status(400).json(err));
                })
                .catch(err => res.status(400).json(err));
        })
        .catch(err => res.status(400).json(err));
});

module.exports = router;
