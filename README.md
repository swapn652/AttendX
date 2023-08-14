# AttendX
An AI based attendance app that uses **face-api.js** to mark attendance of student using face recognition. 

### My submission for Hack-R-Play 2.0 organised by ReactPlay.io

### Link to the blog: 
https://swapn652.hashnode.dev/attendx-an-ai-based-app-that-marks-your-attendance-based-on-face-recognition

---

# Tech Stack Used
1. **For Frontend**
   - ReactJS
   - Tailwind CSS
2. **For Backend**
   - NodeJS
   - ExpressJS
   - MongoDB
   - Cloudinary
   - Bugfender SDK

---

# To run the project locally on your machine
1. Fork and clone the repository.
2. Open up the project in VS Code or any other IDE of your choice.
3. Open up the terminal.
4. Type the command `cd server`.
5. Now, you will be in the `server` directory. Run `npm i` to install all the required dependencies.
6. Create a .env file in the server folder and create the following key value pairs in it:
   -  MONGODB_URL = 'link to your mongodb atlas database`
   -  CLOUDINARY_CLOUD_NAME = link to your cloudinary cloud name'
   -  CLOUDINARY_API_KEY = 'link to your cloudinary api key'
   -  CLOUDINARY_API_SECRET = 'link to your cloudinary api secret'

   
7. Then, run the command `nodemon src/app`. This will make your backend run and on the terminal you will see:
     <img width="438" alt="Screenshot 2023-08-14 at 9 17 55 PM" src="https://github.com/swapn652/AttendX/assets/70851202/fb8128dd-f016-4f3e-80db-e509fd22c5d2">
8. Now, open up a new terminal and get to the `client` directory by typing the command `cd client`.
9. Run `npm i` to install all the required dependencies.
10. Run the command `npm run dev` and you will see the following on the terminal:
    <img width="412" alt="Screenshot 2023-08-14 at 9 25 25 PM" src="https://github.com/swapn652/AttendX/assets/70851202/c75ce934-c14a-4053-a22c-8ca2b772e02c">
11. Go to that link and bingo now you can use the application.

### Note:
Sometimes, the face-api code doesn't work. So, after you open the Mark Attendance page, and it doesn't work, simply copy the code in client/src/Webcam.jsx, erase the whole code and paste it again. That would make it work. I researched a lot but couldn't really find out why this happens.

---

# Screenshots

## Large Screen Devices
<img width="811" alt="Screenshot 2023-08-14 at 9 29 33 PM" src="https://github.com/swapn652/AttendX/assets/70851202/4f3b831e-63e5-489d-a8f5-1e0386c9559d">
<img width="814" alt="Screenshot 2023-08-14 at 9 29 49 PM" src="https://github.com/swapn652/AttendX/assets/70851202/f0135d43-4d24-4ddd-afc1-b725126d73b9">
<img width="815" alt="Screenshot 2023-08-14 at 9 30 01 PM" src="https://github.com/swapn652/AttendX/assets/70851202/e7d0204b-615e-443f-b392-1f59ffa528de">
<img width="813" alt="Screenshot 2023-08-14 at 9 30 11 PM" src="https://github.com/swapn652/AttendX/assets/70851202/5d097803-9419-4855-8ec4-f12378893465">
<img width="816" alt="Screenshot 2023-08-14 at 9 30 23 PM" src="https://github.com/swapn652/AttendX/assets/70851202/1dcace6b-6ac4-46b9-8cfa-0d2ba6329a61">
<img width="814" alt="Screenshot 2023-08-14 at 9 30 38 PM" src="https://github.com/swapn652/AttendX/assets/70851202/a050edd5-254d-408b-a43e-70b5cec08141">

## Medium Screen Devices
<img width="411" alt="Screenshot 2023-08-14 at 9 33 41 PM" src="https://github.com/swapn652/AttendX/assets/70851202/b40ffaf9-7845-4a88-a30a-1d58ae3512cb">
<img width="411" alt="Screenshot 2023-08-14 at 9 33 53 PM" src="https://github.com/swapn652/AttendX/assets/70851202/8633ccc8-1ee1-4684-9237-f18069822b56">

## Small Screen Devices
<img width="365" alt="Screenshot 2023-08-14 at 9 34 17 PM" src="https://github.com/swapn652/AttendX/assets/70851202/d2edcca4-dcb4-4179-8e49-777f375acee8">
<img width="367" alt="Screenshot 2023-08-14 at 9 34 37 PM" src="https://github.com/swapn652/AttendX/assets/70851202/4d93b538-c595-4503-be79-5e9755e36618">
<img width="366" alt="Screenshot 2023-08-14 at 9 34 52 PM" src="https://github.com/swapn652/AttendX/assets/70851202/cc143bbf-3529-46fb-9fb7-e2eaf1a89283">
<img width="366" alt="Screenshot 2023-08-14 at 9 35 16 PM" src="https://github.com/swapn652/AttendX/assets/70851202/940796c3-909e-489a-a305-49bc8c21f2b9">

---

