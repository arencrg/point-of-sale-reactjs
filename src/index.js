import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Item from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Item />, document.getElementById('root'));
registerServiceWorker();
