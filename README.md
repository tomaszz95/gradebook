# Gradebook

Hello, I present to you my **Gradebook** project. I was thinking about project that will bring together frontend and a little bit of database knowlage / a bit backend code mixed with each other. From that came to my mind a demo Gradebook project. The project is created in NextJS using React Redux, Firebase, MongoDB and written in Typescript.
The page is not responsible - it is meant to be used on computer screens, not in mobile devices (rest of my projects are responsible, but in this I wanted to focus on code, communication with API and databases). Project shows different informations based on fact, if you are logged in as a teacher or as a student.
Page also have some bacisc tests written.

## 📫 Page contains

- login page and full login firebase support (login, logout, check if user is logged in, and if user is in database),
- if you want to login as student use crudencials: 
login: student1, password: student12,
- if you want to login as teacher use crudencials:
login: teacher1, password: teacher12,
- as teacher you can add grades to students in subject that you teach (for this demo it is only math teacher), create a news on news pages and see statistics of all classes and also whole school stats for your subject (also math teacher),
- as a student you can't add this things, but you can of course visit this pages and see your statistics of different subjects,
- lessons plan is dummy, you can't interact and change it, it is created only to show this page, not meant to be changed,
- you can write messanges only between this two people - teacher1 and student1 (first chat on the top), rest chats and 'write new message button' is dummy and hard coded, 
- accessibility practices,
- basic design requirements fulfilled,
- using firebase to log in/ log out and auth management,
- using MongoDB to store some database information,

## 🛠 Used tools / programming languages / technologies

- HTML / CSS,
- NextJS (React Redux),
- Typescript,
- Firebase,
- MongoDB,
- Local Storage,
- git / github,
- testing,

## 👩‍💻 TODO

- [ ] Add more teachers / students - app is flexible, written to easily add new people,
- [ ] Add more messages options,
- [ ] Create full lesson plan with a lot of teachers, classes, people,
- [ ] Add test scheldue - students can see it, teacher can add some,

#### I encourage you to check the website - uploaded to vercel [Gradebook](https://nutricuisine.netlify.app/).

