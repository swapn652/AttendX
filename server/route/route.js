const express = require('express')
const router = express.Router()
router.use(express.json())

router.get("/yo", (req, res) => {
    res.send("Hehe boi")
})

module.exports = router