import stringCathegoryConstants from '../databases/repConst';

function revertCathegories(cathegories) {
  const { art43, I, II, III } = cathegories;
  let reversedCathegories;
  if (III) reversedCathegories = { III };
  if (II) reversedCathegories = { ...reversedCathegories, II };
  if (I) reversedCathegories = { ...reversedCathegories, I };
  if (art43) reversedCathegories = { ...reversedCathegories, art43 };
  return reversedCathegories;
}

function getValuesToEvaluate(cathegoryObject) {
  let psXVToEvaluate;
  let volumeToEvaluate;
  let psToEvaluate;
  let greaterPS = false;
  let greaterVolume = false;
  if (Object.hasOwn(cathegoryObject, 'psXV')) {
    psXVToEvaluate = cathegoryObject.psXV;
  }
  if (
    Object.hasOwn(cathegoryObject, 'volume') ||
    Object.hasOwn(cathegoryObject, 'ps')
  ) {
    let volumeReaded = cathegoryObject.volume;
    let psReaded = cathegoryObject.ps;

    if (typeof volumeReaded === 'string') {
      volumeReaded = parseFloat(volumeReaded.split('gt')[1]);
      greaterVolume = true;
    }
    if (typeof psReaded === 'string') {
      psReaded = parseFloat(psReaded.split('gt')[1]);
      greaterPS = true;
    }
    volumeToEvaluate = volumeReaded;
    psToEvaluate = psReaded;
  }

  return {
    psXVToEvaluate,
    volumeToEvaluate,
    psToEvaluate,
    greaterPS,
    greaterVolume,
  };
}

export default function repVesselCat(cathegories, ps, volume) {
  let result;

  const reversedCathegories = revertCathegories(cathegories);
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
      } = getValuesToEvaluate(reversedCathegories[cathegory][key]);

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
