import { Outlet } from "react-router-dom";

// import components:
import Header from "./header";
import Nav from "./nav";

function Layout() {
  return (
    <>
      <div className="page">
        <Nav />
        <main className="content">
          <Header />
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;