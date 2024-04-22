import InitialPage from "./Pages/InitialPage/InitialPage";
import MainPage from "./Pages/MainPage/MainPage";
import HomePage from "./Pages/MainPage/HomePage/HomePage";
import ProductListPage from "./Pages/MainPage/ProductListPage/ProductListPage";
import SignInPage from "./Pages/SignInPage/SignInPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import PersonalInformationPage from "./Pages/MainPage/InformationPage/PersonalInformationPage";
import EditInformation from "./Pages/MainPage/InformationPage/EditInformation";
import CartPage from "./Pages/MainPage/CartPage/CartPage";
import PayPage from "./Pages/MainPage/PayPage/PayPage";
import ProductInformationPage from "./Pages/MainPage/ProductInformationPage/ProductInformationPage";

const routes=[
    {
        path: '/',
        element: <InitialPage />
    },
    {
        path: '/signIn',
        element: <SignInPage />
    },
    {
        path: '/register',
        element: <RegisterPage />
    },
    {
        path: '/main',
        element: <MainPage />,
        children:[
            {
                path: '/main/home',
                element: <HomePage />,
            },
            {
                path: '/main/product',
                element: <ProductListPage />,
            },
            {
                path: '/main/product/information',
                element: <ProductInformationPage />,
            },
            {
                path: '/main/information',
                element: <PersonalInformationPage />,
                children:[
                    {
                        path: '/main/information/edit',
                        element: <EditInformation />,
                    }
                ]
            },
            {
                path: '/main/cart',
                element: <CartPage />,
            },
            {
                path: '/main/cart/pay',
                element: <PayPage />,
            }
        ]
    }
]

export default routes