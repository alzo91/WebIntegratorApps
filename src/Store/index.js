import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducers from './Reducers';
import rootSagas from './Sagas';

const middleware = [];

const sagaMonitor = createSagaMiddleware();

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middleware.push(sagaMiddleware);

const composer = applyMiddleware(...middleware);

const store = createStore(rootReducers, composer);

sagaMiddleware.run(rootSagas);

export default store;
