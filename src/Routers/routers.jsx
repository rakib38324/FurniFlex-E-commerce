import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/ManiLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";

// ===================== main router here ==================
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout> ,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      
    ],
  },
]);

export default router;
