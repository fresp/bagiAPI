# bagidata.com API Test Case

## Project setup
```
npm install
```


## Migrate database
```
edit file configs>config.json 
change this line { "development": {
    "username": "root",
    "password": "",
    "database": "bagidata",
    "host": "localhost",
    "dialect": "mysql"
  }}
with your database
```
```
npx sequelize-cli db:migrate
```

## URL
```
endpoint : localhost:6969
socket   : localhost:6969/www
```