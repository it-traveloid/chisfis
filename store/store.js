import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../store/rootReducer';
import rootSaga from '../store/rootSaga';
import { createWrapper } from 'next-redux-wrapper';

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

export const makeStore = (context) => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};

export const wrapper = createWrapper(makeStore, { debug: false });
