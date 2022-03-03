import { COUNT_CHANGE, 
        GET_PRODUCTS, 
        GET_FAVOURITE_PRODUCT } from "../productsActions/productsActions"

const initialState = {
    products: [
        {   
            "id": "1",
            "image":"https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/25-1.png",
            "name": "Iced Tea Bottle",
            "information":"ced coffee is a type of coffee beverage served chille brewed variously with the fundamental…",
            "beforeValue":"",
            "afterValue": 11.45,
            "count": 0,
            "isFavourite": false
        },
        {   
            "id": "2",
            "image":"https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/2-1.png",
            "name": "Bacon Burger",
            "information":"A mighty meaty double helping of all the reasons you love our burger.",
            "beforeValue":"",
            "afterValue": 10.55,
            "count": 0,
            "isFavourite": false
        },
        {   
            "id": 3,
            "image":"https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/11-1-450x450.png",
            "name": "Chocolate Muffin",
            "information":"Browse unique Coca-Cola products clothing, & accessories, or customize Coke bottles and gifts",
            "beforeValue":"",
            "afterValue": 17.25,
            "count": 0,
            "isFavourite": false
        },
        {   
            "id": "4",
            "image":"https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/3-1.png",
            "name": "BBQ chicken breast",
            "information":"A mighty meaty double helping of all the reasons you love our burger.",
            "beforeValue": 12.75,
            "afterValue": 8.65,
            "count": 0,
            "isFavourite": false
        },
        {  
            "id": "5",
            "image":"https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/1-1.png",
            "name": "Apricot Chicken",
            "information":"Crispy bacon tasty ham pineapple onion and stretchy mozzarella finished",
            "beforeValue":"",
            "afterValue": 18.25,
            "count": 0,
            "isFavourite": false
        },
        {   
            "id": 6,
            "image":"https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/17-1-450x450.png",
            "name": "Grand Italiano",
            "information":"Quisque pretium turpis non tempus cursus. Nulla consequat mi nec pellentesque imperdiet mi quam congue…",
            "beforeValue": 11.45,
            "afterValue": 7.35,
            "count": 0,
            "isFavourite": false
        },
        {   
            "id": 7,
            "image":"https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/5-1.png",
            "name": "Blueberry Shake",
            "information":"Iced coffee is a type of coffee beverage served chilled brewed variously with",
            "beforeValue": "",
            "afterValue": 10.75,
            "count": 0,
            "isFavourite": false
        },
        {   
            "id": 8,
            "image":"https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/27-1.png",
            "name": "Kiwi Smoothie",
            "information":"Iced coffee is a type of coffee beverage served chilled brewed variously with the fundamental…",
            "beforeValue":"" ,
            "afterValue": 12.25,
            "count": 0,
            "isFavourite": false
        }
    ],
    favouriteProducts: [],
    productsForBuy: []
}

export const productsReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case GET_PRODUCTS:
            return { ... state, products: action.payload }
        case COUNT_CHANGE: 
            return { ...state, products:action.payload}
        case GET_FAVOURITE_PRODUCT: 
            return { ...state, favouriteProducts: action.payload }
        default:
            return state;
    }
}