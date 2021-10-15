const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {


    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            desc: req.body.desc,
            city: req.body.city,
            from: req.body.from,
            relationship: req.body.relationship
        });


        const user = await newUser.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
});



router.post("/login", async (req, res) => {

    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(404).json("user not exist");

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(400).json("wrong password");

        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json(error);
    }

});


module.exports = router;