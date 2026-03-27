const express = require("express");
const router = express.Router();

const quotes = {
    daily: [
        "Make today amazing ☀️",
        "Start your day with positivity 🌸",
        "Every day is a new beginning 🌅", 
        "Carpe Diem - Seize the day! 🌟",
        "Today is a gift, that's why it's called the present 🎁"
    ],
    motivational: [
        "Push yourself, no one else will 💪",
        "Success starts with discipline 🔥",
        "Don't stop until you're proud 🌟",
        "The harder you work, the luckier you get 🍀",
        "Believe in yourself and all that you are 🌈"
    ],
    inspirational: [
        "Dream bigger ✨",
        "You are capable of amazing things 🌟",
        "The best way to predict the future is to create it 🚀",
        "Your only limit is your mind 🧠",
        "Don't wait for opportunity, create it 🌱"
    ],
    life: [
        "Life is a journey 🌍",
        "Life is what happens when you're busy making other plans 🌈",
        "Enjoy every moment ❤️",
        "Live in the sunshine, swim the sea, drink the wild air 🌞",
        "In the end, we only regret the chances we didn't take 🌟"
    ]
};

// Track index per category
let indexMap = {
    daily: 0,
    motivational: 0,
    inspirational: 0,
    life: 0
};

router.get("/quote/:type", (req, res) => {
    const type = req.params.type;

    const list = quotes[type];

    if (!list) return res.json({ quote: "No quotes found" });

    const index = indexMap[type];
    const quote = list[index];

    // move to next index
    indexMap[type] = (index + 1) % list.length;

    res.json({ quote });
});

module.exports = router;