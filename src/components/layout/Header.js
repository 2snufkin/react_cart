import {NavLink} from "react-router-dom";

export const Header = () => {

    return (
        <header>
            <NavLink className="logo" to="/"> Shopping Cart</NavLink>
            <nav className="navigation">
                <NavLink  className={ ({isActive}) => isActive? "link active" : "link"}   to="/"> Home  </NavLink>
                <NavLink  className={ ({isActive}) => isActive? "link active" : "link"}  to="/cart"> Cart  </NavLink>
            </nav>



            <NavLink className="items" to="/cart"><span>Cart: 2</span></NavLink>
        </header>

)
}

