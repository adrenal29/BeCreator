import { Navbar } from "./components/navbar/Navbar"
import { Footer } from "./components/footer/Footer";
import './app.scss'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Home } from "./pages/home/Home";
import { Gigs } from "./pages/gigs/Gigs";
import { Gig } from "./pages/gig/Gig";
import { Orders } from "./pages/orders/Orders";
import { MyGigs } from "./pages/myGigs/MyGigs";
import Add from "./pages/add/Add";
import { Messages } from "./pages/messages/Messages";
import { Message } from "./pages/message/Message";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
function App() {
  const queryClient = new QueryClient();
  const Layout=()=>{
    return(
      <>
       <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />
          <Footer />
        </QueryClientProvider>
      </>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
        path:'/',
        element:<Home/>
        },
        {
        path:'/gigs',
        element:<Gigs/>
        },
        {
        path:'/gig/:id',
        element:<Gig/>
        },
        {
        path:'/orders',
        element:<Orders/>
        },
        {
        path:'/mygigs',
        element:<MyGigs/>
        },
        {
        path:'/add',
        element:<Add/>
        },
        {
        path:'/messages',
        element:<Messages/>
        },
        {
        path:'/message/:id',
        element:<Message/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/register',
          element:<Register/>
        }
      ]
    },
    {
      path:"/dashboard",
      element:<Dashboard/>
    }
  ]);

  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default App
