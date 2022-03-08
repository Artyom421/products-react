import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getFilterProducts } from "../../store/products/productsActions"

export const ShopPageNavigation = () => {
    
    const { products } = useSelector((state) => state.productsReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFilterProducts(products))
    },[products])

    return (
        <div className="ShopPageNav">
            <ul>
                <li onClick={() => dispatch(getFilterProducts(products))}>All</li>
                <li onClick={() => dispatch(getFilterProducts(products.filter((item) => item.Category === "HotDish")))}>HotDishes</li>
                <li onClick={() => dispatch(getFilterProducts(products.filter((item) => item.Category === "Burger")))}>Burgers</li>
                <li onClick={() => dispatch(getFilterProducts(products.filter((item) => item.Category === "Drinks")))}>Drinks</li>
                <li onClick={() => dispatch(getFilterProducts(products.filter((item) => item.Category === "IceCream")))}>IceCreams</li>
                <li onClick={() => dispatch(getFilterProducts(products.filter((item) => item.Category === "Pizza")))}>Pizzas</li>
            </ul>
        </div>
    )
}