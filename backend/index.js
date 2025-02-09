const { MongoClient } = require("mongodb");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Quote } = require("./schemas/QuoteSchema");
dotenv.config(); // Load environment variables from .env

const app = express();
const PORT = process.env.PORT || 8080;
const MONGODB_URI =
	"mongodb+srv://frontend_client:buffirmationsClient@homeworkstuff.mjead.mongodb.net/afirrmations-database?retryWrites=true&w=majority";

app.use(bodyParser());
app.use(cors());
app.use(express.json());
// Connect to MongoDB
try {
	mongoose.connect(MONGODB_URI).then(() => console.log("MongoDB connected"));
} catch (err) {
	console.error("MongoDB connection error:", err);
}
app.use(require("./routes"));
app.use(router);
// Define your routes
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
