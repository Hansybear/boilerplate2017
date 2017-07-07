import { createStore, applyMiddleware, Store } from 'redux';
import { logger } from '../middleware';
import rootReducer, { RootState } from '../reducers';
import thunk from "redux-thunk"
import promise from "redux-promise-middleware";

export function configureStore(initialState?: RootState): Store<RootState> {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore;

  const createStoreWithMiddleware = applyMiddleware(promise(), logger, thunk)(create);

  const store = createStoreWithMiddleware(rootReducer, initialState) as Store<RootState>;

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
