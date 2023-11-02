import "./ProductCard.css";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";
export const ProductCard = ({ product }) => {
  const { addtoCart, removefromCart, cartList } = useCart();
  const { id, name, price, image } = product;
  const [isInCart, setisInCart] = useState(false);
  useEffect(() => {
    const productIsInCart = cartList.find((cartItem) => cartItem.id === id);
    if (productIsInCart) {
      setisInCart(true);
    } else {
      setisInCart(false);
    }
  }, [cartList, id]);

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        <div className="buttons">
          {isInCart ? (
            <button className="remove" onClick={() => removefromCart(product)}>
              Remove
            </button>
          ) : (
            <button className="add" onClick={() => addtoCart(product)}>
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
