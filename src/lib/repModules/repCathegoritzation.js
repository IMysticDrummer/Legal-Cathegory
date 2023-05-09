import stringCathegoryConstants from '../databases/repConst';
import repVesselLiqCat from './repVesselCat';

function repVesselsCathegorization(epReferenceData, epData) {
  const { minConditions, cathegories } = epReferenceData;

  const { presMin, volMin } = minConditions;

  const { ps, volume, fluidState, fluidCathegory } = epData;

  if (ps <= presMin || volume <= volMin) return stringCathegoryConstants.notREP;

  const result = repVesselLiqCat(cathegories, ps, volume);

  return result;
}

export default function repCathegorization(state) {
  if (state.fluid === '') return null;

  const resultat = repVesselsCathegorization(state, state);
  console.log('RESULTADOOOO', resultat);
  return resultat;
}
