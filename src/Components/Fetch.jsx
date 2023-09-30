import { useEffect, useState } from "react";
import Shop from "./Shop/Shop";
import Sidebar from "./Shop/SideBarItem";

const cupon = "developer123"


const Fetch = () => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const products = async () => {
    const res = await fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    );
    const fetchProduct = await res.json();
    setProduct(fetchProduct);
  };
  useEffect(() => {
    products();
  }, []);

  useEffect(() => {
    let quant = 0
    cart.forEach((x) => {
      setPrice(price + x.price)
      quant += x.quantity
    });
      setQuantity(quant);
  }, [cart]);

  return (
    <div className="container">
      <div className="allProducts">
        {product.map((x) => (
          <Shop allProducts={x} cart={cart} setCart={setCart}></Shop>
        ))}
      </div>
      <div className="sideBar">
        <h3>Order Summary</h3>
        {cart.map((x) => (
          <Sidebar product={x} />
        ))}
        <div className="price-part">
          <h3>Total Cost</h3>
          <h4>Quantity: {quantity}</h4>
          <h4>Total Price: ${price}</h4>
          <h5>Vat: {(price*5)/100}</h5>
        </div>
      </div>
    </div>
  );
};
export default Fetch;
