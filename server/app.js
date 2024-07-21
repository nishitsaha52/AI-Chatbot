// app.js
require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");
const router = require("./routes/router");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const passport = require("./passport"); // Require passport.js file
const session = require("express-session");
const path = require('path');

const authRoutes = require("./routes/openaiRoutes");

const { SESSION_SECRET } = process.env;

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(router);

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get("/auth/google/callback", passport.authenticate("google", {
    successRedirect: "http://localhost:3000/homepage",
    failureRedirect: "http://localhost:3000/login"
}));

app.get("/auth/github", passport.authenticate("github", { scope: ["user:email"] }));

app.get("/auth/github/callback", passport.authenticate("github", {
    successRedirect: "http://localhost:3000/homepage",
    failureRedirect: "http://localhost:3000/login"
}));

app.get("/auth/facebook", passport.authenticate("facebook", { scope: ["public_profile", "email"] }));

app.get("/auth/facebook/callback", passport.authenticate("facebook", {
    successRedirect: "http://localhost:3000/homepage",
    failureRedirect: "http://localhost:3000/login"
}));

app.get("/login/success", async (req, res) => {
    if (req.user) {
        res.status(200).json({ message: "User login successful", user: req.user });
    } else {
        res.status(400).json({ message: "Not Authorized" });
    }
});

app.get("/logout", (req, res, next) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect("http://localhost:3000");
    });
});

app.use("/api/v1/openai", require("./routes/openaiRoutes"));

const port = 8009;
app.listen(port, () => {
    console.log(`Server started at port number: ${port}`);
});
