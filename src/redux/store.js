import { createStore, compose } from 'redux';
import todosReducer from './todos';

const newCreateStore = compose(window.devToolsExtension())(
  createStore
);

export default newCreateStore(todosReducer);
