
import { HeaderIcons } from "../HeaderIcons/HeaderIcons"
import { HeaderNavBar } from "../HeaderNavBar"
import "./HedearComponentStyled.css"

export const HeaderComponent = () => {

        return (
            <header>
                <div className="container">
                    <HeaderNavBar/>
                    <HeaderIcons/>
                </div>
            </header>
        )
        
    }