import { hover } from "@testing-library/user-event/dist/hover"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { getProducts } from "../../store/products/productsActions/productsActions"
import './Counter.css\
'

export const Counter = ({item}) => {

    const { products } = useSelector((state) => state.productsReducer)
    const dispatch = useDispatch()
    
    const countMinus = (value) => {
        if ( item.count !== 0 ) {
            const prod = products.filter((x) => x.id === item.id)[0]
            prod.count = value
            dispatch(getProducts(products))
        }
    }

    const initialState = {}
    const [state, setState] = useState(initialState)
    // const [isDis, setIsDis] = useState(initialState)
    
    useEffect(() => {

        if( item.count === 0 ) {
            // setIsDis(true)
            // setStyle('')
            setState({style:'', isDis: true})
        } 
        else if ( item.count > 0) {
            setState({style:'button', isDis: false})

            // // setIsDis(false)
            // setStyle('button')
        }
    
    },[item.count])

    
    

    const countPlus = (value) => {
        const prod = products.filter((x) => x.id === item.id)[0]
        prod.count = value
        dispatch(getProducts(products))
    }

    return (
        <div className="counter">
            <button className={state.style} disabled={state.isDis} onClick={() => countMinus(item.count - 1)}>-</button>
            <span>{item.count}</span>
            <button className='button' onClick={() => countPlus(item.count + 1)}>+</button>
        </div>
    )
}