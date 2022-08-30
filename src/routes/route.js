const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const mw=require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.newUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",mw.Authenticate , mw.authorise, userController.getUserDetails )
router.post("/users/:userId/posts",mw.Authenticate , mw.authorise, userController.postMessage)

router.put("/users/:userId",mw.Authenticate , mw.authorise, userController.updateUserDetails)
router.delete('/users/:userId',mw.Authenticate , mw.authorise, userController.deleteUser)

module.exports = router;