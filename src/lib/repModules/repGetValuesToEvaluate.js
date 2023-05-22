export default function repGetValuesToEvaluate(cathegoryObject) {
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
