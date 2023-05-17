import { Button, Modal } from 'react-bootstrap';
import archivo from '../../legalAdvisory.txt';
import { useEffect, useState } from 'react';

export default function LegalAdvisoryModal({ show, onHide, ...props }) {
  const [textArray, setTextArray] = useState([]);

  useEffect(() => {
    const readLegalAdvisory = async (file) => {
      const response = await fetch(file);
      try {
        if (!response.ok) throw new Error('File Error');
        const result = await response.text();
        setTextArray(result.split('\\n'));
      } catch (error) {
        setTextArray([error]);
      }
    };
    readLegalAdvisory(archivo);
  }, []);

  return (
    <Modal
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title>{textArray[0]?.toUpperCase()}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {textArray.map((element, index) => {
          if (index === 0) return <p key={index}></p>;
          const numberControl = parseInt(element[0]);
          if (isNaN(numberControl)) return <p key={index}>{element}</p>;
          return <h3 key={index}>{element}</h3>;
        })}
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant='primary'
          onClick={onHide}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
