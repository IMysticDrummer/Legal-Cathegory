import stringCathegoryConstants from '../databases/repConst';
import repGetValuesToEvaluate from './repGetValuesToEvaluate';
import repMaxCathegory from './repMaxCathegory';
import repRevertCathegories from './repRevertCathegories';

export default function repVesselPipeCat(cathegories, ps, volume, dn) {
  const reversedCathegories = repRevertCathegories(cathegories);
  if (ps === 0 || (volume === 0 && dn === 0) || !reversedCathegories) return;

  let result = repMaxCathegory(reversedCathegories);

  for (const cathegory in reversedCathegories) {
    for (const key in reversedCathegories[cathegory]) {
      let {
        psXVToEvaluate,
        volumeToEvaluate,
        psToEvaluate,
        dnToEvaluate,
        psXDNToEvaluate,
      } = repGetValuesToEvaluate(reversedCathegories[cathegory][key]);

      if (
        (volume <= volumeToEvaluate && ps <= psToEvaluate) ||
        (volume <= volumeToEvaluate && psToEvaluate === undefined) ||
        (volumeToEvaluate === undefined &&
          dnToEvaluate === undefined &&
          ps <= psToEvaluate) ||
        (dn <= dnToEvaluate && ps <= psToEvaluate) ||
        (dn <= dnToEvaluate && psToEvaluate === undefined) ||
        ps * volume <= psXVToEvaluate ||
        ps * dn <= psXDNToEvaluate
      )
        result = stringCathegoryConstants[cathegory];
    }
  }

  return result;
}
