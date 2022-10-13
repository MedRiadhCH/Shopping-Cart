import "./App.css";
import Cart from "./components/Cart";
import CartContextProvider from "./components/CartContextProvider";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
      <Cart />
      <List />

      </CartContextProvider>
    </div>
  );
}

export default App;
