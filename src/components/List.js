import React from "react";
import Tshirt from "./Tshirt";

const List = () => {
  const database = [
    { name: "red Tshirt", price: 10.99, id: 1 },
    { name: "yellow hoodie", price: 24.99, id: 2 },
    { name: "blue polo", price: 18.99, id: 3 },
  ];
  return (
    <div>
      <div className="table-responsive">
        <table className="table table-primary">
          <thead>
            <tr>
              <th scope="col">name</th>
              <th scope="col">prix</th>
              <th scope="col">action</th>
            </tr>
          </thead>
          <tbody>
            {database.map((item) => (
              <Tshirt name={item.name} price={item.price} Cle={item.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
