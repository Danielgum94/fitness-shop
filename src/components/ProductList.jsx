import React, { useState } from 'react';
import Product from './Product';
import Title from './Title';
import { storeProducts } from '../data';
import { ProductConsumer } from '../contextApi';


export default function ProductList() {
  const [products, setProducts] = useState(storeProducts);

  return (
    <div>
      <React.Fragment>
        <div className='py-5'>
          <div className='container'>
            <Title name='fitnesShop' title='products' />
            <div className='row'>
              <ProductConsumer>
                {(val) => {
                  return products.map((product) => {
                    return <Product key={product.id} product={product } setProducts= {setProducts}
                     />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}
