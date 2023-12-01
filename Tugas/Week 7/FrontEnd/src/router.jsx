import { createBrowserRouter } from "react-router-dom";

import handlerHome from './handler/handlerHome'
import App from "./app";

const { loadDataHome } = handlerHome;

const routes = [
  {
    path: "/",
    loader: loadDataHome,
    element: <App />,
  },
];

const router = createBrowserRouter(routes);

export default router;
