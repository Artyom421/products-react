import { useHistory } from "react-router"

export const HeaderNavBar = () => {

    const history = useHistory()

    return ( 
        <div className="headerPageNav">
            <ul>
                <li onClick={() => history.push("/")} key={'/'}>Home</li>
                <li onClick={() => history.push("/ProductPage")} key={'ProductPage'}>Shop</li>
                <li onClick={() => history.push("/SignUpPage")} key={'SignUpPage'}>Sign-Up</li>
                <li onClick={() => history.push("/SignInPage")} key={'LoginPage'}>Sign-In</li>
            </ul>    
        </div>
    )
}