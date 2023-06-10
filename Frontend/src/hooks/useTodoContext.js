// need to import 2 things
// MoviesContext from the movie context file
// the useContext hook to consume the context
import { TodoContext } from "../Context/TodoContext";
import { useContext } from "react";

// making the hook function, so we can use it and get the context value and then we can destructure the
// times and the dispatch function from that.
export const useTodoContext = () => {
  // pass in the MoviesContext object so this hook returns us the value
  // of this context which remember is the value we passed in the MoviesContext.Provider component.
  const context = useContext(TodoContext);

  // checking if we're within the scope of the context
  if (!context) {
    throw Error(
      "useTodoContext must be used inside an TodoContextProvider"
    );
  }

  // means every time we want to use our times data, we're just going to invoke this useTimesContext hook
  // and get that context value back.
  return context;
};