# Olawale Quadri Ajala - Omnipresent backend end challenge

## steps to run the project

### prerequisite

1. git
2. node v14.13.1 or above
3. npm v8.5.1

## Technologies Used

1. **_NodeJS_** - Platform
2. **_TypeScript(JavaScript)_** - Programming Language
3. **_Redis_** - Cache
4. **_JEST(library)_** - Unit Test
5. **_Docker_** - Container
6. **_Winston_** - For Logging

### env file

Before running the application please rename .env.example to .env

### via docker

1. git clone https://github.com/wquadrillion/omnipresent-task.git
2. docker-compose up

### via npm

1. git clone https://github.com/wquadrillion/omnipresent-task.git
2. npm install
3. npm start
4. for testing - npm run test

### endpoints

1. Health check - http://localhost:3000/health
2. POST employees - http://localhost:3000/employees
