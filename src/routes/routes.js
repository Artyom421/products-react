import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { ProductPage } from "../pages/ProductPage/ProductPage";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";

export const routes = [
    {
        path: "/",
        exact: true ,
        page: () => <HomePage/>
    },
    {
        path: "/ProductPage",
        exact: true ,
        page: () => <ProductPage/>
    },
    {
        path: "/LoginPage",
        exact: true ,
        page: () => <LoginPage/>
    },
    {
        path: "/SignUpPage",
        exact: true ,
        page: () => <SignUpPage/>
    }
]
