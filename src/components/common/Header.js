import { Badge } from 'react-bootstrap';

const Header = ({ title, ...props }) => {
  return (
    <header>
      <h1>
        <Badge bg='info'>{title}</Badge>
      </h1>
    </header>
  );
};

export default Header;
