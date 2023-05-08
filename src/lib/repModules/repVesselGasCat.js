import stringCathegoryConstants from '../databases/repConst';

export default function repVesselGasCat(cathegories, ps, volume) {
  let result = stringCathegoryConstants.IV;

  const { art43, I, II, III } = cathegories;
  const reversedCathegories = { III, II, I, art43 };

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
      if (volume === 0 || ps === 0) result = stringCathegoryConstants.notREP;
    }
  }

  return result;
}
