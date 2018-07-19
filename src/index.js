import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.css";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter>{routes}</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
