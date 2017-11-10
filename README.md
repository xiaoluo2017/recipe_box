# recipe_box
A recipe box support create/edit/delete recipes with names and ingredients<br/>

<p align="center" margin-bottom="0">
  <a href="https://ancient-lowlands-51718.herokuapp.com/" target="_blank">
    <img alt="Recipe box Clone Demo" width="auto" height="auto" src="https://github.com/xiaoluo2017/recipe_box/blob/master/images/index.PNG">
  </a>
</p>
<p align="center">
  <a href="https://ancient-lowlands-51718.herokuapp.com/">Live Demo</a>
</p>

## Getting Started
* Clone Repo 
```
git clone https://github.com/xiaoluo2017/recipe_box.git
```
* Set the database_url in ```./route/config.js```
* Install dependencies for the back-end 
```
cd recipe_box && npm install
```
* Run the back-end 
```
PORT=3001 node bin/www
```
In Windows: 
```
set PORT=8080 && node bin/www
```
* Install dependencies for the font-end 
```
cd client && npm install
```
* Run the front-end 
```
npm start
```
* open your browser and go to localhost:3000

## Built With
* [React](https://facebook.github.io/react/) - a Javascript Library for Building User Interfaces
* [Node](https://nodejs.org) - a Javascript Runtime
* [Express.js](http://expressjs.com) - The Web Framework
* [Mongodb](http://mongodb.github.io/node-mongodb-native/2.0/) - Database
* [react-bootstrap](https://react-bootstrap.github.io/) - Bootstrap rebuilt for React

## Reference
This project was built with [Create React App](https://github.com/facebookincubator/create-react-app) and [Express Backend](https://daveceddia.com/create-react-app-express-backend/)
