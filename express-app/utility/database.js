//! mysql bağlantısı
// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('node-app', 'root', 'mysql1234', {
//     dialect: 'mysql',
//     host: 'localhost',
//     port: 3307
// });

// module.exports = sequelize;


const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb://localhost/node-app') //yerel serverda bu şekilde yapıyoruz.bulut üzerinde ki bağlantıyı yapmadım
    .then(client => {
        console.log('connected değiştirildi');
        _db = client.db();
        callback();
    })
    .catch( err => {
        console.log(err);
        throw err;
    })
}
const getdb = () => {
    if (_db) {
        return _db;
    }
    throw 'No database';
}


exports.mongoConnect = mongoConnect;
exports.getdb = getdb;