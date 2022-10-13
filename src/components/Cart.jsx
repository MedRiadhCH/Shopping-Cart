import React, { useContext } from "react";
import { CartContext } from "./CartContextProvider";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);

  const total = cart.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);

  return (
    < >
      <span className="mx-auto" > <AddShoppingCartOutlinedIcon/>{cart.length}</span>
      <br />
      <span> <AttachMoneyIcon/> :{total} </span>
    </>
  );
};

export default Cart;
