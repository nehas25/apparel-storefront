const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/apparel';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${connectionString}`);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

mongoose.connection.on('error', (error) => {
    console.log(`Mongoose error: ${error}`);
});

module.exports = {
    Item: require('./Item'),
}