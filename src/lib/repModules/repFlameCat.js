import stringCathegoryConstants from '../databases/repConst';
import repGetValuesToEvaluate from './repGetValuesToEvaluate';
import repMaxCathegory from './repMaxCathegory';
import repRevertCathegories from './repRevertCathegories';

export default function repFlameCat(cathegories, ps, volume) {
  const reversedCathegories = repRevertCathegories(cathegories);

  let result = repMaxCathegory(reversedCathegories);

  if (ps === 0 || volume === 0 || !reversedCathegories) return;

  for (const cathegory in reversedCathegories) {
    let conditions = [];
    for (const key in reversedCathegories[cathegory]) {
      conditions.push(
        repGetValuesToEvaluate(reversedCathegories[cathegory][key])
      );
    }

    let query = [];
    conditions.forEach((element) => {
      if (
        element.psToEvaluate &&
        ps <= element.psToEvaluate &&
        volume <= element.volumeToEvaluate
      ) {
        query.push(true);
      }
      if (element.psXVToEvaluate && ps * volume <= element.psXVToEvaluate) {
        query.push(true);
      }
    });

    if (query.includes(true)) result = stringCathegoryConstants[cathegory];
  }

  return result;
}
