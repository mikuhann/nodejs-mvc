const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/mongodb');

const app = express();

// database
connectDB();
// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// controllers
const UserController = require('./controllers/UserController');
// routes
app.post('/api/user/create', UserController.create);
app.put('/api/user/update/:id', UserController.update);
app.get('/api/user/all', UserController.getUsers);
app.delete('/api/user/delete/:id', UserController.deleteUser);
// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is started on ${PORT}`));
