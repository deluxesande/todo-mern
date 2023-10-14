const connectDB = require("./db/connect");
const express = require("express");
const errorHandlerMiddleware = require("./middleware/errorHandler");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(
    cors({
        origin: "http://localhost:5173",
    })
);

app.use(express.json());
app.use("/api/v1/tasks", require("./routes/tasks"));

app.use(errorHandlerMiddleware);

const PORT = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, console.log(`Server running on port ${PORT}...`));
    } catch (error) {
        console.log(error);
    }
};

start();
