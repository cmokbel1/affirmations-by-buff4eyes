const router = require("express").Router();
const { Quote } = require("../schemas/QuoteSchema");

router.get("/quote", async function (req, res) {
	try {
		const quote = await Quote.find();
		const count = await Quote.countDocuments();
		console.log(quote, count);
		res.json(quote);
	} catch (error) {
		res.status(error.status || 500).send(error.message);
	}
});

module.exports = router;
