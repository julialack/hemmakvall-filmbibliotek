import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Hem</Link></li>
          <li><Link to="/favorites">Favoriter</Link></li>
        </ul>
      </nav>
      <Outlet /> {/* Här renderas den aktuella sidan */}
    </div>
  );
};

export default Layout;
