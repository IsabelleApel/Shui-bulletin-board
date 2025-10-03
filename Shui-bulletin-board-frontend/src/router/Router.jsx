import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddMsgPage from "../pages/AddMsgPage/AddMsgPage";
import FlowPage from "../pages/FlowPage/FlowPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import UpdateMsgPage from "../pages/UpdateMsgPage/updateMsgPage";
import UserFlowPage from "../pages/UserFlowPage/UserFlowPage";

function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <FlowPage />,
            errorElement: <ErrorPage />
        },
        {
            path: "/:username",
            element: <UserFlowPage />
        },
        {
            path: "/messages/update/:id",
            element: <UpdateMsgPage />

        },
        {
            path: "/messages/add",
            element: <AddMsgPage />
        }
    ])

    return <RouterProvider router={router}/>
}

export default Router;