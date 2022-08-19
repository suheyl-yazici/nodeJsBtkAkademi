const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const session = require('express-session');
const mondoDbStore = require('connect-mongodb-session')(session)

app.set("view engine", "pug");
app.set("views", "./views");

const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/shop");
const accountRoutes = require("./routes/account");


const errorController = require("./controllers/errors");

// ? Bunlar mysql ile oluşturduklarımız.
//? const sequelize = require("./utility/database");

//? const Category = require("./models/category");
//? const Product = require("./models/product");
//? const User = require("./models/user");
//? const Cart = require("./models/cart");
//? const CartItem = require("./models/cartItem");
//? const Order = require("./models/order");
//? const OrderItem = require("./models/orderItem");

const User = require("./models/user");
const ConnectionString = 'mongodb://localhost/node-app';

var store = new mondoDbStore({
  uri: ConnectionString,
  collection: 'mySessions'
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 3600000
  },
  store: store
}))


app.use((req,res,next) => {
  User.findOne({name: 'sadikturan'})
  .then(user => {
    req.user = user;
    next();
  })
  .catch(err => {
    console.log(err)
  })
})


//? app.use((req, res, next) => {
//?   User.findByPk(1)
//?     .then((user) => {
//?       req.user = user;
//?       next();
//?     })
//?     .catch((err) => {
//?      console.log(err);
//?     });
//? });

// routes
app.use("/admin", adminRoutes);
app.use(userRoutes);
app.use(accountRoutes);

app.use(errorController.get404Page);

// // Product.hasOne(Category);  //belongsTo ile aynı işlemi yapıyor
//? Product.belongsTo(Category, {
//?   foreignKey: {
//?     allowNull: false,
//?   },
//? }); //bire bir ilişki
//? Category.hasMany(Product); //bire çok ilişki

//? Product.belongsTo(User);
//? User.hasMany(Product);

//? User.hasOne(Cart);
//? Cart.belongsTo(User);

//? Cart.belongsToMany(Product, { through: CartItem });
//? Product.belongsToMany(Cart, { through: CartItem });

//? Order.belongsTo(User);
//? User.hasMany(Order);

//? Order.belongsToMany(Product, {through: OrderItem});
//? Product.belongsToMany(Order, {through: OrderItem});

//? BUnlar da mysql ile oluşturduklarım
// let _user;
// sequelize
//   // .sync({force : true})
//   .sync()
//   .then(() => {
//     User.findByPk(1)
//       .then((user) => {
//         if (!user) {
//           return User.create({
//             name: "sadikturan",
//             email: "email@gmail.com",
//           });
//         }
//         return user;
//       })
//       .then((user) => {
//         _user = user;
//         return user.getCart();
//       })
//       .then((cart) => {
//         if (!cart) {
//           return _user.createCart();
//         }
//         return cart;
//       })
//       .then(() => {
//         Category.count().then((count) => {
//           if (count === 0) {
//             Category.bulkCreate([
//               { name: "Telefon", description: "telefon kategorisi" },
//               { name: "Bilgisayar", description: "bilgisayar kategorisi" },
//               { name: "Elektronik", description: "Elektronik kategorisi" },
//             ]);
//           }
//         });
//       });
//   })

//   .catch((err) => {
//     console.log(err);
//   });


/*
mongoConnect((client) => {
  User.findByUserName("sadikturan")
    .then((user) => {
      if (!user) {
        user = new User("sadikturan", "email@sadikturan");
        return user.save();
      }
      return user;
    })
    .then((user) => {
      console.log(user);
      app.listen(3000);
    })
    .catch(err => {
      console.log(err)
    })
});
*/

mongoose.connect(ConnectionString)
.then(() => {
app.listen(3000);
})
.catch(err => {
  console.log(err);
})
