const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const quoteSchema = new Schema({
	author: String,
	quote: String,
});

const Quote = model("Quote", quoteSchema, "Quotes");

module.exports = Quote;
