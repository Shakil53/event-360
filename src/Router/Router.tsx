import Main from "@/components/Layout/Main";
import About from "@/components/pages/About";
import Contact from "@/components/pages/Contact";
import Home from "@/components/pages/Home";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            }
        ]
    }
])