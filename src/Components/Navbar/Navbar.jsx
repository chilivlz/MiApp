

//import "./Navbar.css"//

import styles from "./Navbar.module.css"
import CartWidget from "../CartWidget/CartWidget"

const Navbar = ({children}) => {
    let numero =12;

    return (
        <div>
       <div className={styles.containerNavbar}>
            <h1 className={styles.containerBrand}>ChiliArt</h1>
        
            <ul className={styles.containerList}>
                <li>Arte</li>
                <li>Fotografias</li>
                <li>Ilustraciones</li>

            </ul>
            <CartWidget numero={numero} />
        </div>
        {children}
        </div>
     
    );
};
export default Navbar;