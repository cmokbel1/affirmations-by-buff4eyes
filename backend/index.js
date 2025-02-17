const { MongoClient } = require("mongodb");
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const Quote = require("./model/QuoteSchema");
dotenv.config(); // Load environment variables from .env

const app = express();
const PORT = process.env.PORT || 8080;
const MONGODB_URI =
	"mongodb+srv://frontend_client:buffirmationsClient@homeworkstuff.mjead.mongodb.net/affirmations-database?retryWrites=true&w=majority";
app.use((req, res, next) => {
	console.log("Time:", Date.now());
	next();
});
mongoose.set("debug", true);
app.use(bodyParser());
app.use(cors());
app.use(express.json());
// Connect to MongoDB
app.use(routes);
// app.use(router);
// app.get("/", async function (req, res) {
// 	console.log("you are gay");
// 	res.status(200).json({ text: "Hello World" });
// });
mongoose.connection = mongoose
	.connect(MONGODB_URI)
	.then(() => console.log("MongoDB connected"));

try {
	mongoose.connection.once("open", () => {
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	});
} catch (err) {
	console.error("MongoDB connection error:", err);
}
