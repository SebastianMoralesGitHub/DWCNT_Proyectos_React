import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from './modulos/Home';
import Xd from './modulos/Xd';
import Acercade from './modulos/Acerca';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <h1>No existe esta pagina</h1>,
  },
  {
    path: 'xdxd',
    element: <Xd />,
  },
  {
    path: 'acerca',
    element: <Acercade />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
