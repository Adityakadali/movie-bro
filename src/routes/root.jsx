import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/nav";
const Root = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
