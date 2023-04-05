
import React from 'react'
import { useState } from 'react'


const Form = () => {


    const [userData, setUserData] = useState ({
    name: "", 
    email :"",
    password:""} )

    //se utiliza para acceder a la propiedad que queremos modificar/

    const handleChange =(e)=>{
        setUserData({...userData, [e.target.name]: e.target.value}); //se pone en bracket notation osea en corchete por que si esta conun string 
        //se debe poner en corchetes 
    };
    //se previene el evento y se lanza la funcion//
    const handleSubmit =(e)=>{
        e.preventDefault();
     //condicionales//
        if(userData.name.length > 5)
        return 
        const incluye = userData.email.includes("@")
        if (!incluye){
            return
        }
    //validacion passwordd//      
        const str = userData.trim()
        const passwordIsValid = userData.password.length === str

        if(!passwordIsValid || userData.password > 5){
            return
        }
    }

    //esparcimos la informacion para que se defina en el formulario//
 
    console.log(userData)
    

  return (
         <div className='form'>
        <form onSubmit={handleSubmit}>
            <input className='form-control' type="text" 
            placeholder="ingrese su nombre" 
            onChange={handleChange}
            name="name"
            />
            <input className='form-control' type="text" 
            placeholder="Ingrese su email"
            name="email"
            onChange={handleChange}
            />
             <input className='form-control' type="text" 
            placeholder="Ingrese password"
            name="password"
            onChange={handleChange}
            />
              <div className='form-control' >
            <button type="'submit">Enviar</button>
            </div>
            
        </form>
        </div>
   
  );
  }

export default Form