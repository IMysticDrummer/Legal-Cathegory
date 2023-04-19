import { useEffect, useState } from 'react';
//import { Form, InputGroup } from 'react-bootstrap';
import { fluids, rep } from '../../lib/epDataReader';
import FluidSelector from './FluidSelector';
import NumberInput from './NumberInput';

const intialState = {
  fluid: '',
  ps: 0,
  vol: 0,
  mainData: {},
  cat: {},
};

function EpCalculator() {
  const [state, setState] = useState(intialState);

  const change = (event) => {
    const data = event.target.value;
    let newState;
    if (event.target.name === 'fluidType') {
      newState = {
        ...state,
        mainData: rep[data].mainData,
        cat: rep[data].cat,
        fluid: data,
      };
    }
    if (event.target.name === 'PS') {
      newState = {
        ...state,
        ps: data,
      };
    }
    if (event.target.name === 'V') {
      newState = {
        ...state,
        vol: data,
      };
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
      {state.fluid !== '' && (
        <NumberInput
          id='ps'
          label='Presión Máxima Admisible (PS)'
          name='PS'
          value={state.ps}
          onChange={change}
        />
      )}
      {state.ps > 0 && (
        <NumberInput
          id='vol'
          label='Volumen (V)'
          name='V'
          value={state.vol}
          onChange={change}
        />
      )}
    </div>
  );
}

export default EpCalculator;
