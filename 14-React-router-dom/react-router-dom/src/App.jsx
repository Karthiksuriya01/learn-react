import Navbar from "./component/navbar";
import {Routes, Route} from "react-router-dom";
import Homepage from "./pages/homepage";
import Aboutus from "./pages/aboutus";
import Contactus from "./pages/contactus";


const App = () => {
  return (
    <div>
      <h1>hello</h1>
      <Navbar />
      <Routes>
        <Route path = '/' element={<Homepage></Homepage>}></Route>
        <Route path="/aboutus" element={<Aboutus></Aboutus>}></Route>
        <Route path="/contactus" element={<Contactus></Contactus>}></Route>
      </Routes>
    </div>
  );
}

export default App;
