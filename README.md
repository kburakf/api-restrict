# How To Use

- If you have a Docker on your local machine, you can run this project with `docker-compose up` command.
- After you run this project on your local machine, you can access the swagger documentation here: `http://localhost:3000/documentation`.
- If you want to try this on prod, here is the documentation link: `https://api-restrict.herokuapp.com/documentation/`.
- To get a token you need to create an account first.
- Default api request limit 5, time required for new request 5 minutes. You can change these values by adding `.env` file.

## Environment Variables

- **`NODE_ENV`** for development or production environment.
- **`MONGO_URL`** the connection string to MongoDB.
- **`PORT`** port running server on machine.
- **`HOST`** service provider address.
- **`REDIS_URL`** the connection string to Redis. 
- **`REQUEST_LIMIT`** request limit for user requests.
- **`TTL`** time expiry for caching.
- **`REDIS_AUTH_PASSWORD`** redis authentication password.
- **`TOKEN_ACCESS`** secret key for generate a user token to access.

## Endpoints

- **`SERVICE_CHUCK_NORRIS_URL`** a service url to get randomly text from `https://api.chucknorris.io/`.

## Technologies
- Node.js (14.x)
- Express for Routing
- Mongoose for Database (6.x)
- Redis for Caching (3.x)
- Eslint for Programming Rules
- Swagger for Input Validation & Endpoint Documentation
- Moment for Time Functions
- MD5 for Hashing
- JWT for Generate a Token
- Bluebird for Promise
- Axios for Rest Request