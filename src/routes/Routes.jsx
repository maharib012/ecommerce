import {
    createBrowserRouter
} from "react-router-dom";
import User from "../layouts/User";
import Home from "../pages/user/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <User />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    },
]);

export default router;