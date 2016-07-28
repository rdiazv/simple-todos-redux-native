export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text: text
  };
}

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text]);

    default:
      return state;
  }
}
