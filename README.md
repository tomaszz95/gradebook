# Gradebook

Hello, I present to you my **Gradebook** project. I was thinking about creating an a project that will bring together frontend, working with api and a little bit of database knowlage / a bit backend code mixed with each other. From that came to my mind Gradebook project. The project is created in NextJS using a little bit of React Redux, Firebase, MongoDB and written in Typescript.
The page is not fully responsible (only 1100px+) - it is meant to be used on computer screens (or hug tablets), not on mobile devices (rest of my projects are responsible, but in this I wanted to focus on code, communication with API and databases). Project shows different informations based on fact, if you are logged in as a teacher or as a student.
Page also have some bacisc tests written.

# To log in as a student you need to use the login datset:
- login: student1@student.com ; password: student1 
- login: student2@student.com ; password: student2 
# To log in as a teacher:
- login: teacher1@teacher.com ; password: teacher1 
- login: teacher2@teacher.com ; password: teacher2 
Student and teacher ID are not imposed in advance, just don't leave it empty.

## 📫 Page contains

- login page and full login firebase support (login, logout, check if user is logged in, and if user is in dummy database, protect routes),
- news page with some basic not deletable dummy news - as an student you can only read this news, as an teacher you can add another,
- timetable plans for students and for teachers,
- grade section, when student can check his grades from 2 semesters - as an teacher you can add grades to students in subject that you teach (in this demo app only 2 classes are available: 1A and 3C to work with in 2 subjects - Math and Geography),
- message section - full dummy section at this moment, will be developed in the future,
- statistics page, as an student you can see your average grades in every subject and average grades of your whole class, as an teacher you see average grades from every class and of whole school to compare with,
- accessibility practices,
- basic design requirements fulfilled,
- using firebase to log in / log out and auth management,
- using MongoDB to store some database information,
- using LocalStorage to store some auth data,
- using dummy data in database.

## 🛠 Used tools / programming languages / technologies

- HTML / CSS,
- NextJS (React Redux),
- Typescript,
- Firebase,
- MongoDB,
- Local Storage,
- Git / Github,
- Testing,

## 👩‍💻 TODO

- [ ] Add more teachers / students - app is flexible, written to easily add new students and teachers - it only need full lessons plan, grades for every class, student and subject.
- [ ] Add more messages options (create new message chat, write to each other), 

#### I encourage you to check the website - uploaded to vercel [Gradebook](https://nutricuisine.netlify.app/).

