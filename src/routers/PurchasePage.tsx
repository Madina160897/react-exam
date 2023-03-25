import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { IProduct } from "../types/index";
import { useDispatch } from "react-redux";
import { deleteProductAction, totalProductAction } from "../actions/productsActions";
import { EditProduct, AddProductForm } from "../components/index";
import { Link } from "react-router-dom"


const PurchasePage = () => {
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
            <b> Данные </b>
          </div>
        </Link>
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
              <div>Удалить</div>
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
                <div>
                  {/* @ts-ignore */}
                  <button className="btn-mini" onClick={() => { dispatch(deleteProductAction(item.id)) }}>X</button>
                </div>
                {/* @ts-ignore */}
                <EditProduct id={item.id} />
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
  )
}

export default PurchasePage;