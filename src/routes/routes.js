import { HomePage } from "../pages/HomePage";
import { SignInPage } from "../pages/SignInPage";
import { ProductPage } from "../pages/ProductPage";
import { SignUpPage } from "../pages/SignUpPage";

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
        path: "/SignInPage",
        exact: true ,
        page: () => <SignInPage/>
    },
    {
        path: "/SignUpPage",
        exact: true ,
        page: () => <SignUpPage/>
    }
]
