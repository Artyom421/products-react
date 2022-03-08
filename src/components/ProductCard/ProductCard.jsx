import { HeartIcon } from "../../icons/HeartIcon"
import { Counter } from "../counter/Counter"
import { ShopingCartIcon } from "../../icons/ShopingCartIcon"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { getProducts } from "../../store/products/productsActions/productsActions"
import './ProductStyle.css'

export const ProductCard = ({ item }) => {

    const dispatch = useDispatch()
    const { products } = useSelector((state) => state.productsReducer)

    const getFavouriteproducts = (id) => {
        
        const favProd = products.filter((prod) => prod.id === id)[0]
        favProd.isFavourite = !favProd.isFavourite
        if( favProd.isFavourite === true ) {
            favProd.heartStyle = 'yellowHeart'
        }
        else {
            favProd.heartStyle = 'greyHeart'
        }
        dispatch(getProducts(products))
    }

    const getBoughtproducts = (id) => {
        
        const prodsForBuy = products.filter((prod) => prod.id === id)[0]
        
        if( prodsForBuy.count !== 0 ) {
            prodsForBuy.isBought = !prodsForBuy.isBought
            if ( prodsForBuy.isBought === true ) {
                prodsForBuy.basketStyle = 'greenBasket'
            } 
            else {
                prodsForBuy.basketStyle = 'greyBasket'
            }
            dispatch(getProducts(products))
        } 
        else {
            alert ( 'apranqi qanakutyuny yntrvats che')
        }
    }

    return (
        <div className="productCard" >
            <div className="productIcons">
                <div onClick={() => getFavouriteproducts(item.id)} className={item.heartStyle}>
                    <HeartIcon/>    
                </div>
                <div onClick={() => getBoughtproducts(item.id)} className={item.basketStyle}>
                    <ShopingCartIcon />
                </div>
                
            </div>
            <div className="image">
                {
                    item.beforeValue ? <p className="sale">SALE</p> : null
                }
                <img src={item.image} alt="" className="productImage" />
                <h2>{item.name}</h2>
                <p>{item.information}</p>
                <div className="values">
                    <span className="afterValue">{item.afterValue} $</span>
                    {
                        item.beforeValue ? <span className="beforeValue">{item.beforeValue} $</span> : null
                    }
                </div>
                <Counter item={item}/>
            </div>
        </div>
    )
}