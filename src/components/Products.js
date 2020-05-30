import React, { Component } from "react";
import { ProductConsumer } from "../context/GlobalState";
import Product from "./Product";

export default class Products extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {(value) => {
            const { items, addToCart, cart, total, count } = value;
            return (
              <div>
                <div>total : ksh {total}</div>
                <div>Count : {count}</div>
                <div>
                  {cart.map((item) => (
                    <ul key={item.id}>
                      <li>
                        {item.title}: Ksh{item.price}
                      </li>
                    </ul>
                  ))}
                </div>
                <ul className="products">
                  {items.map((item) => (
                    <Product
                      item={item}
                      key={item.id}
                      addToCart={() => addToCart(item)}
                    />
                  ))}
                </ul>
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}
