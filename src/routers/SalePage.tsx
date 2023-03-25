import React, { FC, useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { IProduct } from "../types";
import { useDispatch } from "react-redux";
import { deleteProductAction } from "../actions/productsActions";


const SalePage = () => {
  const dispatch = useDispatch();

  const products = useSelector<RootState, IProduct[]>(
    (state) => state.products.list
  );

  const [total, setTotal] = useState({
    purchasePrice: products.reduce((prev, curr) => { return prev + curr.purchasePrice }, 0),
    sellingPrice: products.reduce((prev, curr) => { return prev + curr.sellingPrice }, 0),
    quantity: products.reduce((prev, curr) => { return prev + curr.quantity }, 0)
  })

  useEffect(() => {
    setTotal({
      purchasePrice: products.reduce((prev, curr) => { return prev + curr.purchasePrice }, 0),
      sellingPrice: products.reduce((prev, curr) => { return prev + curr.sellingPrice }, 0),
      quantity: products.reduce((prev, curr) => { return prev + curr.quantity }, 0)
    })
  }, [products])

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
            <b> Данные </b>
          </div>
        </Link>
      </div>
      <div className="block-products">
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
                Удалить
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
                    <button className="btn-mini" onClick={() => { dispatch(deleteProductAction(item.id)) }}>X</button>
                  </div>
                </td>

              </tr>
            ))}
            <tr>
              <th>
                Итого
              </th>
              <th>

              </th>
              <th>
                {total.quantity}
              </th>

              <th>
              {total.purchasePrice}
              </th>
              <th>
              {total.sellingPrice}
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default SalePage