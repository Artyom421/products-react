import { HeaderComponent } from "../../components/header/HeaderComponent"
import { ModalBasket } from "../../components/Modals/ModalBasket"
import { ModalFavourite } from "../../components/Modals/ModalFavourite"
import { ProductList } from "../../components/ProductsList/ProductsList"

export const ProductPage = () => {
    return (
        <div>
            <h1>Product Page</h1>
            <div className="container">
                <HeaderComponent/>
                <ProductList/>
            </div>
            <ModalBasket/>
            <ModalFavourite/>
        </div>
    )
}