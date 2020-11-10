// setup data layer
// We need this to track the basket
import React, { createContext, useContext, useReducer } from "react";

// THIS IS DATA LAYER
export const StateContext = createContext();

// BUILD A PROVIDER
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState )}>
        {children}
    </StateContext.Provider>
);

// this is how we use it inside of component
export const useStateValue = () => useContext(StateContext);