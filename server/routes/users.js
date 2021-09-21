const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("user routes")
});


module.exports = router;