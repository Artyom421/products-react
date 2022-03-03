import { useHistory } from "react-router"
import './HeaderNavBar.css'

export const HeaderNavBar = () => {

    const history = useHistory()

    return ( 
        <ul>
            <li onClick={() => history.push("/")} key={'/'}>Home</li>
            <li onClick={() => history.push("/ProductPage")} key={'ProductPage'}>Shop</li>
            <li onClick={() => history.push("/LoginPage")} key={'LoginPage'}>LogIn</li>
        </ul>    
    )
}