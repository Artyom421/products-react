export const GET_PRODUCTS = 'GET_PRODUCTS'
export const COUNT_CHANGE = 'COUNT_CHANGE'
export const OPEN_FAVOURITE_MODAL = 'OPEN_FAVOURITE_MODAL'
export const OPEN_BASKET_MODAL = 'OPEN_BASKET_MODAL'
export const GET_MODAL_CONTENTS = 'GET_MODAL_CONTENTS'
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE'
export const GET_INPUT_VALUE_TITLE = 'GET_INPUT_VALUE_TITLE'
export const GET_FILTER_PRODUCTS = 'GET_FILTER_PRODUCTS'

export const getProducts = ( payload ) => {
    return { type: GET_PRODUCTS, payload }
}

export const countChange = ( payload ) => {
    return { type: COUNT_CHANGE, payload }
}

export const openFavouriteModal = ( payload ) => {
    return { type: OPEN_FAVOURITE_MODAL, payload }
}

export const openBasketModal = ( payload ) => {
    return { type: OPEN_BASKET_MODAL, payload }
}

export const getModalContents = ( payload ) => {
    return { type: GET_MODAL_CONTENTS, payload }
}

export const changeInputValue = ( payload ) => {
    return { type: CHANGE_INPUT_VALUE, payload }
}

export const getInputValueTitle = ( payload ) => {
    return { type: GET_INPUT_VALUE_TITLE, payload }
}

export const getFilterProducts = ( payload ) => {
    return { type: GET_FILTER_PRODUCTS, payload }
}