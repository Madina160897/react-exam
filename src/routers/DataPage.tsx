import React from 'react'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { FormEvent, useState } from "react";
import { RootState } from "../store";
import { IProduct } from "../types";
import { saleProductAction } from "../actions/productsActions";

const DataPage = () => {

  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const products = useSelector<RootState, IProduct[]>(
    (state) => state.products.list
  );

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    if(products.find(item => item.name.toLowerCase() === name.toLowerCase())){
      dispatch(
        saleProductAction({
          name,
          quantity: parseInt(quantity),
        })
        )
    }else{
      alert(`Товара ${name} на складе нет!`)
      }
    setName("");
    setQuantity("");
  };

  return (
    <>
      <div className="header-page df jc-sa ai-c">
        <Link to='/'>
          <div>
            <b> Главный </b>
          </div>
        </Link>
        <Link to='/stock'>
          <div>
            <b> Склад </b>
          </div>
        </Link>
        <Link to='/sale'>
          <div>
            <b> Продажа </b>
          </div>
        </Link>
        <Link to='/purchase'>
          <div>
            <b> Покупка </b>
          </div>
        </Link>
      </div>
      <div>
      <h1>Продажа товара:</h1>
      <form className="add-product-block" onSubmit={handleClick}>
        <input
          placeholder="Наименование"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Количество"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button disabled={quantity.length === 0}>Add</button>
      </form>
      {products.length >= 1 ? (
        <div>
          <h1>Весь товар на складе:</h1>
          <div className="table-block">
            <table>
              <thead>
                <tr>
                  <th>№</th>
                  <th>Наименование</th>
                  <th>Количество</th>
                  <th>Цена продажи</th>
                </tr>
              </thead>
              <tbody>
                {products.map((item, index) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.sellingPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <h2>Товара на складе нет!</h2>
      )}
    </div>
      
    </>
  )
}

export default DataPage