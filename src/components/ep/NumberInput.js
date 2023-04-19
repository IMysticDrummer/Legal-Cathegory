import { Form, InputGroup } from 'react-bootstrap';

export default function NumberInput({
  id,
  label,
  name,
  value,
  onChange,
  ...props
}) {
  return (
    <InputGroup className='mb-3 primary row align-items-center'>
      <InputGroup.Text
        id={id}
        className='primary col-md-4'
      >
        {label}
      </InputGroup.Text>
      <Form.Control
        type='number'
        aria-label={name}
        name={name}
        value={value}
        onChange={onChange}
        className='col-md-6'
      />
      {value > 0 && (
        <Form.Text
          className={value > 0 ? 'col-md-2 m-0 p-2 text-bg-success' : undefined}
        >
          {value}
        </Form.Text>
      )}
    </InputGroup>
  );
}
