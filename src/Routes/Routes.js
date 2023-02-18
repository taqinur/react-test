import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/contact-us',
                element: <ContactUs></ContactUs>,
            }
        ]
    }
])

export default router;