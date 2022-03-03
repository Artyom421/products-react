import { BasketIcon } from "../../../icons/BasketIcon"
import { HeartIcon } from "../../../icons/HeartIcon"
import { SearchIcon } from "../../../icons/SearchIcon"
import { UserIcon } from "../../../icons/UserIcon"
import "./HeaderIconsStyled.css"

export const HeaderIcons = () => {
     return ( 
         <div className="iconsDiv">
             <div key={'SearchIcon'}><SearchIcon/></div>
             <div key={'UserIcon'}><UserIcon/></div>
             <div key={'BasketIcon'}><BasketIcon/></div>
             <div key={'HeartIcon'}><HeartIcon/></div>
         </div>
     )
}