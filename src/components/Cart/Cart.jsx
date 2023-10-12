import React from 'react'
import Title from '../Title'
import CartColums from './CartColums'
import EmptyCart from './EmptyCart' 
import { ProductConsumer } from '../../contextApi'
import CartList from './CartList'
import CartTotals from './CartTotals'

export default function Cart() {
  return (
    <section>
      <ProductConsumer>
        {(val) => {
          const { cart } = val;
          if (cart.length > 0) {
            return (
              <React.Fragment>
                <br/>
                <Title name='you' title='cart' />
                <br/>
                <br/>
                <CartColums />
                <CartList  val = {val}/>
                <CartTotals val= {val}/>
              </React.Fragment>
            );
          } else {
            return <EmptyCart />;
          }
        }}
      </ProductConsumer>
    </section>
  );
}
