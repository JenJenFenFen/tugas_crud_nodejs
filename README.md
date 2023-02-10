# tugas_crud_nodejs

This is the task from Kak Faizul harisenin to make CRUD at node.js

How to use :
1. Fork this repository
2. Turn on Apache and MySQL from XAMPP
3. Install all Modules (npm install)
4. Create a database in PHPMyAdmin (make sure the database name is the same as a config.json)
![image](https://user-images.githubusercontent.com/114470554/217854369-4abce559-34d7-4368-8501-5231cd1cf3ce.png)
> You can change your own database name in the config.json

5. Run command "npm run migrate", make sure the table have created after finish
6. Run application (npm start)
7. Open Postman and run at the localhost:7000
   - GET / (Hello World!)
   - GET /user (READ all user from the database)
   - POST /user (CREATE user to the database)
   - PUT /user/:id (UPDATE user base on id to the database)
   - DELETE /user/:id (DELETE user base on id to the database)
   - GET /userfile/:id (download file PDF from the database)
   
   
**Happy Experiment!**

