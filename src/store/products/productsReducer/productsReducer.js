import { COUNT_CHANGE, 
        GET_PRODUCTS, 
        OPEN_FAVOURITE_MODAL,
        OPEN_BASKET_MODAL,
        GET_MODAL_CONTENTS, 
        CHANGE_INPUT_VALUE,
        GET_INPUT_VALUE_TITLE,
        GET_FILTER_PRODUCTS} from "../productsActions"

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
            "isFavourite": false,
            "isBought": false,
            "Category": 'Drinks',
            "heartStyle": 'greyHeart' ,
            "basketStyle": "greyBasket"
        },
        {   
            "id": "2",
            "image":"https://www.menu.am/resources/default/img/restaurant_products/small/1640764687178-2199.jpg",
            "name": "Double Cheeseburger",
            "information":"ced coffee is a type of coffee beverage served chille brewed variously with the fundamental…",
            "beforeValue":"",
            "afterValue": 11.45,
            "count": 0,
            "isFavourite": false,
            "isBought": false,
            "Category": 'Burger',
            "heartStyle": 'greyHeart' ,
            "basketStyle": "greyBasket"
        },
        {   
            "id": "3",
            "image":"https://www.menu.am/resources/default/img/restaurant_products/small/1640766818647-2199.jpg",
            "name": "Bacon Burger",
            "information":"A mighty meaty double helping of all the reasons you love our burger.",
            "beforeValue":"",
            "afterValue": 10.55,
            "count": 0,
            "isFavourite": false,
            "isBought": false,
            "Category": 'Burger',
            "heartStyle": 'greyHeart' ,
            "basketStyle": "greyBasket"
        },
        {   
            "id": "4",
            "image":"https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/11-1-450x450.png",
            "name": "Chocolate Muffin",
            "information":"Browse unique Coca-Cola products clothing, & accessories, or customize Coke bottles and gifts",
            "beforeValue":"",
            "afterValue": 17.25,
            "count": 0,
            "isFavourite": false,
            "isBought": false,
            "Category": 'IceCream',
            "heartStyle": 'greyHeart' ,
            "basketStyle": "greyBasket"
        },
        {   
            "id": "5",
            "image":"https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/3-1.png",
            "name": "BBQ chicken breast",
            "information":"A mighty meaty double helping of all the reasons you love our burger.",
            "beforeValue": 12.75,
            "afterValue": 8.65,
            "count": 0,
            "isFavourite": false,
            "isBought": false,
            "Category": 'HotDish',
            "heartStyle": 'greyHeart' ,
            "basketStyle": "greyBasket"
        },
        {   
            "id": "6",
            "image":"https://www.menu.am/resources/default/img/restaurant_products/small/1640765363244-2199.jpg",
            "name": "Mushrooms Burger",
            "information": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, similique.",
            "beforeValue": 10,
            "afterValue": 7.75,
            "count": 0,
            "isFavourite": false,
            "isBought": false,
            "Category": 'Burger',
            "heartStyle": 'greyHeart' ,
            "basketStyle": "greyBasket"
        },
        {  
            "id": "7",
            "image":"https://back.tashirpizza.am/images/product/8e9e4f00c6eabdd6903642d29df944d8.jpg",
            "name": "Pizza Roman",
            "information":"Crispy bacon tasty ham pineapple onion and stretchy mozzarella finished",
            "beforeValue":"",
            "afterValue": 18.25,
            "count": 0,
            "isFavourite": false,
            "isBought": false,
            "Category": 'Pizza',
            "heartStyle": 'greyHeart' ,
            "basketStyle": "greyBasket"
        },
        {   
            "id": "8",
            "image":"https://back.tashirpizza.am/images/product/5c9c4a48d0fff4c75af8090d04cb8a4a.jpg",
            "name": "Pizza Pepperoni",
            "information":"Quisque pretium turpis non tempus cursus. Nulla consequat mi nec pellentesque imperdiet mi quam congue…",
            "beforeValue": 11.45,
            "afterValue": 7.35,
            "count": 0,
            "isFavourite": false,
            "isBought": false,
            "Category": 'Pizza',
            "heartStyle": 'greyHeart' ,
            "basketStyle": "greyBasket"
        },
        {   
            "id": "9",
            "image":"https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/5-1.png",
            "name": "Blueberry Shake",
            "information":"Iced coffee is a type of coffee beverage served chilled brewed variously with",
            "beforeValue": "",
            "afterValue": 10.75,
            "count": 0,
            "isFavourite": false,
            "isBought": false,
            "Category": 'Drinks',
            "heartStyle": 'greyHeart' ,
            "basketStyle": "greyBasket"
        },
        {   
            "id": "10",
            "image":"https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/27-1.png",
            "name": "Kiwi Smoothie",
            "information":"Iced coffee is a type of coffee beverage served chilled brewed variously with the fundamental…",
            "beforeValue":"" ,
            "afterValue": 12.25,
            "count": 0,
            "isFavourite": false,
            "isBought": false,
            "Category": 'Drinks',
            "heartStyle": 'greyHeart' ,
            "basketStyle": "greyBasket"
        },
        {   
            "id": "11",
            "image":"https://back.tashirpizza.am/images/product/da2ce716de857e0c62109059c47e5a95.jpg",
            "name": "Pizza Europe",
            "information":"Iced coffee is a type of coffee beverage served chilled brewed variously with the fundamental…",
            "beforeValue":"" ,
            "afterValue": 12.25,
            "count": 0,
            "isFavourite": false,
            "isBought": false,
            "Category": 'Pizza',
            "heartStyle": 'greyHeart' ,
            "basketStyle": "greyBasket"
        },
        {   
            "id": "12",
            "image":"https://domf5oio6qrcr.cloudfront.net/medialibrary/6013/502cae8d-b194-4f3e-89cd-4226feb8e33a.jpg",
            "name": "Salmon Fillet",
            "information":"Lorem nfu ipsum snviu soow chgzcg chaddbzcjljaj clzvj",
            "beforeValue":"" ,
            "afterValue": 18.25,
            "count": 0,
            "isFavourite": false,
            "isBought": false,
            "Category": 'HotDish',
            "heartStyle": 'greyHeart' ,
            "basketStyle": "greyBasket"
        },
        {   
            "id": "13",
            "image":"http://www.menu.am/resources/default/img/restaurant_products/big/1565866173-6853.jpeg",
            "name": "Lamb Ribs",
            "information":"Iced coffee is a type of coffee beverage served chilled brewed variously with the fundamental…",
            "beforeValue":"14.55" ,
            "afterValue": 12.45,
            "count": 0,
            "isFavourite": false,
            "isBought": false,
            "Category": 'HotDish',
            "heartStyle": 'greyHeart' ,
            "basketStyle": "greyBasket"
        },
        {   
            "id": "14",
            "image":"https://www.jettfoods.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/9/a/9a8a349f-7b3d-4fb0-b618-705b521bd937.jpeg",
            "name": "Angus Stake",
            "information":"Iced coffee is a type of coffee beverage served chilled brewed variously with the fundamental…",
            "beforeValue":"" ,
            "afterValue": 14.45,
            "count": 0,
            "isFavourite": false,
            "isBought": false,
            "Category": 'HotDish',
            "heartStyle": 'greyHeart' ,
            "basketStyle": "greyBasket"
        },
        {   
            "id": "15",
            "image":"https://www.carveyourcraving.com/wp-content/uploads/2021/06/chocolate-icecream-in-an-icecream-maker.jpg",
            "name": "Chocolate Ice-Cream",
            "information":"Iced coffee is a type of coffee beverage served chilled brewed variously with the fundamental…",
            "beforeValue":"" ,
            "afterValue": 14.45,
            "count": 0,
            "isFavourite": false,
            "isBought": false,
            "Category": 'IceCream',
            "heartStyle": 'greyHeart' ,
            "basketStyle": "greyBasket"
        },
        {   
            "id": "16",
            "image":"https://www.vegrecipesofindia.com/wp-content/uploads/2018/04/fruit-salad-with-ice-cream-recipe-1.jpg",
            "name": "Fruit-Salad Ice-Cream",
            "information":"Iced coffee is a type of coffee beverage served chilled brewed variously with the fundamental…",
            "beforeValue":"" ,
            "afterValue": 14.45,
            "count": 0,
            "isFavourite": false,
            "isBought": false,
            "Category": 'IceCream',
            "heartStyle": 'greyHeart' ,
            "basketStyle": "greyBasket"
        }
    ],
    FilterProducts: [
        {   
            "id": "1",
            "image":"https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/25-1.png",
            "name": "Iced Tea Bottle",
            "information":"ced coffee is a type of coffee beverage served chille brewed variously with the fundamental…",
            "beforeValue":"",
            "afterValue": 11.45,
            "count": 0,
            "isFavourite": false,
            "isBought": false,
            "Category": 'Drinks',
            "heartStyle": 'greyHeart' ,
            "basketStyle": "greyBasket"
        },
        {   
            "id": "2",
            "image":"https://www.menu.am/resources/default/img/restaurant_products/small/1640764687178-2199.jpg",
            "name": "Double Cheeseburger",
            "information":"ced coffee is a type of coffee beverage served chille brewed variously with the fundamental…",
            "beforeValue":"",
            "afterValue": 11.45,
            "count": 0,
            "isFavourite": false,
            "isBought": false,
            "Category": 'Burger',
            "heartStyle": 'greyHeart' ,
            "basketStyle": "greyBasket"
        },
        {   
            "id": "3",
            "image":"https://www.menu.am/resources/default/img/restaurant_products/small/1640766818647-2199.jpg",
            "name": "Bacon Burger",
            "information":"A mighty meaty double helping of all the reasons you love our burger.",
            "beforeValue":"",
            "afterValue": 10.55,
            "count": 0,
            "isFavourite": false,
            "isBought": false,
            "Category": 'Burger',
            "heartStyle": 'greyHeart' ,
            "basketStyle": "greyBasket"
        },
        {   
            "id": "4",
            "image":"https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/11-1-450x450.png",
            "name": "Chocolate Muffin",
            "information":"Browse unique Coca-Cola products clothing, & accessories, or customize Coke bottles and gifts",
            "beforeValue":"",
            "afterValue": 17.25,
            "count": 0,
            "isFavourite": false,
            "isBought": false,
            "Category": 'IceCream',
            "heartStyle": 'greyHeart' ,
            "basketStyle": "greyBasket"
        },
        {   
            "id": "5",
            "image":"https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/3-1.png",
            "name": "BBQ chicken breast",
            "information":"A mighty meaty double helping of all the reasons you love our burger.",
            "beforeValue": 12.75,
            "afterValue": 8.65,
            "count": 0,
            "isFavourite": false,
            "isBought": false,
            "Category": 'HotDish',
            "heartStyle": 'greyHeart' ,
            "basketStyle": "greyBasket"
        },
        {   
            "id": "6",
            "image":"https://www.menu.am/resources/default/img/restaurant_products/small/1640765363244-2199.jpg",
            "name": "Mushrooms Burger",
            "information": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, similique.",
            "beforeValue": 10,
            "afterValue": 7.75,
            "count": 0,
            "isFavourite": false,
            "isBought": false,
            "Category": 'Burger',
            "heartStyle": 'greyHeart' ,
            "basketStyle": "greyBasket"
        },
        {  
            "id": "7",
            "image":"https://back.tashirpizza.am/images/product/8e9e4f00c6eabdd6903642d29df944d8.jpg",
            "name": "Pizza Roman",
            "information":"Crispy bacon tasty ham pineapple onion and stretchy mozzarella finished",
            "beforeValue":"",
            "afterValue": 18.25,
            "count": 0,
            "isFavourite": false,
            "isBought": false,
            "Category": 'Pizza',
            "heartStyle": 'greyHeart' ,
            "basketStyle": "greyBasket"
        },
        {   
            "id": "8",
            "image":"https://back.tashirpizza.am/images/product/5c9c4a48d0fff4c75af8090d04cb8a4a.jpg",
            "name": "Pizza Pepperoni",
            "information":"Quisque pretium turpis non tempus cursus. Nulla consequat mi nec pellentesque imperdiet mi quam congue…",
            "beforeValue": 11.45,
            "afterValue": 7.35,
            "count": 0,
            "isFavourite": false,
            "isBought": false,
            "Category": 'Pizza',
            "heartStyle": 'greyHeart' ,
            "basketStyle": "greyBasket"
        },
        {   
            "id": "9",
            "image":"https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/5-1.png",
            "name": "Blueberry Shake",
            "information":"Iced coffee is a type of coffee beverage served chilled brewed variously with",
            "beforeValue": "",
            "afterValue": 10.75,
            "count": 0,
            "isFavourite": false,
            "isBought": false,
            "Category": 'Drinks',
            "heartStyle": 'greyHeart' ,
            "basketStyle": "greyBasket"
        },
        {   
            "id": "10",
            "image":"https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/27-1.png",
            "name": "Kiwi Smoothie",
            "information":"Iced coffee is a type of coffee beverage served chilled brewed variously with the fundamental…",
            "beforeValue":"" ,
            "afterValue": 12.25,
            "count": 0,
            "isFavourite": false,
            "isBought": false,
            "Category": 'Drinks',
            "heartStyle": 'greyHeart' ,
            "basketStyle": "greyBasket"
        },
        {   
            "id": "11",
            "image":"https://back.tashirpizza.am/images/product/da2ce716de857e0c62109059c47e5a95.jpg",
            "name": "Pizza Europe",
            "information":"Iced coffee is a type of coffee beverage served chilled brewed variously with the fundamental…",
            "beforeValue":"" ,
            "afterValue": 12.25,
            "count": 0,
            "isFavourite": false,
            "isBought": false,
            "Category": 'Pizza',
            "heartStyle": 'greyHeart' ,
            "basketStyle": "greyBasket"
        },
        {   
            "id": "12",
            "image":"https://domf5oio6qrcr.cloudfront.net/medialibrary/6013/502cae8d-b194-4f3e-89cd-4226feb8e33a.jpg",
            "name": "Salmon Fillet",
            "information":"Lorem nfu ipsum snviu soow chgzcg chaddbzcjljaj clzvj",
            "beforeValue":"" ,
            "afterValue": 18.25,
            "count": 0,
            "isFavourite": false,
            "isBought": false,
            "Category": 'HotDish',
            "heartStyle": 'greyHeart' ,
            "basketStyle": "greyBasket"
        },
        {   
            "id": "13",
            "image":"http://www.menu.am/resources/default/img/restaurant_products/big/1565866173-6853.jpeg",
            "name": "Lamb Ribs",
            "information":"Iced coffee is a type of coffee beverage served chilled brewed variously with the fundamental…",
            "beforeValue":"14.55" ,
            "afterValue": 12.45,
            "count": 0,
            "isFavourite": false,
            "isBought": false,
            "Category": 'HotDish',
            "heartStyle": 'greyHeart' ,
            "basketStyle": "greyBasket"
        },
        {   
            "id": "14",
            "image":"https://www.jettfoods.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/9/a/9a8a349f-7b3d-4fb0-b618-705b521bd937.jpeg",
            "name": "Angus Stake",
            "information":"Iced coffee is a type of coffee beverage served chilled brewed variously with the fundamental…",
            "beforeValue":"" ,
            "afterValue": 14.45,
            "count": 0,
            "isFavourite": false,
            "isBought": false,
            "Category": 'HotDish',
            "heartStyle": 'greyHeart' ,
            "basketStyle": "greyBasket"
        },
        {   
            "id": "15",
            "image":"https://www.carveyourcraving.com/wp-content/uploads/2021/06/chocolate-icecream-in-an-icecream-maker.jpg",
            "name": "Chocolate Ice-Cream",
            "information":"Iced coffee is a type of coffee beverage served chilled brewed variously with the fundamental…",
            "beforeValue":"" ,
            "afterValue": 14.45,
            "count": 0,
            "isFavourite": false,
            "isBought": false,
            "Category": 'IceCream',
            "heartStyle": 'greyHeart' ,
            "basketStyle": "greyBasket"
        },
        {   
            "id": "16",
            "image":"https://www.vegrecipesofindia.com/wp-content/uploads/2018/04/fruit-salad-with-ice-cream-recipe-1.jpg",
            "name": "Fruit-Salad Ice-Cream",
            "information":"Iced coffee is a type of coffee beverage served chilled brewed variously with the fundamental…",
            "beforeValue":"" ,
            "afterValue": 14.45,
            "count": 0,
            "isFavourite": false,
            "isBought": false,
            "Category": 'IceCream',
            "heartStyle": 'greyHeart' ,
            "basketStyle": "greyBasket"
        }
    ],
    modalContents: [],
    isFavouriteModalOpen: false,
    isBasketModalOpen: false,
    inputValue: ''
}

export const productsReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case GET_PRODUCTS:
            return { ... state, products: action.payload }
        case COUNT_CHANGE: 
            return { ...state, products: action.payload}
        case OPEN_FAVOURITE_MODAL: 
            return { ...state, isFavouriteModalOpen: action.payload }
        case OPEN_BASKET_MODAL: 
            return { ...state, isBasketModalOpen: action.payload }    
        case GET_MODAL_CONTENTS:
            return { ...state, modalContents: action.payload }
        case CHANGE_INPUT_VALUE:
            return { ...state, inputValue: action.payload }
        case GET_INPUT_VALUE_TITLE:
            return { ...state, inputValueTitle: action.payload }
        case GET_FILTER_PRODUCTS:
            return { ...state, FilterProducts: action.payload }
        default:
            return state;
    }
}