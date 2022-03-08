import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { BasketIcon } from "../../../icons/BasketIcon"
import { HeartIcon } from "../../../icons/HeartIcon"
import { UserIcon } from "../../../icons/UserIcon"
import { changeInputValue, getModalContents, openFavouriteModal, openBasketModal, getFilterProducts } from "../../../store/products/productsActions"
import "./HeaderIconsStyled.css"

export const HeaderIcons = () => {

    const { products, inputValue } = useSelector((state) => state.productsReducer)
    const dispatch = useDispatch() 
    
    const openModalFavourite = () => {

        const prodsFav = products.filter((prod) => prod.isFavourite === true)
        dispatch(openFavouriteModal(true))
        dispatch(getModalContents(prodsFav))

    }

    const openModalBasket = () => {

        const prodsForBuy = products.filter((prod) => prod.isBought === true)
        dispatch(openBasketModal(true))
        dispatch(getModalContents(prodsForBuy))

    }

    const changeValue = (value) => {

        dispatch(changeInputValue(value))
        const titles = products.filter((prod) => prod.name.includes(value))

        if( value !== '' ) {
            dispatch(getFilterProducts(titles))
        }
        else {
            dispatch(getFilterProducts(products))
        }
    }

     return ( 
         <div className="iconsDiv">
            <input type="text" placeholder="Search" value={inputValue} onChange={(e) => changeValue(e.target.value)}/>
            <div className="titleDiv">
            </div>
            <div key={'UserIcon'} className='icons'><UserIcon key={'UserIcon'}/></div>
            <div key={'BasketIcon'} onClick={() => openModalBasket()} className='basketIcon icons'>
                <div className="basketCount">{products.filter((prod) => prod.isBought === true).length}</div>
                <BasketIcon/>
            </div>
            <div key={'HeartIcon'} onClick={() => openModalFavourite()} className='heartIcon icons'>
                <div className="heartCount">{products.filter((prod) => prod.isFavourite === true).length}</div>
                <HeartIcon/>
            </div>
         </div>
     )
}