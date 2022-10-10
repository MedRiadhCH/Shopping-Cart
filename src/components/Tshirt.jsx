import React from "react";

const Tshirt = ({ name, price, cle }) => {

    const addTOCart=() => {
        console.log("click")
    }
  return (
    <>
      <tr >
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
