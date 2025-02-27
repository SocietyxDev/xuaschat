const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const friendRoutes = require('./routes/friends');
const groupRoutes = require('./routes/groups');
const messageRoutes = require('./routes/messages');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/chat', { useNewUrlParser: true, useUnifiedTopology: true });

// Use routes
app.use('/auth', authRoutes);
app.use('/friends', friendRoutes);
app.use('/groups', groupRoutes);
app.use('/messages', messageRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
