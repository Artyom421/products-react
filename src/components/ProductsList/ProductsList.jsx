import { useSelector } from "react-redux"
import { ProductCard } from "../ProductCard"
import { ShopPageNavigation } from "../ShopPageNavigation/ShopPageNavigation"
import './ProductListStyle.css'

export const ProductList = () => {

    const { FilterProducts } = useSelector((state) => state.productsReducer)

    return(
        <div className='productListBody'>
            <h1>Products</h1>
            <ShopPageNavigation/>
            <div className="productList">
                {
                    FilterProducts.map((item) => (
                        <ProductCard item={item}  key={item.id} />
                    ))
                }
            </div>
        </div>
    )
}