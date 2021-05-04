import React,{createContext,useReducer} from 'react';
import AppReducer from './AppReducer'
//*Initial state

const initialState ={
    transactions: [
        {id:1, text:'Laptop', amount:1500},
        {id:2, text:'Book', amount:-330},
        {id:3, text:'Camera', amount:1300},
        {id:4, text:'Tire', amount:-540}

    ]
}

//*Create Context
export const GlobalContext = createContext(initialState);

//*Provider component

export const GlobalProvider=({children}) => {
  const [state,dispatch] = useReducer(AppReducer,initialState);

  return(
      <GlobalContext.Provider value={{
          transactions: state.transactions
      }}>
          {children}
      </GlobalContext.Provider>
  )
}