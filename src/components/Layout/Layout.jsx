import NavBar from "../../components/NavBar/NavBar";
import "./Layout.scss";

const Layout = ({ showNavbar = true, children }) => {
  return (
    <div className="layout">
      {showNavbar && <NavBar />}
      <main className="layout__main">{children}</main>
    </div>
  );
};

export default Layout;
