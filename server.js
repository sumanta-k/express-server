import express from "express";

import { startups } from "./data/data.js";
import { people as pupil } from "./data/data2.js";

const PORT = process.env.PORT || 3000;

const data = {
    name: "Ichigo",
    age: 23,
};

const app = express();

app.get("/", (req, res) => {
    res.json(startups);
});

app.get("/api", (req, res) => {
    // res.json(people);

    let filteredData = startups;
    const { industry, country, continent, is_seeking_funding, has_mvp } =
        req.query;

    if (industry) {
        filteredData = filteredData.filter(
            (startup) =>
                startup.industry.toLowerCase() === industry.toLowerCase(),
        );
    }
    // console.log(req.query);
    res.json(filteredData);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
