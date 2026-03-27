const express = require("express");
const router = express.Router();

// Normal login
router.post("/login", (req, res) => {
    const { user, pass } = req.body;

    if (user === "priya" && pass === "1234") {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

module.exports = router;