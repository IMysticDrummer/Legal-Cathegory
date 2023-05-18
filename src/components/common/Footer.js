import { Fragment, useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import LegalAdvisoryModal from './LegalAdvisoryModal';

const Footer = ({ ...props }) => {
  const [showAdvisory, setShowAdvisory] = useState(false);

  const handleClose = () => setShowAdvisory(false);
  const handleClick = () => setShowAdvisory(true);

  return (
    <Fragment>
      {showAdvisory && (
        <LegalAdvisoryModal
          show={showAdvisory}
          onHide={handleClose}
        />
      )}

      <footer>
        <ButtonGroup aria-label='footerButtonGroup'>
          <Button
            variant='secondary'
            aria-label='legalAdvisoryButton'
            onClick={handleClick}
          >
            Aviso Legal
          </Button>
        </ButtonGroup>
      </footer>
    </Fragment>
  );
};

export default Footer;
