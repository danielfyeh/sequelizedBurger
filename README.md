# HW-15-Sequelize
Using Sequelize to make burger eating application. CRUD operations via sequelize

## Live Link


## Description on how to use the app
User First adds burgers to be eaten
APP displays all added burgers
If burger is devoured it is logged and displayed 
Clearing all burgers will eliminate from the database


## Technologies Used
- HTML
- CSS
- Javascript
- Bootstrap
- NPM
- Node.js
- Express.js
- Sequelize
- MySQL
- Handlebars


## Code Explaination
- App adds any burger to the burgers database with the name and the devoured set to false
- Any burgers "devoured" will set the devoured attribute to true
- User can create a burger via the create method from sequelize and saved to the database.
- User can also click on the delete button to delete all burgers from the database. 
- Use handlebars to clean up different parts of the code