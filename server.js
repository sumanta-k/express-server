const http = require("http");
const PORT = 3000 || process.env.PORT;

const server = http.createServer((req, res) => {
    const urlPath = req.url;

    if (urlPath === "/") {
        res.write("<h1>served from http core module</h1>");
        res.write("<p>This is the website page</p>");
        res.end();
    } else if (urlPath === "/greet") {
        res.write("<html>");
        res.write("<h3>Thank you for coming</h3>");
        res.write("<strong>Visit Us Again</strong>");
        res.write("</html>");
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
