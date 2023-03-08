import express from "express";
const app = express();

import clickMe from "./util/documentation.js";
clickMe();
import path from "path";

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/pages/frontpage/frontpage.html"))
});

app.get("/index", (req, res) => {
    res.sendFile(path.resolve("public/pages/documentation/index.html"))
});

app.get("/documentation/:page", (req, res) => {
    res.sendFile(path.resolve('public/pages/documentation/page' + req.params.page + '.html'))
});

const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("Server is running on port", PORT);
});
