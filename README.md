Express & ES6 REST API Boilerplate
==================================

This is a straightforward boilerplate for building REST APIs with ES6 and Express.

- ES6 support via [babel](https://babeljs.io)
- REST resources as middleware via [resource-router-middleware](https://github.com/developit/resource-router-middleware)
- CORS support via [cors](https://github.com/troygoode/node-cors)
- Body Parsing via [body-parser](https://github.com/expressjs/body-parser)
- DataBase Mongo
- DataBase Mysql [Sequelize](https://github.com/sequelize/sequelize)

> Tip: If you are using [Mongoose](https://github.com/Automattic/mongoose), you can automatically expose your Models as REST resources using [restful-mongoose](https://git.io/restful-mongoose).



Getting Started
---------------

```sh
# clone it
git clone git@github.com:developit/express-es6-rest-api.git
cd express-es6-rest-api

# Make it your own
rm -rf .git && git init && npm init

# Install dependencies
npm install

# Create table Mysql 
CREATE TABLE `todos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(15) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `todos` WRITE;

INSERT INTO `todos` (`id`, `text`)
VALUES
	(1,'first'); 
UNLOCK TABLES;

# create collection MongoDB

db.createCollection( "Todo", {
   validator: { $jsonSchema: {
      bsonType: "object",
      properties: {
         id: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         text: {
            bsonType : "string",
            pattern : "@mongodb\.com$",
            description: "must be a string and match the regular expression pattern"
         }
      }
   } }
} )

db.Todo.insert({ id: "1", text: "first"})

# Start development live-reload server
npm run dev

# Start production server:
npm start
```
Docker Support
------
```sh
cd express-es6-rest-api

# Build your docker
docker build -t es6/api-service .
#            ^      ^           ^
#          tag  tag name      Dockerfile location

# run your docker
docker run -p 8080:8080 es6/api-service
#                 ^            ^
#          bind the port    container tag
#          to your host
#          machine port   

```

License
-------

MIT
