const express = require('express')
const router = express.Router()
router.use(express.json())
const bcrypt = require('bcrypt')
const Student = require('../models/student')

router.get("/yo", (req, res) => {
    res.send("Hehe boi")
})

router.post('/addStudent', async (req, res) => {
    const { rollId, name, password } = req.body;
  
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const student = new Student({
        rollId,
        name,
        password: hashedPassword, 
      });
  
      await student.save();
      res.status(201).json({ message: 'Student added successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error adding student' });
    }
  });
  

module.exports = router