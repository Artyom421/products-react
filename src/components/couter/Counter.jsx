import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { countChange } from "../../store/products/productsActions/productsActions"

export const Counter = ({item}) => {

    const { products } = useSelector((state) => state.productsReducer)
    const dispatch = useDispatch()

    const countMinus = (value) => {
        if ( item.count !== 0 ) {
            const prod = products.filter((x) => x.id === item.id)[0]
            prod.count = value
            dispatch(countChange(products))
            setIsDis(false)
        }
    }
    
    const [isDis, setIsDis] = useState()
    
    useEffect(() => {

        if( item.count === 0 ) {
            setIsDis(true)
        } 
        else if ( item.count > 0) {
            setIsDis(false)
        }

    },[item.count])

    const countPlus = (value) => {
        const prod = products.filter((x) => x.id === item.id)[0]
        prod.count = value
        dispatch(countChange(products))
    }

    return (
        <div>
            <button disabled={isDis} onClick={() => countMinus(item.count - 1)}>-</button>
            <span>{item.count}</span>
            <button onClick={() => countPlus(item.count + 1)}>+</button>
        </div>
    )
}