test push<br>
title: Object-Relational Mapping (ORM) Challenge: E-commerce Back End<br>
student: Justin Villena<br>
description: build the back end for an e-commerce site with working wxpress.js and configured to have sequilize interact with a mysql database<br> 
git hub repo - https://github.com/Jrvillena/ecommerce-backend<br>
generated sample gifs -<br>
<br>
<BR>
GET ROUTES<BR>
![](get-routes.gif)<br>
<br>
<BR>
GET ROUTE ID'S<BR>
![](get-route-ids.gif)<BR>
<br>
<br>
POST, PUT, AND DELETE FUNCTIONS<BR>
![](post-put-delete-routes.gif)
<br>
<br>
GIVEN a functional Express.js API<br>
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file<br>
THEN I am able to connect to a database using Sequelize<br>
WHEN I enter schema and seed commands<br>
THEN a development database is created and is seeded with test data<br>
WHEN I enter the command to invoke the application<br>
THEN my server is started and the Sequelize models are synced to the MySQL database<br>
WHEN I open API GET routes in Insomnia Core for categories, products, or tags<br>
THEN the data for each of these routes is displayed in a formatted JSON<br>
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core<br>
THEN I am able to successfully create, update, and delete data in my database<br>
<br>
<br>
Table of Contents<br>
- [Description](#description)<br>
- [User Story](#user-story)<br>
- [Acceptance Criteria](#acceptance-criteria)<br>
- [Table of Contents](#table-of-contents)<Br>
- [Installation](#installation)<br>
- [Usage](#usage)<br>
- [Contributing](#contributing)<br>
<br>
<br>
Installation<Br>
<br>
<br>
`npm init`<br>
<br>
`npm install mysql2`<br>
<br>
`npm install sequelize`<br>
<br>
`npm install dotenv`<br>
<br>  
Usage<br>
<br>
 <br> 
Run the following command at the root of your project and answer the prompted questions:<br>
<br>
`mysql -u root -p`<br>
<br>
Enter PW when promted<br>
<br>
`source db/schema.sql`<br>
<br>
`quit`<br>
<br>
`npm run seed`<br>
 <br> 
`npm start`<br>
