const router = require("express").Router();

router.use("/api", require("./getQuote.js"));

module.exports = router;
