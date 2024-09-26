import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home.jsx';
import Typingapp from './pages/hyper/Typingapp.jsx';
import { Provider } from 'react-redux'
import store from './redux/store.js';
import { Shop } from './pages/shop/shop.jsx';
import { Cart } from './pages/cart/cart.jsx';
import Release from './Release.jsx';
import { ShopContextProvider } from './context/shop-context.jsx';
import Contact from './pages/contact/Contact.jsx';





const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path:"/type-speed",
        element: <Typingapp/>,      
      },
      {
        path: "/Products/*", // Use wildcard (*) for nested routing inside Release
        element: <Release />,
        children: [
          { path: "", element: <Release /> }, // Renders Release/Shop on /Products
          { path: "cart", element: <Release /> }, // Renders Release/Cart on /Products/cart
        ],
      },
      {
        path:"/contact",
        element: <Contact/>,      
      },
      
     
     
      
    ],
  },
]);

createRoot(document.getElementById('root')).render(
 
  <Provider store={store}>
    <RouterProvider router={router} />
    
  </Provider>,
)