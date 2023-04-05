import { GiShoppingCart} from "react-icons/gi";
import "./CartWidget.css";
import{useContext} from "react"

import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";




const CartWidget = () => {



  const { getTotalQuantity} = useContext ( CartContext )

  const total = getTotalQuantity()
  return (
    <Link to="/cart">
      <div className="container-cart">
        <GiShoppingCart
          style={{
            fontSize: "2rem",
            color: "black",
          }}
        />
        <div style={{ color: "black"}}>
          <span>{total}</span> 
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;

