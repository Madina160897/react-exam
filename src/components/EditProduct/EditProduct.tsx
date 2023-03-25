import { FC, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProductAction } from "../../actions/productsActions";
import { IProduct } from "../../types";


const EditProduct: FC<IProduct> = ({ id }) => {

    const dispatch = useDispatch();
    const [name, setName] = useState("")
    const [purchasePrice, setPurchasePrice] = useState("");
    const [sellingPrice, setSellingPrice] = useState("");
    const [quantity, setQuantity] = useState("");

    const editProduct = (e: FormEvent) => {
        e.preventDefault();
        dispatch(editProductAction({ id, name, quantity: parseInt(quantity), purchasePrice: parseInt(purchasePrice), sellingPrice: parseInt(sellingPrice), }))
    }

    return (
        <>
            <form className="edit-input">

                {/* @ts-ignore */}
                <input
                    type="text"
                    value={name}
                    placeholder="Имя"
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="number"
                    value={quantity}
                    placeholder="Кол-во"
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
                
                <button className="btn-mini" onClick={editProduct}>Изменить</button>
            </form>
        </>
    )
}
export default EditProduct;