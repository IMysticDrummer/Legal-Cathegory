import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ title, ...props }) => {
  return (
    <main>
      <Header title={title} />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
