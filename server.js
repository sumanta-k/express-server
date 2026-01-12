import express from "express";

import { startups } from "./data/data.js";
import { people } from "./data/data2.js";

const PORT = process.env.PORT || 3000;

const data = {
    name: "Ichigo",
    age: 23,
};

const app = express();

app.get("/", (req, res) => {
    res.json(startups);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
