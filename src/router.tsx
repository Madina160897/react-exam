import { createBrowserRouter } from "react-router-dom";
import {
    MainPage,
    ErrorPage,
    StockPage,
    SalePage,
    PurchasePage,
    DataPage,
} from "./routers/index"

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/stock',
        element: <StockPage />,
    },
    {
        path: "/sale",
        element: <SalePage />
    },
    {
        path: '/purchase',
        element: <PurchasePage />,
    },
    {
        path: "/data",
        element: <DataPage />
    },
]);

export default router;