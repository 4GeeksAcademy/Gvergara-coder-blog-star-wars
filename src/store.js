export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    characters : 
    [
      
    ],

    planets : 
    [

    ],

  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

      case "setCharacters":
        const charactersList = action.payload

        return {
          ...store,
          characters: charactersList
        };

        case "setPlanets":
          const planetsList = action.payload

          return{
            ... store,
            planets: planetsList
          };

    default:
      throw Error('Unknown action.');
  }    
}
