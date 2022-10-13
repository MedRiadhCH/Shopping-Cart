import React, { useContext } from "react";
import { CartContext } from "./CartContextProvider";


const Tshirt = ({ name, price, cle }) => {
  const [cart,setCart]=useContext(CartContext)
  const addTOCart = () => {
    const tshirt={name:name,price:price}
    setCart([...cart,tshirt])
  };
  return (
    <>
      <tr key={cle}>
        <td>{name}</td>
        <td>{price}</td>
        <td>
          <button className="btn btn-primary" onClick={addTOCart}>
            Add to cart
          </button>
        </td>
      </tr>
    </>
  );
};

export default Tshirt;
