import React, { useState } from "react";
const CardContext = React.createContext();

export const CardProvider = ({ children }) => {
  const [add, setadd] = useState([]);

  let addtoCard = (products) => {
    var findProducts = add.find((d) => {
      return d.title === products.title;
    });

    if (findProducts) {
      products.quantity += 1;
    } else {
      products.quantity = 1;
      products.date = new Date().toLocaleDateString();
      products.time = new Date().toLocaleTimeString();

      setadd([...add, products]);
    }
  };

  return (
    <CardContext.Provider value={{ add, addtoCard }}>
      {children}
    </CardContext.Provider>
  );
};
export default CardContext;
