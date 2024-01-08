// react router
import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// context provider
import CartProvider from "./context/CartProvider";
// layout
import RootLayout from "./layout/RootLayout";
// pages
import Home from "./pages/Home";
import ExploreProduct from "./pages/ExploreProducts";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";

// react toast
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/explore/:category" element={<ExploreProduct />}></Route>
      <Route path="/product/:productId" element={<Product />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <CartProvider>
        <RouterProvider router={router} />
        <Toaster
          toastOptions={{
            style: {
              padding: "16px",
              fontSize: "1.6rem",
            },
          }}
        />
      </CartProvider>
    </>
  );
}

export default App;
