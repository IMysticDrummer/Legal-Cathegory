import stringCathegoryConstants from '../databases/repConst';
import repFlameCat from './repFlameCat';
import repVesselCat from './repVesselCat';

function repVesselsCathegorization(epReferenceData, epData) {
  const { minConditions, cathegories } = epReferenceData;

  const { presMin, volMin } = minConditions;

  const { ps, volume } = epData;

  if (ps <= presMin || volume <= volMin) return stringCathegoryConstants.notREP;

  const result = repVesselCat(cathegories, ps, volume);

  return result;
}

function repFlameCathegorization(epReferenceData, epData) {
  const { minConditions, cathegories } = epReferenceData;

  const { presMin, volMin, presToCatIV, volMaxArt43 } = minConditions;

  const { ps, volume } = epData;

  if (ps <= presMin || volume <= volMin) return stringCathegoryConstants.notREP;
  if (ps > presToCatIV && volume > volMaxArt43)
    return stringCathegoryConstants.IV;

  const result = repFlameCat(cathegories, ps, volume);

  return result;
}

export default function repCathegorization(state) {
  if (
    state.fluid === '' ||
    state.volume < state.minConditions.volMin ||
    state.ps < state.minConditions.presMin
  )
    return null;

  let resultat;

  //TODO Diferenciar entre los recipientes y el resto de tipos de equipos a presión

  if (state.epType === 'vessels')
    resultat = repVesselsCathegorization(state, state);
  if (state.epType === 'flame')
    resultat = repFlameCathegorization(state, state);

  return resultat;
}
