import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PLayerReducer from './src/reducer/player';
import Scoreboard from './src/containers/Scoreboard';

const store = cresteStore(
    PlayerReducer
);

render(
    <Provider store={store}>
     <Scoreboard />
    </Provider>,
    document.getElementById('root')
);

