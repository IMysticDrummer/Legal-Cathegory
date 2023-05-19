import { useEffect, useState } from 'react';

import {
  epRD,
  epTypes,
  fluidStates,
  fluidCathegories,
  fluidData,
} from '../../lib/repModules/epDataReader';
import Selector from './Selector';
import NumberInput from './NumberInput';
import repCathegoritzation from '../../lib/repModules/repCathegoritzation';
import texts from '../../lib/databases/texts/texts';
import ResultCard from '../ResultCard';

const FLUIDSTATE = 'fluidState';
const FLUIDCATHEGORY = 'fluidCathegory';
const EPTYPE = 'epType';

const intialState = {
  epType: '',
  fluidState: '',
  fluidCathegory: '',
  ps: 0,
  volume: 0,
  minConditions: {},
  cathegories: {},
};

const imgName = (name) => `${process.env.PUBLIC_URL}/REP/${name}.png`;

function EpCalculator() {
  const [state, setState] = useState(intialState);
  const [catResult, setCatResult] = useState();

  const fluidStatesList = () => fluidStates(state.epType);
  const cathegoryList = () => fluidCathegories(state.epType, state.fluidState);

  const onChangeSelector = (event) => {
    const data = event.target.value;
    let newState;

    if (event.target.name === EPTYPE) {
      setCatResult();
      newState = {
        ...intialState,
        epType: data,
      };
    }
    if (event.target.name === FLUIDSTATE) {
      setCatResult();
      newState = {
        ...intialState,
        epType: state.epType,
        fluidState: data,
      };
    }
    if (event.target.name === FLUIDCATHEGORY) {
      setCatResult();
      const fluidDataResult = fluidData(state.epType, state.fluidState, data);
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
    setCatResult(result);
  }, [state]);

  return (
    <div className='container-lg'>
      <h2>Calculadora de Equipos a Presión, según RD{epRD}</h2>

      <Selector
        name={EPTYPE}
        label='Tipo de equipo a presión'
        value={state.epType}
        onChange={onChangeSelector}
        fluidSelected={state.epType}
        fluidsList={epTypes}
        textToPrint={texts}
      />
      {state.epType !== '' && (
        <Selector
          name={FLUIDSTATE}
          label='Estado del fluido'
          value={state.fluidState}
          onChange={onChangeSelector}
          fluidSelected={state.fluidState}
          fluidsList={fluidStatesList()}
          textToPrint={texts}
        />
      )}
      {state.fluidState !== '' && (
        <Selector
          name={FLUIDCATHEGORY}
          label='Tipo de fluido'
          value={state.fluidCathegory}
          onChange={onChangeSelector}
          fluidSelected={state.fluidCathegory}
          fluidsList={cathegoryList()}
          textToPrint={texts}
        />
      )}
      {state.fluidCathegory !== '' && (
        <NumberInput
          id='ps'
          label='Presión Máxima Admisible (PS)'
          name='PS'
          value={state.ps || 0}
          onChange={onChangeSelector}
          min={0}
        />
      )}
      {state.ps > 0 && (
        <NumberInput
          id='vol'
          label='Volumen (V)'
          name='V'
          value={state.volume || 0}
          onChange={onChangeSelector}
          min={0}
        />
      )}
      {catResult && (
        <ResultCard
          header='Resultado'
          title={catResult}
          img={imgName(state.minConditions.square)}
        />
      )}
    </div>
  );
}

export default EpCalculator;
