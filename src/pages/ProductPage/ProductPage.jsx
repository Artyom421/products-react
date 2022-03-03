import { HeaderComponent } from "../../components/header/HeaderComponent"
import { ProductList } from "../../components/ProductsList/ProductsList"

export const ProductPage = () => {
    return (
        <div>
            <h1>Product Page</h1>
            <HeaderComponent/>
            <ProductList/>
        </div>
    )
}