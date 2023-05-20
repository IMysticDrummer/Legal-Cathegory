import stringCathegoryConstants from '../databases/repConst';
import repVesselCat from './repVesselCat';

function repVesselsCathegorization(epReferenceData, epData) {
  const { minConditions, cathegories } = epReferenceData;

  const { presMin, volMin } = minConditions;

  const { ps, volume, epType } = epData;

  if (ps <= presMin || volume <= volMin) return stringCathegoryConstants.notREP;

  //TODO Diferenciar entre los recipientes y el resto de tipos de equipos a presión
  let result;
  if (epType === 'vessels') result = repVesselCat(cathegories, ps, volume);
  if (epType === 'flame') result = repVesselCat(cathegories, ps, volume);

  return result;
}

export default function repCathegorization(state) {
  if (
    state.fluid === '' ||
    state.volume < state.minConditions.volMin ||
    state.ps < state.minConditions.presMin
  )
    return null;

  const resultat = repVesselsCathegorization(state, state);

  return resultat;
}
