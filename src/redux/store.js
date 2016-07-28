import { createStore, compose } from 'redux';
import todosReducer from './todos';
import devToolsExtension from 'remote-redux-devtools';

const newCreateStore = compose(devToolsExtension())(
  createStore
);

export default newCreateStore(todosReducer);
