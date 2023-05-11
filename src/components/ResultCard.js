import { Card } from 'react-bootstrap';

export default function ResultCard({ header, title, img, ...props }) {
  return (
    <Card>
      <Card.Header>{header}</Card.Header>
      <Card.Title className='text-bg-primary'>{title}</Card.Title>
      <Card.Img src={img} />
    </Card>
  );
}
