import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { IProduct, IMany } from "../../types";
import { useDispatch } from "react-redux";
import React, { FC, useEffect, useState } from 'react'

interface IProductList {
  isLoading: boolean
}

const ProductList: FC<IProductList> = () => {
  const dispatch = useDispatch();

  const products = useSelector<RootState, IProduct[]>(
    (state) => state.products.list
  );

  const [total, setTotal] = useState({
    purchasePrice: products.reduce((prev, curr) => { return prev + curr.purchasePrice }, 0),
    sellingPrice: products.reduce((prev, curr) => { return prev + curr.sellingPrice }, 0),
    quantity: products.reduce((prev, curr) => { return prev + curr.quantity }, 0)
  })

  const many = useSelector<RootState, IMany[]>(
    (state) => state.many.list
  );

  useEffect(() => {
    setTotal({
      purchasePrice: products.reduce((prev, curr) => { return prev + curr.purchasePrice }, 0),
      sellingPrice: products.reduce((prev, curr) => { return prev + curr.sellingPrice }, 0),
      quantity: products.reduce((prev, curr) => { return prev + curr.quantity }, 0)
    })
  }, [products])

  return (
    <div className="block-products">
      <div>
        {many.map((item) => (
          <div key={item.id}>
            <div className='many'>{item.many}</div>
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

export default ProductList;
