const mongoose = require('mongoose');
exports.connectToDatabase = async () => {
    mongoose.connect(`${process.env.DB_URI}/${process.env.DB_NAME}`)
    .then(() => {
        console.log('Connected to MongoDB database');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB database:', error);
    });
}