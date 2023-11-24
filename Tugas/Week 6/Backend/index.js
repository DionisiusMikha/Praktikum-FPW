const express = require("express");
const cors = require("cors");
const app = express();

app.use(
    cors({
        origin: "http://localhost:5173",
        optionsSuccessStatus: 200,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const apiRouter = require("./indexRouter");

app.use("/api", apiRouter);

const port = 3000;

const server = app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
        console.error(`Port ${port} is already in use. Please choose another port.`);
    } else {
        console.error("An error occurred while starting the server:", err.message);
    }
    process.exit(1);
});
