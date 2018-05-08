//Dependencies
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

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


render(
	<Router> 
		<AppRoutes />
	</Router>, 
	document.getElementById('root')
);
