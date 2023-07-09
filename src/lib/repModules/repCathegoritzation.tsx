import stringCathegoryConstants from '../databases/repConst';
import repFlameCat from './repFlameCat';
import repVesselPipeCat from './repVesselPipeCat';
import { FluidConditions, CondElements, REPState } from './repTypes';

function repVesselsPipesCathegorization(
  epReferenceData: FluidConditions,
  epData: CondElements
) {
  const { minConditions, cathegories } = epReferenceData;

  let { presMin, volMin, dnMin } = minConditions;

  let { ps, volume, dn } = epData;

  if (
    (ps && typeof ps === 'number' && ps <= presMin) ||
    (volMin && volume && typeof volume === 'number' && volume <= volMin) ||
    (dnMin && dn && dn <= dnMin)
  )
    return stringCathegoryConstants.notREP;

  const result = repVesselPipeCat(cathegories, ps, volume, dn);

  return result;
}

function repFlameCathegorization(
  epReferenceData: FluidConditions,
  epData: CondElements
) {
  const { minConditions, cathegories } = epReferenceData;

  let { presMin, volMin, presToCatIV, volMaxArt43 } = minConditions;
  if (!volMin) volMin = 0;
  if (!presToCatIV) presToCatIV = 0;
  if (!volMaxArt43) volMaxArt43 = 0;

  let { ps, volume } = epData;
  if (!ps) ps = 0;
  if (!volume) volume = 0;

  if (
    typeof ps === 'number' &&
    typeof volume === 'number' &&
    (ps <= presMin || volume <= volMin)
  )
    return stringCathegoryConstants.notREP;
  if (
    typeof ps === 'number' &&
    typeof volume === 'number' &&
    ps > presToCatIV &&
    volume > volMaxArt43
  )
    return stringCathegoryConstants.IV;

  const result = repFlameCat(cathegories, ps, volume);

  return result;
}

export default function repCathegorization(state: REPState) {
  //if (!state.minConditions.volMin) state.minConditions.volMin = 0;
  //if (!state.minConditions.dnMin) state.minConditions.dnMin = 0;
  if (
    state.fluidCathegory === '' ||
    (state.minConditions.volMin && state.volume < state.minConditions.volMin) ||
    state.ps < state.minConditions.presMin ||
    (state.minConditions.dnMin && state.dn < state.minConditions.dnMin)
  )
    return null;

  let resultat;

  //TODO Diferenciar entre los recipientes y el resto de tipos de equipos a presión

  if (state.epType === 'vessels' || state.epType === 'pipes')
    resultat = repVesselsPipesCathegorization(state, state);
  if (state.epType === 'flame')
    resultat = repFlameCathegorization(state, state);

  return resultat;
}
