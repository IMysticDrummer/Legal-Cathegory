import stringCathegoryConstants from '../databases/repConst';
import repGetValuesToEvaluate from './repGetValuesToEvaluate';
import repRevertCathegories from './repRevertCathegories';

export default function repVesselCat(cathegories, ps, volume) {
  let result;
  const reversedCathegories = repRevertCathegories(cathegories);
  if (ps === 0 || volume === 0 || !reversedCathegories) return;
  if (reversedCathegories.I) result = stringCathegoryConstants.II;
  if (reversedCathegories.II) result = stringCathegoryConstants.III;
  if (reversedCathegories.III) result = stringCathegoryConstants.IV;

  for (const cathegory in reversedCathegories) {
    for (const key in reversedCathegories[cathegory]) {
      let {
        psXVToEvaluate,
        volumeToEvaluate,
        psToEvaluate,
        greaterPS,
        greaterVolume,
      } = repGetValuesToEvaluate(reversedCathegories[cathegory][key]);

      if (greaterPS) {
        if (
          (volume <= volumeToEvaluate && ps > psToEvaluate) ||
          ps * volume <= psXVToEvaluate
        )
          result = stringCathegoryConstants[cathegory];
      } else if (greaterVolume) {
        if (
          (volume > volumeToEvaluate && ps <= psToEvaluate) ||
          ps * volume <= psXVToEvaluate
        )
          result = stringCathegoryConstants[cathegory];
      } else if (greaterVolume && greaterPS) {
        if (
          (volume > volumeToEvaluate && ps > psToEvaluate) ||
          ps * volume <= psXVToEvaluate
        )
          result = stringCathegoryConstants[cathegory];
      } else if (
        (volume <= volumeToEvaluate && ps <= psToEvaluate) ||
        (volume <= volumeToEvaluate && psToEvaluate === undefined) ||
        (volumeToEvaluate === undefined && ps <= psToEvaluate) ||
        ps * volume <= psXVToEvaluate
      )
        result = stringCathegoryConstants[cathegory];

      if (volume === 0 || ps === 0) result = stringCathegoryConstants.notREP;
    }
  }

  return result;
}
