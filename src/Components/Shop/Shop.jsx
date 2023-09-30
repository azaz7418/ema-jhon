import "./Shop.css";

const Shop = ({ setCart, cart, allProducts }) => {
  const { id, category, name, price, seller, ratings, img } = allProducts;

  const clickHanler = () => {
    const isExist = cart.find((x) => x.id === id);
    if (!isExist) {
      allProducts.quantity = 1;
      setCart([...cart, allProducts]);
    } else {
      const newCart = cart.map((x) => {
        if (x.id === id) {
          x.quantity += 1;
        }
        return x;
      });
      setCart(newCart);
    }
  };

  return (
    <div className="single-product">
      <img src={img} />
      <div className="product-info">
        <h2>{name}</h2>
        <h4>Price: ${price}</h4>
        <p>Brand: {seller}</p>
        <p>Ratins: {ratings}</p>
      </div>
      <div>
        <button onClick={clickHanler} className="btn-cart">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default Shop;
