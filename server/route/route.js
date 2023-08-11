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


router.post('/markAttendance', async (req, res) => {
    const { name } = req.body;
    const currentDate = new Date().toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    });
  
    try {
      const student = await Student.findOne({ name });
  
      if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }
  
      student.attendance.set(currentDate, 'P');
      await student.save();
  
      res.json({ message: 'Attendance marked successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error marking attendance' });
    }
});
    

module.exports = router