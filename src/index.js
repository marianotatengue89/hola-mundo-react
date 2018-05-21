//Dependencies
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Bluebird from 'bluebird';
import { Provider } from 'react-redux';

//Routes
import AppRoutes from './routes';

//Assets: 
/*Los assets web son las hojas de estilo CSS, 
  los archivos JavaScript y las imágenes que se 
  utilizan en el frontend de las aplicaciones para que 
  tengan un buen aspecto. Normalmente los programadores 
  Symfony crean estos archivos en 
  los directorios Resources/public/ de los bundles.
*/

import './index.css';

// Redux store
import configureStore from './lib/configureStore';

// Reducers
import rootReducer from './reducers';

// Bluebird configuration
window.Promise = Bluebird;

Bluebird.config({ warnings: false });

window.addEventListener('unhandledrejection', error => {
    error.preventDefault();

  if(process.env.NODE_ENV !== 'production'){
    console.warn('Unhandled promise rejection warning.', error.detail);
  }
});


// Configuring redux store
const store = configureStore({
  initialState: window.initialState
}, rootReducer);

render(
  <Provider store={store}>
    <Router> 
      <AppRoutes />
    </Router> 
  </Provider>,
  document.getElementById('root')
);
