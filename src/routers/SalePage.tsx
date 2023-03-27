import React, { FC, useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { IProduct, IMany, ITotal } from "../types";
import { useDispatch } from "react-redux";
import { deleteProductAction } from "../actions/productsActions";


const SalePage = () => {
  const dispatch = useDispatch();

  const products = useSelector<RootState, IProduct[]>(
    (state) => state.products.list
  );

  const total = useSelector<RootState, ITotal[]>(
    (state) => state.products.total
  );

  const many = useSelector<RootState, IMany[]>(
    (state) => state.products.many
  );
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
        <Link to='/purchase'>
          <div>
            <b> Покупка </b>
          </div>
        </Link>
        <Link to='/data'>
          <div>
            <b> Операции </b>
          </div>
        </Link>
      </div>
      <div className="block-products">

        <h1>Деньги на складе</h1>
        <div>
          {many?.map((item) => (
            <div key={item.manyState}>
              <div className='many'>{item.manyState}</div>
            </div>
          ))}
        </div>

        <h1>Продукты:</h1>

        <table>
          <thead>

            <tr>

              <th>
                №
              </th>

              <th>
                Имя
              </th>

              <th>
                Кол-во
              </th>

              <th>
                Закупочная цена
              </th>

              <th>
                Цена продажи
              </th>

              <th>
                Продажа
              </th>

            </tr>
          </thead>
          <tbody >
            {products.map((item) => (

              <tr key={item.id}>

                <td>
                  {item.id}
                </td>

                <td>
                  {item.name}
                </td>

                <td>
                  {item.quantity}
                </td>

                <td>
                  {item.purchasePrice}
                </td>

                <td>
                  {item.sellingPrice}
                </td>
                <td>
                  <div>
                    {/* @ts-ignore */}
                    <button className="btn-mini" onClick={() => {
                      dispatch(
                        deleteProductAction({
                          id: item.id,
                          name: item.name,
                          quantity: item.quantity,
                          purchasePrice: item.purchasePrice,
                          sellingPrice: item.sellingPrice
                        })
                      );
                    }}>Продать</button>
                  </div>
                </td>

              </tr>
            ))}

{total.map((item) => (
            <tr key={item.quantity}>
              <th>
                Итого
              </th>
              <th>

              </th>
              <th>
                {item.quantity}
              </th>

              <th>
                {item.purchasePrice}
              </th>
              <th>
                {item.sellingPrice}
              </th>
            </tr>

          ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default SalePage