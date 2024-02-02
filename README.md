Hi This is Saurav!

To start this project on your Desktop :
    
    1. download zip or folder from my Github repository name: REST_API (https://github.com/SauravKumar1822/REST_API)

    2. Open in Vscode or any Editor of your choice.

    3. Install the required packages from package.json file
        npm i
        npm i express nodemon
        npm i mongoose dotenv
    
To run this project on browser
    
    npm run dev
    localhost:5000

To get all products using API 

    localhost:5000/api/products

To add dataset to database

    node productDB.js

To test API using Thunder Client or Postman
(use only after starting server : npm run dev)

    http://localhost:5000/api/products
    http://localhost:5000/api/products/testing

    >> implementing search functionality
        http://localhost:5000/api/products?company=apple
        http://localhost:5000/api/products?company=samsung&name=watch10

    >> implementing sorting
        http://localhost:5000/api/products?sort=price
        http://localhost:5000/api/products?sort=price,name

    >> implementing select query
        http://localhost:5000/api/products?select=name,company
    