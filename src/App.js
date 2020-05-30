import React from "react";
import { ProductProvider } from "../src/context/GlobalState";
import Products from "./components/Products";
import "./App.css";
class App extends React.Component {
  render() {
    return (
      <ProductProvider>
        <Products />
      </ProductProvider>
    );
  }
}
export default App;
