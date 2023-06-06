const express = require("express");
const router = express.Router();

const {addPost, getPost} = require("../controllers/postController")

router.post("/addPost", addPost);
router.get("/getPosts", getPost);

module.exports = router;