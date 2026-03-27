let isLoading = false; // prevent multiple clicks

function loadQuotes(type) {

    const quoteEl = document.getElementById("quote");

    // Fade out
    quoteEl.style.opacity = 0;

    fetch(`https://quotes-app-xlxr.onrender.com/quote/${type}`)
    .then(res => res.json())
    .then(data => {

        setTimeout(() => {
            quoteEl.innerText = data.quote;
            quoteEl.style.opacity = 1;
        }, 200);

        const now = new Date();
        document.getElementById("date").innerText =
            now.toDateString();

        document.body.className = type;
    })
    .catch(err => console.log(err));
}

function login() {
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();

    console.log("Sending:", user, pass); // debug

    fetch("https://quotes-app-xlxr.onrender.com/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ user, pass })
    })
    .then(res => res.json())
    .then(data => {
        console.log("Response:", data);

        if (data.success) {
            window.location.href = "quotes.html";
        } else {
            alert("Invalid Login");
        }
    })
    .catch(err => console.log(err));
}
