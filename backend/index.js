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
	console.log("Time:", Date.now().toLocaleString());
	next();
});

app.use(bodyParser());
app.use(cors());
app.use(express.json());

app.use(routes);

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
