import "./CartCard.css";
import { useCart } from "../context/CartContext";
export const CartCard = ({ product }) => {
  const { removefromCart } = useCart();
  const { name, price, image } = product;

  return (
    <div className="cartCard">
      <img src={image} alt={name} />
      <p className="productName">{name}</p>
      <p className="productPrice">${price}</p>
      <button onClick={() => removefromCart(product)}>Remove</button>
    </div>
  );
};
