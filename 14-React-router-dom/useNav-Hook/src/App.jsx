import {Route, createRoutesFromElements, RouterProvider} from "react-router-dom";
import Homepage from "./pages/homepage";
import Aboutus from "./pages/aboutus";
import Contactus from "./pages/contactus";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>} >
          <Route path = '/' element={<Homepage></Homepage>}></Route>
          <Route path="/aboutus" element={<Aboutus></Aboutus>}></Route>
          <Route path="/contactus" element={<Contactus></Contactus>}></Route>
      </Route>
    )
  )
  
  return (
      <RouterProvider router={(router)} />
    
  );
}

export default App;
