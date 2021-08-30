# API server for ZRU

- Express
- REST API
- SQLITE3

## Requirements

- [node & npm](https://nodejs.org/en/)

## Installation

- `git clone git@github.com:cjlee1/node-express-sql-server.git`
- `cd node-express-postgresql-server`
- `npm install`
- `npm start`
- optional: include _.env_ in your _.gitignore_

### GET Routes

- visit http://localhost:3000
  - /orders
  - /orders/1
  - /users
  - /users/1

### Beyond GET Routes

#### CURL

- Create a order with:
  - `curl -X POST -H "Content-Type:application/json" http://localhost:3000/orders -d '{"text":"Hi again, World"}'`
- Delete a order with:
  - `curl -X DELETE -H "Content-Type:application/json" http://localhost:3000/orders/1`

#### Postman

- Install [Postman](https://www.getpostman.com/apps) to interact with REST API
- Create a order with:
  - URL: http://localhost:3000/orders
  - Method: POST
  - Body: raw + JSON (application/json)
  - Body Content: `{ "text": "Hi again, World" }`
- Delete a order with:
  - URL: http://localhost:3000/orders/1
  - Method: DELETE
