const express = require("express");
const app = express();

const PORT = process.env.PORT || 8081; // Use Render's assigned port

app.get("/", (req, res) => {
    res.send("Welcome to Express on Render.");
});

app.get("/api", (req, res) => {
    res.send("You have requested http://localhost:" + PORT + "/api");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
