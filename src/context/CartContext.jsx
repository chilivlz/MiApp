
import { createContext, useState } from "react"

export const CartContext = createContext()

// se crea un contexto//

//estado global-provedor del contexto//
//hay que pasarle las children para que muestre la info de los hijos//
const CartContextProvider = ({children}) => {
    // todo lo que ponga aqui se lo voy a pasar a mi aplicacion//

    const [cart, setCart]= useState([]);

    const agregarAlCarrito = (producto)=>{ //El producto es un objeto//

       let existe = isInCart(producto.id);

       if(existe){

        let newCart = cart.map ( (elemento)=> {
            if (elemento.id === producto.id){
                return {
                    ...elemento,
                    quantity: producto.quantity
                }   
            }else{
                return elemento
            }
        })

        setCart(newCart)

       } else{
        setCart([...cart, producto])
       }

        //el express operator sirve todo lo que tenia el carrito y esparcir  y agregar el  nuevo producto//
    };
    //Se trae todo lo que tenga el carrito con el express operator y los nuevos elementos//
    
    const isInCart = (id)=>{

       return cart.some ((elemento)=> elemento.id === id);
    };

    const clearCart = () => {
        setCart([]);
      };
    
     const getTotalQuantity = () => {

    return cart.reduce( (acc, elemento)=>{
      return acc + elemento.quantity
    } , 0 )

  };

  // OBTENER EL PRECIO TOTAL DEL CARRITO

  const getTotalPrice = () => {
    let precioTotal = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity * elemento.price;
    }, 0);
 
    return precioTotal;
  };
    
// delete product from the shipping cart//
  const deleteProductById = (id)=>{
     const newCart = cart.filter ( (element)=> element.id !== id)
     setCart(newCart)
 
  } 

  const getQuantityById = (id) => {

    const productSelected = cart.find ((element)=> element.id === id)
    return productSelected?.quantity
     

  }


    


    let data = {
        cart,
        agregarAlCarrito,
        clearCart,
        getTotalQuantity,
        getTotalPrice,
        deleteProductById,
  
        getQuantityById
       

    };
    
    return <CartContext.Provider value={ data }>{children} </CartContext.Provider>;

      //todo lo que yo quiero poner a disposicio de mi contexto o hijos es el value/  
    };

export default CartContextProvider