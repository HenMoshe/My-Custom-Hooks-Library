/**
* creates a state managment store with useReducer and useContext
* @param {function} GameReducer
* @param {any} iniValue
* @returns {[JSX.Element,function,function]} the provider, useDispatch, useStore  */

export const CreateStore = (GameReducer, iniValue = null) => {
  const storeValueContext = React.createContext();
  const storeDispatchContext = React.createContext();
//Provider that wraps everything up
  const Provider = ({ children }) => {
  const [storeValue, dispatch] = React.useReducer(GameReducer, iniValue);
    return (
    <storeDispatchContext.Provider value={dispatch}>
      <storeValueContext.Provider value={storeValue}>
        {children}
      </storeValueContext.Provider>
    </storeDispatchContext.Provider>
    );
    };
/**
* returns the stored values.
* @returns {any}
*/
const useStore = () => {
  return React.useContext(storeValueContext);
};
/**
* returns the dispatch method
* @returns {React.DispatchWithoutAction}
*/
const useDispatch = () => {
  return React.useContext(storeDispatchContext);
};
return [Provider, useStore, useDispatch];
};
