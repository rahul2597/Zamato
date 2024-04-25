import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DiningOut from "./pages/DiningOut";
import { Delivery } from "./pages/Delivery";
import { NightLife } from "./pages/NightLife";
import Login from "./Components/Login";
import { useState, createContext } from "react";
import Signup from "./Components/Signup";
import Restaurentdetail from "./pages/Restaurentdetail";
import Overview from "./pages/Overview";
import Orderonline from "./pages/Orderonline";
import Reviews from "./pages/Reviews";
import Photo from "./pages/Photo";
import Menu from "./pages/Menu";

const UserContext = createContext();
function App() {
  const [showHide, setShowHide] = useState(false);
  const loginShowHandle = () => {
    setShowHide((prev) => !prev);
  };
  const [showsignup, setShowsignup] = useState(false);
  const signupshow = () => {
    setShowsignup((prev) => !prev);
  };
  // const[dining,setDining]=useState(false)
  // const[delivery,setDelivery]=useState(false)
  // const[nightlife,setNightlife]=useState(false)

  // const lineshow=()=>{
  //   setDining((prev)=>!prev);
  // }
  return (
    <>
      <UserContext.Provider value={{ loginShowHandle, signupshow }}>
        <div className="relative border-black border- w-full flex flex-col justify-center mt-[0.5px]">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<DiningOut />} />
              <Route path="/delivery" element={<Delivery />} />
              <Route path="/night-life" element={<NightLife />} />

              <Route
                path="/Restaurentdetail/:restaurantName"
                element={<Restaurentdetail />}
              />
              <Route
                path="delivery/Restaurentdetail/:restaurantName"
                element={<Restaurentdetail />}
              />
              <Route
                path="night-life/Restaurentdetail/:restaurantName"
                element={<Restaurentdetail />}
              />

              <Route path="/Detailreviews/Overview" element={<Overview />} />
              <Route
                path="/Detailreviews/Orderonline"
                element={<Orderonline />}
              />
              <Route path="/Detailreviews/Reviews" element={<Reviews />} />
              <Route path="/Detailreviews/photo" element={<Photo />} />
              <Route path="/Detailreviews/Menu" element={<Menu />} />
            </Routes>
          </BrowserRouter>
          {showHide && <Login />}
          {showsignup && <Signup />}
        </div>
      </UserContext.Provider>
    </>
  );
}

export { UserContext };
export default App;
