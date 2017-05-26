# HW-15-Sequelize
Using sequelize for the last homework assignment. Burger 2: The Sequel
Burger eating app that performs the CRUD operations via ORM Sequelize. App is deployed on Heroku with JawsDB mySQL add-on. 

## Live Link
- https://aqueous-sea-76342.herokuapp.com/

## Description on how to use the app
User can click on the devour button to eat burgers. Burgers that have been eaten will be displayed on the right side.
User may also add burgers of their choice to the list.

## Requirements
- mySQL import database file schema.sql
- node.js for npm install the package.json
Type node server.js to run application
Type in browser localhost:3000

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
- Heroku

## Code Explaination
- App reads from the mysql database of available burgers that can be devoured.
- Any burgers that have been eaten change their boolean value from 0 to 1.
- User can create a burger via the create method from sequelize and saved to the database.
- User can also click on the delete button to delete all burgers from the database. 