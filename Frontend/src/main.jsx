import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

// font scss
import '../src/assets/Fonts/Fonts.scss';

// Style css
import '../src/assets/Scss/ImportStyle.scss'

import ContextProvider from './Context/ContextProvider.jsx';

import Travel from './Travel/Travel.jsx';
import Create from './Create/Create.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ContextProvider><App/></ContextProvider>,
    children:[
      {
        path:"/",
        element:<Travel/>
      },
      {
        path:"/create",
        element:<Create/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
