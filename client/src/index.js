import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';

const Root = () => {
	return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
	)
}

ReactDOM.render(<Root />, document.getElementById('root'));

