export const EMAIL = "EMAIL"
export const PASSWORD = "PASSWORD"

export const email = (payload) => {
    return { type: EMAIL, payload}
}

export const password = (payload) => {
    return { type: PASSWORD, payload}
}