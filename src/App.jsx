
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./components/Home/Home"
import Login from "./components/Login/Login";
import Error from "./components/Login/Error/Error";
import AllProduct from "./components/AllProduct/AllProduct";
import AddProduct from "./components/AddProduct/AddProduct";
import AllVariants from "./components/AllVariants/AllVariants";
import Registration from "./components/Registration/Registration"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>

      <Route
        path="/"
        element={<Home />}
      >
       
        <Route
          path="/allproduct"
          element={<AllProduct />}
        >
        </Route>
        <Route
          path="/addproduct"
          element={<AddProduct />}
        >
        </Route>
        <Route
          path="/allvariants"
          element={<AllVariants/>}
        >
        </Route>
      </Route>
      
        <Route
          path="/registration"
          element={<Registration/>}
        >
        </Route>
        <Route
          path="/login"
          element={<Login />}
        >
        </Route>

      <Route
        path="*"
        element={<Error />}
      >
      </Route>

    </Route>
  )
);
function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
