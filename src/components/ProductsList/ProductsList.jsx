import { useSelector } from "react-redux"
import { ProductCard } from "../ProductCard"
import './ProductListStyle.css'

export const ProductList = () => {

    const state = useSelector((state) => state.productsReducer)
    const { products } = state

    return(
        <div className="productList">
            {
                products.map((item, index) => (
                    <ProductCard item={item}  key={index} index={index} />
                ))
            }
        </div>
    )
}