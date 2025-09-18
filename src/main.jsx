import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills'
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import GetMore from './Components/GetMore'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },

      {
        path: "/about",
        element: <About></About>,
      },

      {
        path: "/skills",
        element:<Skills></Skills>,
      },
      {
        path: "/Projects",
        element:<Projects></Projects>
      },

      { 
        path: "/contact",
        element: <Contact></Contact>,
      },
       { 
        path: "/getmore",
        element:<GetMore></GetMore>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
