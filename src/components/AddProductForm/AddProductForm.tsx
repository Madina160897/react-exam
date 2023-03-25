import { useDispatch, useSelector } from "react-redux";
import { createProductAction, editProductAction } from "../../actions/productsActions";
import { FormEvent, useState } from "react";
import { RootState } from "../../store";
import { IProduct } from "../../types";

const AddProductForm = () => {

  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const products = useSelector<RootState, IProduct[]>(
    (state) => state.products.list
  );


  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    dispatch(createProductAction({ name, quantity: parseInt(quantity), purchasePrice: parseInt(purchasePrice), sellingPrice: parseInt(sellingPrice) }));

  };

  return (
    <div >
      <form className="block-add" onSubmit={handleClick}>
        <input
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Кол-во"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <input
          placeholder="Закупочная цена"
          value={purchasePrice}
          onChange={(e) => setPurchasePrice(e.target.value)}
        />

        <input
          placeholder="Цена продажи"
          value={sellingPrice}
          onChange={(e) => setSellingPrice(e.target.value)}
        />

        <button>Добавить</button>
      </form>
    </div>
  );
};

export default AddProductForm;
