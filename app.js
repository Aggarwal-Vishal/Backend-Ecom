// const path = require("path");

// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const session = require("express-session");
// const MongoDBStore = require("connect-mongodb-session")(session);
// const { doubleCsrf: csrf } = require("csrf-csrf");
// const cookieParser = require("cookie-parser");
// const flash = require("connect-flash");

// const errorController = require("./controllers/error");
// const User = require("./models/user");

// const MONGODB_URI =
//   "mongodb+srv://vishalaggarwal_:Vishalrockk1@cluster0.vzygb.mongodb.net/test";

// const app = express();
// const store = new MongoDBStore({
//   uri: MONGODB_URI,
//   collection: "sessions",
// });

// const { doubleCsrfProtection } = csrf({
//   getSecret: () => "supersecret",
//   getTokenFromRequest: (req) => req.body._csrf,
// });

// app.set("view engine", "ejs");
// app.set("views", "views");

// const adminRoutes = require("./routes/admin");
// const shopRoutes = require("./routes/shop");
// const authRoutes = require("./routes/auth");

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "public")));
// app.use(
//   session({
//     secret: "my secret",
//     resave: false,
//     saveUninitialized: false,
//     store: store,
//   })
// );

// app.use(cookieParser("supersecret"));
// app.use(doubleCsrfProtection);
// app.use(flash());

// app.use((req, res, next) => {
//   if (!req.session.user) {
//     return next();
//   }
//   User.findById(req.session.user._id)
//     .then((user) => {
//       req.user = user;
//       next();
//     })
//     .catch((err) => console.log(err));
// });

// app.use((req, res, next) => {
//   res.locals.isAuthenticated = req.session.isLoggedIn;

//   res.locals.csrfToken = req.csrfToken();
//   next();
// });

// app.use("/admin", adminRoutes);
// app.use(shopRoutes);
// app.use(authRoutes);

// app.use(errorController.get404);

// mongoose
//   .connect(MONGODB_URI)
//   .then((result) => {
//     app.listen(3000);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//  Github repo code

// const path = require("path");

// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const session = require("express-session");
// const MongoDBStore = require("connect-mongodb-session")(session);
// /** CSRF-CSRF PACKAGE */
// const { doubleCsrf: csrf } = require("csrf-csrf");
// const cookieParser = require("cookie-parser");
// const flash = require("connect-flash");

// const errorController = require("./controllers/error");
// const User = require("./models/user");

// /** REPLACE CONNECTION STRING IF USING ATLAS
//  *  "mongodb+srv://<username>:<password>@<cluster-id>.mongodb.net/<dbName>?retryWrites=true&authSource=admin"
//  */
// const MONGODB_URI =
//   "mongodb+srv://vishalaggarwal_:Vishalrockk1@cluster0.vzygb.mongodb.net/test";

// const app = express();
// const store = new MongoDBStore({
//   uri: MONGODB_URI,
//   collection: "sessions",
// });
// const csrfProtection = csrf({
//   getSecret: () => "supersecret",
//   getTokenFromRequest: (req) => req.body._csrf,
// });

// app.set("view engine", "ejs");
// app.set("views", "views");

// const adminRoutes = require("./routes/admin");
// const shopRoutes = require("./routes/shop");
// const authRoutes = require("./routes/auth");

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "public")));
// app.use(
//   session({
//     secret: "my secret",
//     resave: false,
//     saveUninitialized: false,
//     store: store,
//   })
// );
// /** CSRF-CSRF PACKAGE */
// app.use(cookieParser("supersecret"));
// app.use(csrfProtection.doubleCsrfProtection);
// app.use(flash());

// app.use((req, res, next) => {
//   if (!req.session.user) {
//     return next();
//   }
//   User.findById(req.session.user._id)
//     .then((user) => {
//       req.user = user;
//       next();
//     })
//     .catch((err) => console.log(err));
// });

// app.use((req, res, next) => {
//   res.locals.isAuthenticated = req.session.isLoggedIn;
//   res.locals.csrfToken = req.csrfToken();
//   next();
// });

// app.use("/admin", adminRoutes);
// app.use(shopRoutes);
// app.use(authRoutes);

// app.use(errorController.get404);

// mongoose
//   .connect(MONGODB_URI)
//   .then((result) => {
//     app.listen(3000);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

/// ANOTHER GIT REPO CODE //

// const path = require("path");

// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const session = require("express-session");
// const MongoDBStore = require("connect-mongodb-session")(session);
// /** CSRF-CSRF PACKAGE */
// const { doubleCsrf: csrf } = require("csrf-csrf");
// const cookieParser = require("cookie-parser");
// const flash = require("connect-flash");

// const errorController = require("./controllers/error");
// const User = require("./models/user");

// /** REPLACE CONNECTION STRING IF USING ATLAS
//  *  "mongodb+srv://<username>:<password>@<cluster-id>.mongodb.net/<dbName>?retryWrites=true&authSource=admin"
//  */

// const csrfSecret = "supersecret";
// const sessSecret = "csrfSecret";
// const cookieParserSecret = "cookieParserSecret";

// const MONGODB_URI =
//   "mongodb+srv://vishalaggarwal_:Vishalrockk1@cluster0.vzygb.mongodb.net/test";

// const store = new MongoDBStore({
//   uri: MONGODB_URI,
//   collection: "sessions",
// });

// const app = express();

// app.set("view engine", "ejs");
// app.set("views", "views");

// const adminRoutes = require("./routes/admin");
// const shopRoutes = require("./routes/shop");
// const authRoutes = require("./routes/auth");

// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.static(path.join(__dirname, "public")));
// app.use(
//   session({
//     secret: sessSecret,
//     resave: false,
//     saveUninitialized: false,
//     store: store,
//   })
// );

// const csrfProtection = csrf({
//   getSecret: () => csrfSecret,
//   getTokenFromRequest: (req) => req.body._csrf,
//   cookieName: "__Academ-psifi.x-csrf-token",
//   cookieOptions: {
//     secure: false,
//   },
// });

// app.use((req, res, next) => {
//   console.log("Request Body:", req.body); // Log the whole request bodyn
//   console.log("Incoming CSRF Token from client:", req.body._csrf);
//   console.log("Generated CSRF Token by server:", res.locals.csrfToken);
//   next();
// });

// /** CSRF-CSRF PACKAGE */
// app.use(cookieParser(cookieParserSecret));
// app.use(csrfProtection.doubleCsrfProtection);
// app.use(flash());

// app.use((req, res, next) => {
//   if (!req.session.user) {
//     return next();
//   }
//   User.findById(req.session.user._id)
//     .then((user) => {
//       req.user = user;
//       next();
//     })
//     .catch((err) => console.log(err));
// });

// app.use((req, res, next) => {
//   res.locals.isAuthenticated = req.session.isLoggedIn;
//   res.locals.csrfToken = req.csrfToken({ validateOnReuse: false });
//   next();
// });

// app.use("/admin", adminRoutes);
// app.use(shopRoutes);
// app.use(authRoutes);

// app.use(errorController.get404);

// mongoose
//   .connect(MONGODB_URI)
//   .then((result) => {
//     app.listen(3000);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const path = require("path");

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
/** CSRF-CSRF PACKAGE */
const { doubleCsrf: csrf } = require("csrf-csrf");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

const errorController = require("./controllers/error");
const User = require("./models/user");

const MONGODB_URI =
  "mongodb+srv://vishalaggarwal_:Vishalrockk1@cluster0.vzygb.mongodb.net/test";

const app = express();
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: "sessions",
});

const csrfProtection = csrf({
  getSecret: () => "supersecret",
  getTokenFromRequest: (req) => req.body._csrf,
});

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const authRoutes = require("./routes/auth");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);
/** CSRF-CSRF PACKAGE */
app.use(cookieParser("supersecret"));
app.use(csrfProtection.doubleCsrfProtection);
app.use(flash());

app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.csrfToken = req.csrfToken();
  next();
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);

mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
