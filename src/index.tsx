import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import axios from 'axios';

import App from '@/App';

axios.defaults.baseURL = 'http://127.0.0.1:8000';

render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.querySelector('#root')
);
