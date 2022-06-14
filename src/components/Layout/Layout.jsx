import NavBar from "../../containers/NavBar/NavBar";
import "./Layout.scss";

const Layout = ({ showNavbar = false, children }) => {
  return (
    <div className="layout">
      {showNavbar && <NavBar />}
      <main className="layout__main">{children}</main>
    </div>
  );
};

export default Layout;
