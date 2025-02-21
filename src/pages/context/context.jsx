
import  { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export  const StateProvider = ({ children }) => {


    const [ wishlist , setWishlist ] = useState([]);

  

  return (
    <StateContext.Provider value={{ wishlist, setWishlist }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => {
  return useContext(StateContext);
} 


