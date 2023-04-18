import { useEffect, useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { fluids, rep } from '../lib/epDataReader';

const intialState = {
  fluid: '',
  mainData: {},
  cat: {},
};

function EpCalculator() {
  const [state, setState] = useState(intialState);

  const change = (event) => {
    let newState;
    if (event.target.name === 'fluidType') {
      const fluid = event.target.value;

      newState = { mainData: rep[fluid].mainData, cat: rep[fluid].cat, fluid };
    }
    setState(newState);
  };

  useEffect(() => {
    //epDataReader();
  }, []);

  return (
    <div>
      <h2>Calculadora de Equipos a Presión</h2>
      <InputGroup className='mb-3 primary'>
        <InputGroup.Text
          id='fluidType'
          className='primary'
        >
          Tipo de Fluido
        </InputGroup.Text>
        <Form.Select
          aria-label='fluidType'
          name='fluidType'
          value={state.fluid}
          onChange={change}
        >
          {state.fluid === '' && <option key='empty'>Tipo de fluido</option>}
          {fluids.map((element) => {
            return (
              <option
                key={element}
                value={element}
              >
                {element}
              </option>
            );
          })}
        </Form.Select>
        <InputGroup.Text>{state.fluid}</InputGroup.Text>
      </InputGroup>
    </div>
  );
}

export default EpCalculator;
