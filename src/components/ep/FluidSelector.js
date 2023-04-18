import { Form, InputGroup } from 'react-bootstrap';

export default function FluidSelector({
  value,
  onChange,
  fluidSelected,
  fluidsList,
  ...props
}) {
  return (
    <InputGroup className='mb-3 primary row align-items-center'>
      <InputGroup.Text
        id='fluidType'
        className='primary col-md-2'
      >
        Tipo de Fluido
      </InputGroup.Text>
      <Form.Select
        aria-label='fluidType'
        name='fluidType'
        value={value}
        onChange={onChange}
        className='col-md-8'
      >
        {fluidSelected === '' && <option key='empty'>Tipo de fluido</option>}
        {fluidsList.map((element) => {
          return (
            <option
              key={element}
              value={element}
              className='success'
            >
              {element}
            </option>
          );
        })}
      </Form.Select>
      <Form.Text
        className={
          fluidSelected !== '' ? 'col-md-2 m-0 p-2 text-bg-success' : undefined
        }
      >
        {fluidSelected}
      </Form.Text>
    </InputGroup>
  );
}
