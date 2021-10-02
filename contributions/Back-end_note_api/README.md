<h1><strong>Back-end Note API with MongoDB & ExpressJS</strong></h1>

<p>In this post, I will show you example how to make Back-end CRUD Note with REST API using MongoDB & ExpressJS.</p>

<br/>

<h2>What will you make with this project?</h2>
<p>Some screenshot of this project or you can try it yourself by going on to the <a href="https://note-app-697812.herokuapp.com/" target="_blank">website docs</a>.</p>

<p><img src="https://i.ibb.co/mvMkKKK/notes-api.png
https://i.ibb.co/kGbK7bx/notes-api-postman.png"/></p>

## 🚀 **Quick start for the project**

1. Go to my project [Github](https://github.com/J3ndra/NoteApp-backend) and clone it with `git clone`.

1. Copy the `.env.example` and rename it to `.env` and config it using your MongoDB configuration, here's some [docs](https://docs.mongodb.com/) by Mongo.

1. Install required dependencies using `npm install` or `yarn`.

   > This repository is using `node: 15.x`, little bit older with the latest `node.js` version. If you encounter any error, you can create issues in my github [project issues](https://github.com/J3ndra/NoteApp-backend/issues) and I will fix it **ASAP**.

1. Now everything is setup, try run the project with `yarn start` or `yarn debug`

   - **`yarn start`** It will start the project without any log.
   - **`yarn debug`** It will run the project with log

Recommend using the **`yarn debug`** incase there are any error.

## 📁 **What is inside the project?**

    .
    ├── app
        ├── note
        ├── tag
    ├── bin
    ├── database
    ├── public
    ├── views
    ├── .env.example
    ├── .gitignore
    ├── README.md
    ├── app.js
    ├── package.json
    └── yarn.lock

1. **`/app`**: This directory contain all note controller, model, router and also config for the MongoDB and everything you need to make ExpressJS project.

2. **`/bin`**: This directory is default everytime you create new ExpressJS project.

3. **`/database`**: This directory contain file that connecting ExpressJS to MongoDB.

4. **`/public`**: This directory is accessible to public, usually to put uploaded images etc.

5. **`/views`**: This directory contain default views for ExpressJS.

6. **`.env.example`**: This file is example original of my `.env`, change it to your MongoDB settings.

7. **`.gitignore`**: This file is used to ignore unused or cache file and directory when committed to git.

8. **`README.md`**: What are you read now is example of `README.md`, it help people understand what you do in your project.

9. **`app.js`**: Core file of ExpressJS, put all router you make to this file.

10. **`package.json`**: This file contain all the dependencies, command to run the project and the creator detail.

11. **`yarn.lock`**: This auto-generated file if you install the dependencies using `yarn`, like me 😉.

## 🤔 **Now, how to test project?**

1. First, you need to install [postman](https://www.postman.com/downloads/) or alternative similar software you like.
2. There's a lot of endpoint I made right now, you can check on this [README](https://github.com/J3ndra/NoteApp-backend/blob/master/README.md).

3. Let's check the main endpoint, `/api/notes`.

   ![postman](https://i.ibb.co/kGbK7bx/notes-api-postman.png)

   > **Don't forget** to change the main URL to your own URL.

4. Example return you will get.
   ```json
   {
     "success": true,
     "message": "GET Notes",
     "notes": [
       {
         "tags": [
           {
             "_id": "610bad4d96cc8239a4bfa20c",
             "name": "Bermain",
             "__v": 0
           },
           {
             "_id": "610bb5c25dbfd41734309139",
             "name": "Outdoor",
             "__v": 0
           }
         ],
         "_id": "610bb6125dbfd4173430913e",
         "title": "Bermain badminton",
         "description": "Hari ini saya bermain badminton bersama teman teman kantor saya.",
         "image_url": "b50bfed2110fe6fc6f2942f30895d836.jpg",
         "createdAt": "2021-08-05T09:57:38.033Z",
         "updatedAt": "2021-08-05T10:00:13.093Z",
         "__v": 0
       },
       {
         "tags": [
           {
             "_id": "610bad4d96cc8239a4bfa20c",
             "name": "Bermain",
             "__v": 0
           },
           {
             "_id": "610bb5c65dbfd4173430913b",
             "name": "Indoor",
             "__v": 0
           }
         ],
         "_id": "610bb7015dbfd41734309143",
         "title": "Bermain dota",
         "description": "Kemarin saya loss streak bermain dota 2 karena teman saya cupu sekali ingin memukul teman saya stonk.",
         "image_url": "cd0c862ba604f36ede8bb250364e7b12.jpg",
         "createdAt": "2021-08-05T10:01:37.632Z",
         "updatedAt": "2021-08-05T10:01:37.632Z",
         "__v": 0
       }
     ]
   }
   ```

## 👨‍🔧 Now you ready to create your own project. **Happy code!**