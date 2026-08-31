// Basic HTTP Server using Node.js http module

const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(`[SERVER] Request received: ${req.method} ${req.url}`);

  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    console.log("[SERVER] Sending Welcome response");

    res.statusCode = 200;

    res.end(`
            <h1>Welcome to Smart Utility Toolkit</h1>
            <p>Home Page</p>
        `);
  } else if (req.url === "/about") {
    console.log("[SERVER] Sending About response");

    res.statusCode = 200;

    res.end(`
            <h1>About</h1>
            <p>This project demonstrates Node.js core modules.</p>
        `);
  } else if (req.url === "/contact") {
    console.log("[SERVER] Sending Contact response");

    res.statusCode = 200;

    res.end(`
            <h1>Contact</h1>
            <p>Email: support@example.com</p>
        `);
  } else {
    console.log("[SERVER] Route not found");

    res.statusCode = 404;

    res.end(`
            <h1>404 - Page Not Found</h1>
            <p>Invalid route.</p>
        `);
  }
});

server.listen(PORT, () => {
  console.log(" HTTP Server Started");

  console.log(`Server running at http://localhost:${PORT}`);

  console.log("Available routes:");

  console.log("/");
  console.log("/about");
  console.log("/contact");
});
