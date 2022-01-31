import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import axios from 'axios';

import {API_URL} from '@/config';
import App from '@/App';

// Axios config
axios.defaults.baseURL = API_URL;

// Script that prints image in console
(function(url) {
    let image = new Image();
    image.onload = function() {
        const style = [
            'font-size: 1px;',
            'padding: ' + 289 * .5 + 'px ' + 400 * .5 + 'px;',
            'background-size: ' + 400 + 'px ' + 289 + 'px;',
            'background: url('+ url +');'
        ].join(' ');
        console.log('%c ', style);
    };
    image.src = url;
})('https://i.imgur.com/fX4fyVO.png');

// Root element render
render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.querySelector('#root')
);
