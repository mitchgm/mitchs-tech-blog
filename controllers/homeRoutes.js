const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const sequelize = require("../config/connection");

// set dependencies


// this will render our home page
router.get("/", (req, res) => {
    Post.findAll({
        // this will gather our posts


        // this sets our post criteria aka attributes
        attributes: [
            "id",
            "postText",
            "title",

        ],
    }
    )

},

    router.get("/login", (req, res) => {
        // this allows us to rendow our login page unless they have logged in already
        if (req.session.loggedIn) {
            res.redirect("/");
            return;
        }

        res.render("login");
    }));



module.exports = router;



