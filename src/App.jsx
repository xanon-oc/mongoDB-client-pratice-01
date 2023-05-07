import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar";

const App = () => {
  return (
    <div className="text-center">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
