import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { get_products } from "../../store/products/productsActions"
import { ProductCard } from "../ProductCard"
import './ProductListStyle.css'

export const ProductList = () => {

    const state = useSelector((state) => state.productsReduser)
    const { products } = state

    return(
        <div className="productList">
            {
                products.map((item, index) => (
                    <ProductCard item={item}  key={index} />
                ))
            }
        </div>
    )
}