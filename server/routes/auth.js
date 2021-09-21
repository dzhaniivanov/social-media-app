const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("auth routes")
});


module.exports = router;