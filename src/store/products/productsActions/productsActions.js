export const GET_PRODUCTS = 'GET_PRODUCTS'
export const COUNT_CHANGE = 'COUNT_CHANGE'
export const GET_FAVOURITE_PRODUCT = 'GET_FAVOURITE_PRODUCT'

export const getProducts = ( payload ) => {
    return { type: GET_PRODUCTS, payload }
}

export const countChange = ( payload ) => {
    return { type: GET_FAVOURITE_PRODUCT, payload }
}

export const getFavouriteProduct = ( payload ) => {
    return { type: GET_FAVOURITE_PRODUCT, payload }
}