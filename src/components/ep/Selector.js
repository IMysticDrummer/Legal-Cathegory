import { Form, InputGroup } from 'react-bootstrap';

export default function Selector({
  name,
  label,
  value,
  onChange,
  fluidSelected,
  fluidsList,
  textToPrint,
  ...props
}) {
  return (
    <InputGroup className='mb-3 primary row align-items-center'>
      <InputGroup.Text
        id={name}
        className='primary col-md-2'
      >
        {label}
      </InputGroup.Text>
      <Form.Select
        aria-label={name}
        name={name}
        value={value}
        onChange={onChange}
        className='col-md-8'
      >
        {fluidSelected === '' && <option key='empty'>{label}</option>}
        {fluidsList.map((element) => {
          return (
            <option
              key={element}
              value={element}
              className='success'
            >
              {textToPrint ? textToPrint(element) : element}
            </option>
          );
        })}
      </Form.Select>
      <Form.Text
        className={
          fluidSelected !== '' ? 'col-md-2 m-0 p-2 text-bg-success' : undefined
        }
      >
        {textToPrint ? textToPrint(fluidSelected) : fluidSelected}
      </Form.Text>
    </InputGroup>
  );
}
