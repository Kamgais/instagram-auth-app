import { FunctionComponent } from "react";
import AppContainer from "./pages/AppContainer/AppContainer";
import Chat from "./pages/Chat/Chat";
import Explore from "./pages/Explore/Explore";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Profile from "./pages/Profile/Profile";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ResetPassword from "./pages/ResetPassword/ResetPassword";


type Route = {
    path: string,
    redirect?: string,
    element: FunctionComponent,
    routes?: Route[],
    protected: boolean

}

export const routes: Route[] = [

   
    {
        path: "/",
        redirect: '/login',
        element: LoginPage,
        protected: false

    }, 
    {
        path: "/login",
        element: LoginPage,
        protected: false
    }, 
    {
        path: "/signup",
        element: RegisterPage,
        protected: false
    }, {
        path: "/forgot-password",
        element: ForgotPassword,
        protected: false
    },
    {
        path: "/reset-password/:token",
        element: ResetPassword,
        protected: false
    },

    {
        path: "/app",
        element: AppContainer,
        protected: false,
        routes: [
            {
                path: 'home',
                element : HomePage,
                protected:false
            },
            {
                path: 'explore',
                element: Explore,
                protected:true
            }
            ,
            {
                path: 'direct/inbox',
                element: Chat,
                protected:true
            },
            {
                path: 'profile',
                element: Profile,
                protected:true
            }
            ,
            {
                path: 'reels/videos',
                element: Explore,
                protected:true
            }
        ]

    }
    
]