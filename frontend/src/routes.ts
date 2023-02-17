import { FunctionComponent } from "react";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";


type Route = {
    path: string,
    element: FunctionComponent
}

export const routes: Route[] = [

    {
        path: "/",
        element: LoginPage
    },
    {
        path: "/login",
        element: LoginPage
    }, 
    {
        path: "/signup",
        element: RegisterPage
    }
]