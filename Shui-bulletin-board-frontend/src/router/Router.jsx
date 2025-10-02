import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddMsgPage from "../pages/AddMsgPage/AddMsgPage";
import FlowPage from "../pages/FlowPage/FlowPage";
import MessagePage from "../pages/MessagePage/MessagePage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <FlowPage />,
            errorElement: <ErrorPage />
        },
        {
            path: "/messages/:id",
            element: <MessagePage />

        },
        {
            path: "/messages/add",
            element: <AddMsgPage />
        }
    ])

    return <RouterProvider router={router}/>
}

export default Router;