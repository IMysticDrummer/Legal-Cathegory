import stringCathegoryConstants from '../databases/repConst';
import repVesselGasCat from './repVesselGasCat';
import repVesselLiqCat from './repVesselLiqCat';

function repVesselsCathegorization(epReferenceData, epData) {
  const { minConditions, cathegories } = epReferenceData;

  const { presMin, volMin } = minConditions;

  const { ps, volume, fluidState, fluidCathegory } = epData;

  if (ps <= presMin || volume <= volMin) return stringCathegoryConstants.notREP;

  let result;

  fluidState === 'gas' && fluidCathegory !== ''
    ? (result = repVesselGasCat(cathegories, ps, volume))
    : (result = repVesselLiqCat(cathegories, ps, volume));

  return result;
}

export default function repCathegorization(state) {
  if (state.fluid === '') return null;
  let cathegory;

  const resultat = repVesselsCathegorization(state, state);
  console.log('RESULTADOOOO', resultat);
  return;
}
