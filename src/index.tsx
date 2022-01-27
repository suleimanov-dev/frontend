import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import axios from 'axios';

import {API_URL} from '@/config';
import App from '@/App';

axios.defaults.baseURL = API_URL;

render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.querySelector('#root')
);
