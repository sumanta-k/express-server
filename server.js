const { createServer } = require("http");
const express = require("express");
const PORT = 3000 || process.env.PORT;

const server = createServer((req, res) => {
    const urlPath = req.url;

    if (urlPath === "/") {
        res.write("<h1>served from http core module</h1>");
        res.write("<p>This is the website page</p>");
        res.end();
    } else if (urlPath === "/about") {
        res.write("<html>");
        res.write("<head>about page</head>");
        res.write("<body>");
        res.write("<h1>We are in About page</h1>");
        res.write("</body>");
        res.write("</html>");
    } else if (req.url === "/greet") {
        res.write("<html>");
        res.write("<head><title>Greet</title></head>");
        res.write(
            "<body><h1>Ichigo is carrying all the BURDEN on his shoulder.</body>",
        );
        res.write("</html>");
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
