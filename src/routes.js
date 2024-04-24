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
import ProductItemPage from "./Pages/MainPage/ProductItemPage/ProductItemPage";
import OrderPage from "./Pages/MainPage/OrderPage/OrderPage";
import OrderInformationPage from "./Pages/MainPage/OrderInformationPage/OrderInformationPage";
import ItemInformationPage from "./Pages/MainPage/ProductItemInformationPage/ItemInformationPage";

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
                path: '/main/product/item',
                element: <ProductItemPage />,
            },
            {
                path: '/main/product/item/information',
                element: <ItemInformationPage />,
            },
            {
                path: '/main/information',
                element: <PersonalInformationPage />,
            },
            {
                path: '/main/information/edit',
                element: <EditInformation />,
            },
            {
                path: '/main/cart',
                element: <CartPage />,
            },
            {
                path: '/main/cart/pay',
                element: <PayPage />,
            },
            {
                path: '/main/order',
                element: <OrderPage />,
            },
            {
                path: '/main/order/information',
                element: <OrderInformationPage />,
            },
        ]
    }
]

export default routes