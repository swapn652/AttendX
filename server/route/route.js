const express = require('express')
const router = express.Router()
router.use(express.json())
const bcrypt = require('bcrypt')
const Student = require('../models/student')

router.get("/yo", (req, res) => {
    res.send("Hehe boi")
})

router.post('/addStudent', async (req, res) => {
  try {
    const { name, password } = req.body;

    const existingStudentsCount = await Student.countDocuments();
    const rollId = `AttendX_${existingStudentsCount + 1}`;

    const hashedPassword = await bcrypt.hash(password, 10);

    const student = new Student({
      rollId,
      name,
      password: hashedPassword,
    });

    await student.save();
    res.status(201).json({ message: 'Student added successfully', rollId });
  } catch (error) {
    console.error(error); 
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
  
      if (student.attendance.has(currentDate)) {
        return res.status(400).json({ error: 'Attendance already marked for today' });
      }
  
      const lastAttendanceDate = student.attendance.size > 0
        ? new Date([...student.attendance.keys()].pop())
        : null;
  
      if (lastAttendanceDate) {
        const today = new Date();
        const daysDifference = Math.floor((today - lastAttendanceDate) / (1000 * 60 * 60 * 24));
  
        if (daysDifference > 1) {
          const currentDateObj = new Date(currentDate);
          let dateToAdd = new Date(lastAttendanceDate);
          dateToAdd.setDate(dateToAdd.getDate() + 1);
  
          while (dateToAdd < currentDateObj) {
            const dateKey = dateToAdd.toLocaleDateString('en-US');
            student.attendance.set(dateKey, 'A');
            dateToAdd.setDate(dateToAdd.getDate() + 1);
          }
        }
      }
  
      student.attendance.set(currentDate, 'P');
      await student.save();
  
      res.json({ message: 'Attendance marked successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error marking attendance' });
    }
});
  

router.get('/getAttendance/:rollId', async (req, res) => {
  const { rollId } = req.params;
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  try {
    const student = await Student.findOne({ rollId });
  
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
  
    const attendanceData = [];
    student.attendance.forEach((value, key) => {
      const date = new Date(key);
      const formattedDate = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
      const formattedStatus = value === 'P' ? 'Present' : 'Absent';
      attendanceData.push({ date: formattedDate, status: formattedStatus });
    });
  
    res.json({ attendance: attendanceData });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching attendance' });
  }
});



module.exports = router