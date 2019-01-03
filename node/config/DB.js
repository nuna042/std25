var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/dsd25db').then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database : ' + err) },
    disconnected => { console.log('Database is Disconnected : ' + disconnected) }
);

process.on('SIGINT', () => {
    mongoose.connection.close(()=> {
        console.log('Database is Disconnected through app terminate');
        process.exit(0);
    });
});

/*
module.exports = {
    DB: 'mongodb://localhost:27017/dsd25db'
};
*/