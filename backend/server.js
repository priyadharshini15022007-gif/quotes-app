const express = require("express");
const session = require("express-session");
const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(require("cors")());

app.use(session({ secret: "secret", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Import routes
const authRoutes = require("./auth");
const quoteRoutes = require("./quotes");

app.use("/", authRoutes);
app.use("/", quoteRoutes);

// GitHub Auth
passport.use(new GitHubStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "https://quotes-app-xlxr.onrender.com/auth/github/callback"
},
(accessToken, refreshToken, profile, done) => {
    return done(null, profile);
}));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));


app.listen(5000, () => console.log("Server running"));
