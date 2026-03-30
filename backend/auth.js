const express = require("express");
const router = express.Router();

const passport = require("passport");

// Normal login
router.post("/login", (req, res) => {
    const { user, pass } = req.body;

    if (user === "priya" && pass === "1234") {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

// GitHub login route
router.get("/auth/github",
    passport.authenticate("github", { scope: ["user:email"] })
);

// GitHub callback
router.get("/auth/github/callback",
    passport.authenticate("github", {
        failureRedirect: "/login.html"
    }),
    (req, res) => {
        res.redirect("https://quotes-app-alpha-lemon.vercel.app/quotes.html");
    }
);

module.exports = router;
