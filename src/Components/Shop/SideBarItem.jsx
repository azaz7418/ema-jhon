

const Sidebar=({product})=>{
  const {id, category, name, price, seller, ratings, img, quantity } = product;
  return (
    <div>
    
    <div className="order-summary">
     
    <p>{name}</p>
    <h4>Price: {price}</h4>
    <h4>Quantity: {quantity}</h4>
    
    
     </div>
     
     
     
    </div>
    )
}
export default Sidebar;