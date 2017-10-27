import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import BasicExample from './BasicExample';
import App2 from './App2';
import bookStore from './BookStore';

ReactDOM.render(<App2 bookStore={bookStore} />, document.getElementById('root'));

registerServiceWorker();
