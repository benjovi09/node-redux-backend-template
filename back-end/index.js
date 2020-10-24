import { createStore, applyMiddleware } from 'redux';
import server from './src/server.js';
import reducer from './src/reducer.js';

import { composeWithDevTools } from 'remote-redux-devtools';

const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 });
const store = createStore(
  reducer,
  /* preloadedState, */ composeEnhancers(
    applyMiddleware(),
    // other store enhancers if any
  ),
);

server.startServer(store);
