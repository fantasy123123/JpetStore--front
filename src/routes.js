import InitialPage from "./Pages/InitialPage/InitialPage";
import MainPage from "./Pages/MainPage/MainPage";
import HomePage from "./Pages/MainPage/HomePage/HomePage";
import ProductListPage from "./Pages/MainPage/ProductListPage/ProductListPage";
import SignInPage from "./Pages/SignInPage/SignInPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import PersonalInformationPage from "./Pages/MainPage/InformationPage/PersonalInformationPage";
import EditInformation from "./Pages/MainPage/InformationPage/EditInformation";

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
                path: '/main/information',
                element: <PersonalInformationPage />,
                children:[
                    {
                        path: '/main/information/edit',
                        element: <EditInformation />,
                    }
                ]
            }
        ]
    }
]

export default routes