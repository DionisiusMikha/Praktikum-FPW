import { createBrowserRouter, redirect } from "react-router-dom";

import handler from './handler';
import Login from './pages/login'
import Register from './pages/register'
import StoryDefault from "./pages/story";


import Overview from "./pages/overview";

const { register, getData, getStory, getStoryID, formOverview, formAddStory } = handler;

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/home/stories",
        loader: getStory,
        action: formAddStory,
        element: <StoryDefault />,
    },
    {
        path: "/home/stories/:id/overview",
        loader: getStoryID,
        action: formOverview,
        element: <Overview />,
    },

]);

export default Router;
