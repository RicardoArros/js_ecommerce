JS PROJECT

1. Create Folder Structure:

- Create root folder as jsamazona

- add frontend and backend folder

- create src folder in frontend

- create index.html with heading jsamazona in src

- run npm init in frontend folder

- npm install live-server

- add start command as live-server src --verbose

- run npm start

<!--  -->

2. Design Website:

- Create style.css

- Link style.css to index.html

- Create div.grid-container

- Create header, main and footer

- Style html, body

- Style grid-container, header, main and footer

<!--  -->

3. Create Static Home Screen:

- Create ul.products

- Create li

- Create div.product

- add .product-image, .product-name, .product-brand, .product-price

- style ul.products and interval divs

- duplicate 2 times to show 3 products

<!--  -->

4. Render Dynamic Home Screen:

- create data.js

- export an array of 6 products

- create screens/HomeScreen.js

- export HomeScreen as an object with render() method

- implement render()

- import data.js

- return products mapped to list inside an ul

- create app.js

- link it to index.html as module

- set main id to main-container

- create router() function

- set main_container innerHTML to HomeScreen.render()

- set load event of window to router() function

<!--  -->

5. Build Url Router:

- create routes as route:screen object for home screen

- create utils.js

- export parseRequestURL()

- set url as hash address split by slash

- return resource, id and verb of url

- update router()

- set request as parseRequestURL()

- build parsedUrl and compare with routes

- if route exists render it, else render Error404

- create screens/Error404.js and render error message

<!--  -->

6. Create Node.JS Server:

- run npm init in root jsamazona folder

- npm install express

- create server.js

- add start command as node backend/server.js

- require express

- move data.js from frontend to backend

- create route for /api/products

- return products in data.js

- run npm start

<!--  -->

7. Load Products From Backend:

- edit HomeScreen.js

- make render async

- fetch products from '/api/products' in render()

- make router() async and call await HomeScreen.render()

- use cors on backend

<!--  -->

8. Add Webpack:

- cd frontend

- npm install -D webpack webpack-cli webpack-dev-server

- npm uninstall live-server

- "start": "webpack-dev-server --mode development --watch-content-base --open"

- move index.html, style.css and images to frontend folder

- rename app.js to index.js

- update index.html

- add <script src="main.js"></script> before </body>

- npm start

- npm install axios

- change fetch to axios in HomeScreen

<!--  -->

9. Install Babel For ES6 Syntax:

- npm install -D babel core, cli, node, preset-env

- Create .babelrc and set presets to @babel/preset-env

- npm install -D nodemon

- set start: nodemon --watch backend --exec babel-node backend/server.js

- convert require to import in server.js

- npm start

<!--  -->

10. Enable Code Linting:

- npm install -D eslint

- install VSCode eslint extension

- create .eslintrc and set module.exports for env to node

- Set VSCode setting for editor.codeActionsOnSave source.fixAll.eslint to true

- check result for linting error

- npm install eslint-config-airbnb-base and eslint-plugin-import

- set extends to airbnb-base

- set parserOptions to ecmaVersion 11 and sourceType to module

- set rules for no-console to 0 to ignore linting error

<!--  -->

11. Install VSCode Extension:

- JavaScript (ES6) code snippets

- ES7 React/Redux/GraphQL/React-Native snippets

- Prettier - Code formatter

- HTML&LESS grammar injections

<!--  -->

12. Create Rating Component:

- create components/Rating.js

- link to fontawesome.css in index.html

- create div.rating

- define Rating object with render()

- if !props.value return empty div

- else use fa fa-star, fa-star-half-o and fa-star-o

- last span for props.text || ''

- style div.rating, span and last span

- Edit HomeScreen

- Add div.product-rating and use Rating component

<!--  -->

13. Product Screen:

- get product id from request

- implement /api/product/:id api

- send Ajax request to product api

- create back to result link

- create div.details with 3 columns

- column 1 for product image

- column 2 for product information

- column 3 form product action

- style .details and all columns

- create add to cart button with add-button id

- after_render() to add event to the button

- redirect user to cart/:product_id
