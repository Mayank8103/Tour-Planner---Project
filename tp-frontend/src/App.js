
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Packages from "./components/administrator/Packages";
import Header from "./components/usercomponent/UserInterface/Header";
import Home from "./components/usercomponent/screen/Home";
import DashBoard from "./components/administrator/DashBoard";
import LoginDialoge from "./components/usercomponent/UserInterface/LoginDialoge"
import Admin from "./components/administrator/Admin";
import BestIndia from "./components/usercomponent/UserInterface/BestIndia";
import NewStates from "./components/administrator/NewStates";
import Page2 from "./components/usercomponent/UserInterface/Page2";
import Payment from "./components/usercomponent/UserInterface/Payment";
import DisplayAllStates from "./components/administrator/DisplayAllStates";

function App() {
  return (
    <div>
      {/* <Packages />
      <DisplayAllPackages /> */}
    <Router>
      <Routes>
        <Route element={<Packages/>} path={"/packages"}  />
         <Route element={<Header/>} path={"/header"} />
         <Route element={<Home/>} path={"/home"} />
         <Route element={<LoginDialoge/>} path={"/login"} />
         <Route element={<Admin/>} path={"/admin"} />
         <Route element={<DashBoard/>} path={"/dashboard/*"} />
         <Route element={<BestIndia/>} path={"/bestofindia"} />
         <Route element={<NewStates/>} path={"/newstates"} />
         <Route element={<Page2/>} path={"/page2"} />
         <Route element={<Payment/>} path={"/payment"} />
         <Route element={<DisplayAllStates/>} path={"/displayallstates"}/>
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;
