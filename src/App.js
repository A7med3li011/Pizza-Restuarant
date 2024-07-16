import logo from './logo.svg';
import './App.css';
import {  createBrowserRouter,createHashRouter,RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Menu from './Pages/Menu';
import { Error } from './UI/Error';
import CreateOrder from './Pages/CreateOrder';
import Myorder from './Components/Myorder';

function App() {
  const router = createHashRouter([
    {element:<Layout/>,errorElement:<Error/>,children:[

      {path:"/", element:<Home/>,errorElement:<Error/>},
      {path:"/cart",element:<Cart/>,errorElement:<Error/> },
      {path:"/menu",element:<Menu/>,errorElement:<Error/>},
      {path:"/createorder",element:<CreateOrder/>,errorElement:<Error/>},     
      {path:"/createorder/:id",element:<Myorder/>,errorElement:<Error/>}     

    ]}
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
