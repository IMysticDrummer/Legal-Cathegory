import { useEffect, useState } from 'react';
//import { Form, InputGroup } from 'react-bootstrap';
import { fluids, rep } from '../../lib/epDataReader';
import FluidSelector from './FluidSelector';

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
    <div className='container-lg'>
      <h2>Calculadora de Equipos a Presión</h2>
      <FluidSelector
        value={state.fluid}
        onChange={change}
        fluidSelected={state.fluid}
        fluidsList={fluids}
      />
    </div>
  );
}

export default EpCalculator;
