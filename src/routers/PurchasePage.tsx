import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { IProduct, IMany, ITotal } from "../types/index";
import { EditProduct, AddProductForm } from "../components/index";
import { Link } from "react-router-dom"


const PurchasePage = () => {

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
    <div className="block-products">
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
        <Link to='/data'>
          <div>
            <b> Операции </b>
          </div>
        </Link>
      </div>

      <h1>Деньги на складе</h1>
      <div>
        {many?.map((item) => (
          <div key={item.manyState}>
            <div className='many'>{item.manyState}</div>
          </div>
        ))}
      </div>

      <h1>Продукты:</h1>
      {/* @ts-ignore */}
      <AddProductForm />


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
              <div> Изменить</div>
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
                {/* @ts-ignore */}
                <EditProduct id={item.id} />
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
  )
}

export default PurchasePage;