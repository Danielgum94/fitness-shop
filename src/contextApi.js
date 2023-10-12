import React, { Component } from 'react'; 
import { storeProducts, detailProduct } from './data';

// Creating a new context 
const ProductContext = React.createContext();

export default class ProductProvider extends Component {

  state = {
    products: storeProducts,
    detailProduct: null,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  };


  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let temp = [];
    storeProducts.forEach(item => {
      const oneItem = { ...item };
      temp = [...temp, oneItem];
    });
    this.setState(()=>{
     return  {product: temp}
    });
  }

  getCurrentItem = (id) => {
    const product = this.state.products.find((val) => val.id === id);
    return product;
  }
  

  handleDetail = (id) => {
      const product = this.getCurrentItem(id);
      this.setState(()=>{
        return {detailProduct: product}
      })
  }

   addToCart = (id) => {
    const tempProducts = [...this.state.products];
    const productIndex = tempProducts.findIndex((item) => item.id === id);
    const product = tempProducts[productIndex];

    if (!product.inCart) {
      product.inCart = true;
      product.count = 1;
      const price = product.price;
      product.total = price;

      this.setState(
        {
          products: tempProducts,
          cart: [...this.state.cart, product],
          modalOpen: true,
          modalProduct: product
        },
        () => {
          this.addTotals();
        }
      );
    }
  };

  openModel = (id) => {
    const product = this.getCurrentItem(id);
    this.setState(()=>{
      return {
        modalProduct: product,
        modalOpen : true
      }
    })
  }

  closeModel = () => {
      this.setState(()=>{
        return {modalOpen: false}
      })
  }

  setIncrement = (id) => {
    let temp = [...this.state.cart];
      const selectedProd = temp.find(item=> item.id === id)
      const index = temp.indexOf(selectedProd);
      const product = temp[index];
      product.count = product.count + 1;
      product.total = product.count * product.price;

      this.setState(()=>{
        return{
          cart: [...temp]
        }
      },()=>{
          this.addTotals()
      })
      
  }

  setDecrement = (id) => {
    this.setState(prevState => {
      const updatedCart = prevState.cart.map(item => {
        if (item.id === id) {
          const updatedCount = item.count - 1;
          if (updatedCount === 0) {
            this.deleteItem(id);
            return null; // Return null to mark the item for removal from the cart
          } else {
            return {
              ...item,
              count: updatedCount,
              total: updatedCount * item.price
            };
          }
        }
        return item;
      }).filter(Boolean); // Filter out null items from the cart
  
      return { cart: updatedCart };
    }, () => {
      this.addTotals();
    });
  };
  
  
  deleteItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
  
    tempCart = tempCart.filter(item => item.id !== id);
  
    const index = tempProducts.indexOf(this.getCurrentItem(id));
    let deletedProd = tempProducts[index];
    deletedProd.inCart = false;
    deletedProd.count = 0;
    deletedProd.total = 0;
  
    this.setState(() => {
      return {
        cart: [...tempCart],
        products: [...tempProducts]
      };
    }, () => {
      this.addTotals();
    });
  };
  
  
  clearCart = () => {
    this.setState((prev) => {
      const updatedProducts = prev.products.map((product) => {
        if (product.inCart) {
          product.inCart = false;
        }
        return product;
      });
  
      return {
        cart: [],
        products: updatedProducts,
      };
    }, () => {
      this.addTotals();
    });
  };
  

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;

    this.setState(()=>{
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total
      }
    })
  }

  

  render() {
    return (
      // Rendering the ProductContext.Provider component with a value prop set to 'from context'
      <ProductContext.Provider value={{
        ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModel: this.openModel,
          closeModel: this.closeModel,
          setIncrement: this.setIncrement,
          setDecrement: this.setDecrement,
          deleteItem: this.deleteItem,
          clearCart: this.clearCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

// Creating a constant named ProductConsumer, which refers to the Consumer component of the ProductContext
const ProductConsumer = ProductContext.Consumer;


export { ProductProvider, ProductConsumer };