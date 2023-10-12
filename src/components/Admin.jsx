import React, { useState } from 'react';
import './CSS/admin.css'

export default function Admin(props) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [onStock, setOnStock] = useState(0);
  const [id, setId] = useState('');
  const [category, setCategory] = useState('')
  const [img,setImg] = useState('')

  const addNewProdToList = () => {
    if (name === '' || price === '' || id === '') {
      alert('Please fill all the fields!');
    } else {
      props.addProduct(name, price,onStock,id,category,img);
      setName(name);
      setPrice(price);
      setOnStock(onStock);
      setId(id);
      setCategory(category)
    }
  };

  const onStockColor = onStock ? 'green' : 'red';

  return (
    <div className="admin-container">
      <label style={{color: 'white'}}>Product Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
      />
      <br />
      <label style={{color: 'white'}}>Product Price NIS:</label>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Product Price"
      />
      <br />
      <label style={{color: 'white'}}>Product ID/Uniq key:</label>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Product ID"
      />
      <br/>
         <label style={{color: 'white'}}>IMAGE:</label>
      <input
        type="text"
        value={img}
        onChange={(e) => setImg(e.target.value)}
        placeholder="Product Inage"
      />
      <br />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="fitness">Fitness</option>
        <option value="crossfit">CrossFit</option>
        <option value="teamSport">Team Sport</option>
        <option value="recoveryAndWellness">Recovery and Wellness</option>
        <option value="onSale">On Sale</option>
      </select>

      <label>
        <h3 style={{color: 'white'}}>On Stock?</h3>
        <span style={{ color: onStockColor }}>
          {onStock ? 'Yes' : 'No'}
        </span>
      </label>
      <select value={onStock} onChange={(e) => setOnStock(e.target.value === 'true')}>
        <option value={false}>No</option>
        <option value={true}>Yes</option>
      </select>
      <br/>
      
      <button onClick={addNewProdToList} id="add-btn">
        <br/>
        Add
      </button>
    </div>
  );
}
