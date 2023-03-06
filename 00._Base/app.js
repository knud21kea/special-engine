import express from "express";
const app = express();

import path from "path";

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/pages/frontpage/frontpage.html"))
});

app.get("/documentaion", (req, res) => {
    res.sendFile(path.resolve("public/pages/documentation/documentation.html"))
});

const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("Server is running on port", PORT);
});
