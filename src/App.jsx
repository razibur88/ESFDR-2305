
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home"
import Layout from "./components/root/Layout";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Error from "./pages/Error";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Journal from "./pages/Journal";
function App() {
  let router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout/>}>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/shop" element={<Shop/>}></Route>
      <Route path="/shop/:id" element={<ProductDetails/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/checkout" element={<Checkout/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/journal" element={<Journal/>}></Route>
      <Route path="*" element={<Error/>}></Route>
    </Route>
  ))

  return (
   <>
      <RouterProvider router={router}/>
   </>
  )
}

export default App
