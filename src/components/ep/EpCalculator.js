import { useEffect, useState } from 'react';
//import { Form, InputGroup } from 'react-bootstrap';
import {
  epTypes,
  fluidTypes,
  fluidCathegories,
  rep,
  fluidData,
} from '../../lib/epDataReader';
import Selector from './Selector';
import NumberInput from './NumberInput';
import repCathegoritzation from '../../lib/repCathegoritzation';
const FLUIDTYPE = 'fluidType';
const FLUIDCATHEGORY = 'fluidCathegory';
const EPTYPE = 'epType';

const intialState = {
  epType: '',
  fluidType: '',
  fluidCathegory: '',
  ps: 0,
  volume: 0,
  minConditions: {},
  cathegories: {},
};

function EpCalculator() {
  const [state, setState] = useState(intialState);

  const fluidList = () => fluidTypes(state.epType);
  const cathegoryList = () => fluidCathegories(state.epType, state.fluidType);

  const change = (event) => {
    const data = event.target.value;
    let newState;

    if (event.target.name === EPTYPE) {
      newState = {
        ...state,
        epType: data,
      };
    }
    if (event.target.name === FLUIDTYPE) {
      newState = {
        ...state,
        fluidType: data,
      };
    }
    if (event.target.name === FLUIDCATHEGORY) {
      const fluidDataResult = fluidData(state.epType, state.fluidType, data);
      console.log('fluidDataResult', fluidDataResult);
      newState = {
        ...state,
        minConditions: fluidDataResult.minConditions,
        cathegories: fluidDataResult.cathegories,
        fluidCathegory: data,
      };
    }
    if (event.target.name === 'PS') {
      newState = {
        ...state,
        ps: parseFloat(data),
      };
    }
    if (event.target.name === 'V') {
      newState = {
        ...state,
        volume: parseFloat(data),
      };
    }
    setState(newState);
  };

  useEffect(() => {
    const result = repCathegoritzation(state);
    console.log('resultado', result);
  }, [state]);

  return (
    <div className='container-lg'>
      <h2>Calculadora de Equipos a Presión</h2>
      <Selector
        name={EPTYPE}
        label='Tipo de equipo a presión'
        value={state.epType}
        onChange={change}
        fluidSelected={state.epType}
        fluidsList={epTypes}
      />
      {state.epType !== '' && (
        <Selector
          name={FLUIDTYPE}
          label='Estado del fluido'
          value={state.fluidType}
          onChange={change}
          fluidSelected={state.fluidType}
          fluidsList={fluidList()}
        />
      )}
      {state.fluidType !== '' && (
        <Selector
          name={FLUIDCATHEGORY}
          label='Tipo de fluido'
          value={state.fluidCathegory}
          onChange={change}
          fluidSelected={state.fluidCathegory}
          fluidsList={cathegoryList()}
        />
      )}
      {state.fluidCathegory !== '' && (
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
          value={state.volume}
          onChange={change}
        />
      )}
    </div>
  );
}

export default EpCalculator;
