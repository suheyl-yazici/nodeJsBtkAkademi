//? Sequelize ile yapılan kısım
// const Sequelize = require('sequelize');
// const sequelize = require('../utility/database');

// const Category = sequelize.define('category', {
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey: true
//     },
//     name : Sequelize.STRING,
//     description: {
//         type: Sequelize.STRING,
//         allowNull: true
//     }
// });



const getDb = require("../utility/database").getdb;
const mongodb = require("mongodb");

class Category {
    constructor(name,description) {
        this.name = name;
        this.description = description;
    }

    save() {
        const db = getDb();

        return db.collection('categories')
        .insertOne(this)
        .then(result => {
            console.log(result)
        })
        .catch(err =>{
            console.log(err);
        })
    }

    static findAll() {
        const db=  getDb();

        return db.collection('categories')
        .find()
        .toArray()
        .then(categories => {
            return categories;
        })
        .catch(err => console.log(err))
    }
}

module.exports = Category;
