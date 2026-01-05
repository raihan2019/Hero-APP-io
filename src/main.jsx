import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './assets/Home/Home.jsx';
import Error from './assets/Components/Error/Error.jsx';
import AppComponent from './assets/Components/AppComponent/AppComponent.jsx';
import AppDetails from './assets/Components/AppComponent/AppDetails.jsx';
import Installtion from './assets/Components/Installation/Installation.jsx';
import Installation from './assets/Components/Installation/Installation.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    
    children: [
          { index: true, Component: Home },
          { path: "/apps", Component: AppComponent },
          { path: '/apps/:id', Component: AppDetails},
  
          { path: "/install", Component: Installation },
          { path: "*" , Component: Error},
        ],
  },
  

  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
