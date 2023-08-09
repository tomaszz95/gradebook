# Gradebook

Hello, I present to you my **Gradebook** project. I was thinking about creating a project that will bring together front-end, working with api and a little bit of database knowledge / a bit of back-end code mixed with each other. From that came to my mind a Gradebook project. The project is created in NextJS using a small amount of React Redux, Firebase, MongoDB and written in Typescript.
The page is not fully responsive (only 1100px+) - it is meant to be used on computer screens (or huge tablets), not on mobile devices (rest of my projects are responsive, but in this I wanted to focus on code, communication with API and databases). The project shows different information based on whether you are logged in as a teacher or as a student.

**To log in as a student you need to use the login dataset:**

- login: student1@student.com ; password: student1
- login: student2@student.com ; password: student2

**To log in as a teacher:**

- login: teacher1@teacher.com ; password: teacher1
- login: teacher2@teacher.com ; password: teacher2

Student and teacher ID are not imposed in advance, just don't leave it empty.

## 📫 Page contains

- login page and full login firebase support (log in, log out, check if the user is logged in, and if the user is in a dummy database, protected routes),
- news page with some basic non-deletable dummy news - as a student you can only read this news, as a teacher you can add another,
- timetable plans for students and for teachers,
- grade section, where a student can check his grades from 2 semesters - as a teacher you can add grades to students in the subject you teach (in this demo page only 2 classes are available: 1A and 3C to work with in 2 subjects - Maths and Geography),
- message section - full dummy section at this moment, will be developed in the future,
- statistics page, as a student you can see your averages in every subject and averages of your whole class, as a teacher you see averages from every class and of the whole school to compare with,
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
- Git / Github.

## 👩‍💻 TODO

- [ ] Add more teachers / students - app is flexible, written to easily add new students and teachers - it only needs full lessons plan, grades for every class, student and subject.
- [ ] Add more "messages" options (create new message chats, write to each other),
- [ ] Add testing.

#### I encourage you to check the website - uploaded to vercel [Gradebook](https://nutricuisine.netlify.app/).
