import { useEffect, useState } from 'react';
import Selector from './Selector';
import { getPCA, getRD, getRefrigerants } from '../../lib/rifModules/getPCA';
import { kgToTnCO2 } from '../../lib/rifModules/kgToTmCO2';
import NumberInput from '../common/NumberInput';
import { Form } from 'react-bootstrap';

type TmCO2 = number | undefined;
type InitialState = {
  refrig: string;
  kg: number;
};

const REFRIGERANT = 'refrigerante';
const KG = 'kilos';
const initialState: InitialState = {
  refrig: '',
  kg: 0,
};
const initCO2: TmCO2 = undefined;

function TmCO2Calculator() {
  const [state, setState] = useState(initialState);
  const [tmCO2, setTmCO2Result] = useState(initCO2);

  const onChageSelector = (event: any) => {
    const data = event.target.value;
    let newState = state;

    setTmCO2Result(undefined);

    if (event.target.name === REFRIGERANT) {
      newState = {
        ...newState,
        refrig: data,
      };
    }
    if (event.target.name === KG) {
      newState = {
        ...newState,
        kg: data,
      };
    }
    setState(newState);
  };

  useEffect(() => {
    setTmCO2Result(kgToTnCO2(state.kg, getPCA(state.refrig)));
  }, [state.kg, state.refrig]);

  return (
    <div className='container-lg mb-4'>
      <h2>Calculadora de TmCO2 según RD{getRD()}</h2>
      <Selector
        name={REFRIGERANT}
        label='Refrigerante'
        value={state.refrig}
        onChange={onChageSelector}
        refrigerantList={getRefrigerants()}
        textToPrint={undefined}
      />
      {state.refrig && (
        <div className='primary row align-items-center'>
          <Form.Text
            className={
              state.refrig !== ''
                ? 'col-md-12 my-4 p-2 text-bg-success'
                : undefined
            }
          >
            {`PCA= ${getPCA(state.refrig)}`}
          </Form.Text>
        </div>
      )}
      {state.refrig && (
        <NumberInput
          id={KG}
          label={'Kilos'}
          name={KG}
          value={state.kg}
          onChange={onChageSelector}
          min={0}
        />
      )}
      {state.refrig && state.kg > 0 && (
        <div className='primary row align-items-center'>
          <Form.Text
            className={
              state.refrig !== ''
                ? 'col-md-12 my-2 p-2 text-bg-success'
                : undefined
            }
          >
            {`Tm CO2= ${tmCO2}`}
          </Form.Text>
        </div>
      )}
    </div>
  );
}

export default TmCO2Calculator;
