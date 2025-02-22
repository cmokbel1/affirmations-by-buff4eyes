const router = require("express").Router();
const Quote = require("../model/QuoteSchema");

router.get("/quote", async function (req, res) {
	console.log("fetching quote");
	try {
		const count = await Quote.countDocuments();
		const random = Math.floor(Math.random() * count);
		const quote = await Quote.findOne().skip(random);
		res.status(200).json(quote);
	} catch (error) {
		res.status(error.status || 500).send(error.message);
	}
});

module.exports = router;
