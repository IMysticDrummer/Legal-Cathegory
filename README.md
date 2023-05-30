# C.E.R Categorización de equipos reglamentarios

Esta aplicación está pensada para ayudar a la categorización de diferentes tipos de equipos reglamentarios.

## Configuración

Esta aplicación se configura a través de archivos JSON.

### Reglamento de Equipos a Presión (REP)

El archivo de configuración se encuentra en lib/databases/rep.json.

#### Primer nivel

- Clave "RD": Texto con el reglamento que se está aplicando. Por ejemplo: "709/2015 del 24 de julio"
- Clave "rules": cotiene el según nivel con las reglas a aplicar

#### Segundo nivel (dentro de la clave "rules")

- claves con los tipos de equipos:
  - "vessels": recipientes a presión
  - "flame": equipos sometidos a llama y ollas a presión

#### Tercer nivel (dentro de cada clave de tipo de equipo)

- Clase de fluído:
  - gas: gases
  - liquid: líquidos
  - any: cualquier clase de fluído

#### Cuarto nivel (dentro de cada clase de fluído)

- Tipo de fluído:
  - fluidType: todos los tipos de fluídos
  - fluidType1: fluidos de tipo peligroso según el reglamento
  - fluidType2: fluidos de tipo no peligroso según el reglamento

#### Quinto nivel (dentro de los tipos de fluído)

- minConditions: condiciones mínimas para que entre en reglamento.
  - square: número de cuadro que se aplica según los niveles anteriores
  - volMin: volumen mínimo para que se tenga en cuenta en el reglamento
  - presMin: presión mínima para que se tenga en cuenta en el reglamento
  - pressToCatIV: se aplica en el caso de que haya una presión a partir de la cuál se aplica categoría IV, sean cuales sean las otras condiciones
  - volMaxArt43: se aplica en el caso de que haya un volumen hasta el cuál se aplique el artículo 4.3, sean cuales sean las otras condiciones
  - cathegories: contienen las condiciones para cada tipo de categoría aplicable

#### Sexto nivel (dentro de "cathegories")

- Nivel de categoría aplicable: se rellenan los aplicables a las condiciones anteriores (art43, I, II, III)  
  La categoría IV es la categoría por defecto. La aplicación reduce la categoría según se cumplan las condiciones indicadas en los siguientes niveles
  - condition*x* (por ejemplo condition1): dividir la curva en los "trozos" aplicables
    - volume: volumen máximo aplicable a la condición
    - ps: presión máxima admisible aplicable a la condición  
      o
    - psXV: valor máximo aplicable a la condición, que consiste en el producto de la presión máxima admisible por el volumen del recipiente

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
