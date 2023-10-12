import React from 'react'
import { FaShekelSign } from 'react-icons/fa';

export default function CartItem({item, val}) {

    const {id,title,img,price,total,count} = item;
    const {setIncrement,setDecrement,deleteItem} = val;

  return (
    <div className='row my-3 text-capitalized text-center'>
        <div className="col-10 mx-auto col-lg-2">
            <img  src={img}
             style={{width: '5rem', height: '5rem'}}
             class="img-thumbnail"
             alt='product'/>
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none"> product: </span>
            {title}
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none"> price: </span>
            {price}
        </div>
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
            <div className="d-flex justify-content-center">
                <div>
                    <span className="btn btn-black mx-1" onClick={()=>{
                        setDecrement(id)
                    }}>-</span>
                    <span className="btn btn-black mx-1">{count}</span>
                    <span className="btn btn-black mx-1" onClick={()=>{
                        setIncrement(id)
                    }}>+
                    </span>
                </div>
            </div>
        </div>
        {/* */}
        <div className="col-10 mx-auto col-lg-2">
            <div className="cart-icon" onClick={()=>{
                deleteItem(id)
            }}>
                <i className="fas fa-trash">

                </i>
            </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <strong> Item Total:  {total} 
            <FaShekelSign style={{ fontSize: '0.7rem', margin: '0.1rem' }} />
            </strong>
           
        </div>
    </div>
  )
}
