import { createContext, useReducer } from "react"; // provides global state to many different components

// make a new context and store in const
export const TodoContext = createContext();



// HOW THIS PROCCESS WORKS: dispatch() => timesReducer => check action.type => update state object with times property => times property will change from null to whatver the payload on the action is (that might be the entire array of times we get back from the server)

// 2 args
// 1st: the state which is the previous state before we make the change to it 
// 2nd: the action is the object that we passed into the dispatch function that has type and payload property
export const todoReducer = (state, action) => {
  // What we do in this function?
  // We first check the action type (what we actually want to do with the data so there are many actions we can do) so use switch statement.
  switch (action.type) {
    // we have different cases for different values of the action type
    // we return a new value that we want the state to be (return new object with times property)
    case "SET_TODO":
      return {
        todos: action.payload, 
      };
    case "CREATE_TODO":
      // return an object that todo properties to the current array
      // action.payload is what the data or payload passed along with the action dispatched to the reducer. Pretty much the data that we passed
      // and we want the rest of the todo data as well so use ... to spread the current states which is the previous todo
      return {
        todos: [...state.todos, action.payload], // add new todo to end of array of todos
      };
    case "DELETE_TODO":
      // fire a function for each time.
      // returns true if we want time to remain in the new array
      // returns false if we want time to be removed from the new array
      return {
        todos: state.todos.filter((t) => t._id !== action.payload._id), // keep the elements that are not equal to the action.payload._id
      };
    default:
      return state; // return the state unchanged
  } // switch
};

// provide the context to our app component tree so that our components can access it
// "children" property represents whatever components or template this component right here "that's accepting the props wraps"
// so in this case the children property represents the root of the entire component
export const TodoContextProvider = ({ children }) => {
  // will wrap the rest of our app eventually

  // useReducer is similar to useState (get back a state value and a function dispatch to update state value)
  // the difference lies within the moviesReducer and dispatch function
  const [state, dispatch] = useReducer(todoReducer, {
    // useReducer has 2 args:
    // reducer function name &
    // initial value for the states
    todos: null, // updating the global context state now right here
  });

  console.log("TodoContext state: ", state);

  // return the template (TodoContext)
  return (
    // In this case, we wrap the entire component so every
    // component subset has the context (needs to wrap root of component tree)
    // value should be a dynamic state value. In this case, we provide the state and the dispatch so its available in other components
    // if we want to use the state, now we can do and if we want to use the dispatch function to update the state, then now we can do

    // The way we consume this context and these two values in our components is easy by the built-in hook called useContext (and we specify which context we want to use)
    // I will make a custom hook for each context that I have for ex: I'd make a useMovieContext hook for this context we just made and then whenever I needed to use this context, I'd invoke the hook.
    // use spread operator on the state to spread the diffrent properties inside the object in this case the movies property
    <TodoContext.Provider value={{ ...state, dispatch }}>
      {/* // therefore if we output the "children" inside this provider components then essentially we're outputting the root component */}
      {children}
    </TodoContext.Provider>
  );
}; // means all the components will have access to the MovieContext. Add a value prop to the provider tag to provide some context to the components
