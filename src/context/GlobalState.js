import React from "react";

const ProductContext = React.createContext();

class ProductProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      total: 0,
      cart: [],
      count: 0,
      addToCart: (id) => this.addToCart(id),
    };
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ items: json });
      });
  }

  getItem = (id) => {
    const item = this.state.items.find((item) => item.id === id);
    return item;
  };

  addToCart = (item) => {
    const total = this.state.total + item.price;
    const count = this.state.count + 1;
    this.setState(
      {
        count: count,
        total: total,
        cart: [...this.state.cart, item],
      },
      () => console.log(this.state)
    );
  };
  render() {
    return (
      <ProductContext.Provider value={this.state}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
