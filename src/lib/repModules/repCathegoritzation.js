import stringCathegoryConstants from '../databases/repConst';

function repVesselsCathegorization(epReferenceData, epData) {
  debugger;
  const { minConditions, cathegories } = epReferenceData;

  const { presMin, volMin } = minConditions;

  const { ps, volume, fluidState, fluidCathegory } = epData;

  if (ps <= presMin || volume <= volMin) return stringCathegoryConstants.notREP;

  let result;

  fluidState === 'gas' && fluidCathegory !== ''
    ? (result = repVesselsCathegorization(cathegories, ps, volume))
    : (result = 'todavía nada');

  return result;
}

export default function repCathegorization(state) {
  if (state.fluid === '') return null;
  let cathegory;

  const resultat = repVesselsCathegorization(state, state);
  console.log('RESULTADOOOO', resultat);
  return;
}
