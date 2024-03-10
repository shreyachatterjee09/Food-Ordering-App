import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import { createBrowserRouter , RouterProvider, Outlet} from "react-router-dom";
//import About from "./components/About";
//import Grocery from "./components/Grocery";
import { useState,useEffect} from "react";
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux"
import appStore from "./utils/appStore";
import Cart from "./components/Cart"

const Grocery = lazy(()=> import("./components/Grocery"));
 
const About = lazy(() => import("./components/About"))
 const AppLayout = () => {

  const [userInfo, setUserInfo] = useState();


  //authentication
  useEffect(()=>{
    //Make an API call and send username and password
    const data = {
      name: "Shreya Chatterjee"
    }

    setUserInfo(data.name)
  }, [])
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser: userInfo, setUserInfo}}>
  <div className="app">
    
    <Header/>
    
 
  <Outlet/>
  
    
  </div>
  </UserContext.Provider>
  </Provider>
  );
 };
 
 const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    children:[
      {
        path: "/",
        element:<Body />,
      },
      {
        path:"/about",
        element: <About />,
      },
      {
        path:"/contact",
        element:<Contact />,
      },
      {
        path:"/grocery",
        element:(
        <Suspense fallback={<h1>Loading....</h1>}>
          <Grocery />
          </Suspense>
        ),
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>,
      },
      {
        path:"/cart",
        element: <Cart />
      }
    ],
    errorElement: <Error />,
  },
 
 ])


 const root= ReactDOM.createRoot(document.getElementById("root"));
 root.render(<RouterProvider router={appRouter}/>);