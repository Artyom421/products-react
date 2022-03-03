import { HeartIcon } from "../../icons/HeartIcon"
import { Counter } from "../couter/Counter"
import './ProductStyle.css'
import { ShopingCartIcon } from "../../icons/ShopingCartIcon"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { getProducts } from "../../store/products/productsActions/productsActions"

export const ProductCard = ({ item }) => {

    const dispatch = useDispatch()
    const { products, favouriteProducts } = useSelector((state) => state.productsReducer)

    const getFavourite = (id) => {
        const heartStyle = ''

        const favProd = products.filter((prod) => prod.id === id)[0]
        favProd.isFavourite = !favProd.isFavourite
        dispatch(getProducts(products))

    }

return (
    <div className="productCard" >
        <div>
            {
                item.beforeValue ? <p>SALE</p> : null
            }
            <div onClick={() => getFavourite(item.id)} >
                <HeartIcon/>    
            </div>
            <ShopingCartIcon />
        </div>
        <div>
            <img src={item.image} alt="" />
            <h2>{item.name}</h2>
            <p>{item.information}</p>
            <div>
                <p>{item.afterValue} $</p>
                {
                    item.beforeValue ? <p><del>{item.beforeValue} $</del></p> : null
                }
            </div>
            <Counter item={item}/>
        </div>
    </div>
)

}