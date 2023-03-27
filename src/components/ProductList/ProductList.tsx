import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { IProduct, IMany, ITotal } from "../../types";
import { useDispatch } from "react-redux";
import React, { FC, useEffect, useState } from 'react'
import { iteratorSymbol } from "immer/dist/internal";

interface IProductList {
  isLoading: boolean
}

const ProductList: FC<IProductList> = () => {
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
    <div className="block-products">
      
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

export default ProductList;
