



import { BsFillCartCheckFill } from "react-icons/bs";

const CartWidget = ({numero}) => {
  
  return (
    <div>
      <span>0</span>
      <BsFillCartCheckFill color="black" size={40} />
    </div>
  );
};

export default CartWidget;