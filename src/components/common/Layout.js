import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CerNavbar from './Navbar';

const Layout = ({ title, ...props }) => {
  return (
    <main>
      <Header title={title} />
      <CerNavbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
