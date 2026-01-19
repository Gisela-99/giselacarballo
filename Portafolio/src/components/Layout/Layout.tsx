import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Layout.styles.css";

 const navSticky = 'navSticky';


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar  className={navSticky}/>
      {children}
      <Footer/>
    </div>
  );
};

export default Layout;
