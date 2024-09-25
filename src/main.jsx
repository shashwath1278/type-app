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
import Learnmore from './pages/learnmore/Learnmore.jsx';


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
        path:"/learn-more",
        element: <Learnmore/>,      
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    
  </Provider>,
)
