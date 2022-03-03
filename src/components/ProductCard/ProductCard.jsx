import { HeartIcon } from "../../icons/HeartIcon"
import './ProductStyle.css'

export const ProductCard = ({item}) => {
return (
    <div className="productCard" >
        <div>
            {
                item.beforeValue ? <p>SALE</p> : null
            }
            <HeartIcon/>
        </div>
        <div>
            <img src={item.image} alt="" />
            <p>{item.name}</p>
            <p>{item.information}</p>
            <div>
                <p>{item.afterValue} $</p>
                {
                    item.beforeValue ? <p><del>{item.beforeValue} $</del></p> : null
                }
            </div>
        </div>
    </div>
)

}