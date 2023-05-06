import stringCathegoryConstants from './databases/repConst';

function repVesselsCathegorization(epReferenceData, epData) {
  const { minConditions, cathegories } = epReferenceData;

  const { presMin, volMin } = minConditions;

  const { art43, I, II, III } = cathegories;
  const reversedCathegories = { III, II, I, art43 };

  const { ps, volume } = epData;

  if (ps <= presMin || volume <= volMin) return stringCathegoryConstants.notREP;

  let result = stringCathegoryConstants.IV;

  for (const cathegory in reversedCathegories) {
    for (const key in reversedCathegories[cathegory]) {
      let psXVToEvaluate;
      let volumeToEvaluate;
      let psToEvaluate;
      if (Object.hasOwn(reversedCathegories[cathegory][key], 'psXV')) {
        psXVToEvaluate = reversedCathegories[cathegory][key].psXV;
      }
      if (Object.hasOwn(reversedCathegories[cathegory][key], 'volume')) {
        volumeToEvaluate = reversedCathegories[cathegory][key].volume;
        psToEvaluate = reversedCathegories[cathegory][key].ps;
      }

      if (
        (volume <= volumeToEvaluate && ps <= psToEvaluate) ||
        ps * volume <= psXVToEvaluate
      )
        result = stringCathegoryConstants[cathegory];
    }
  }

  return result;
}

export default function repCathegorization(state) {
  if (state.fluid === '') return null;
  let cathegory;

  const resultat = repVesselsCathegorization(state, state);
  console.log('RESULTADOOOO', resultat);
  return;
}
