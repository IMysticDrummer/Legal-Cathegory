export default function repGetValuesToEvaluate(cathegoryObject) {
  let psXVToEvaluate;
  let volumeToEvaluate;
  let dnToEvaluate;
  let psToEvaluate;
  let psXDNToEvaluate;
  let greaterPS = false;
  let greaterVolume = false;
  if (Object.hasOwn(cathegoryObject, 'psXV')) {
    psXVToEvaluate = cathegoryObject.psXV;
  }
  if (Object.hasOwn(cathegoryObject, 'psXDN')) {
    psXDNToEvaluate = cathegoryObject.psXDN;
  }
  if (
    Object.hasOwn(cathegoryObject, 'volume') ||
    Object.hasOwn(cathegoryObject, 'ps') ||
    Object.hasOwn(cathegoryObject, 'dn')
  ) {
    let volumeReaded = cathegoryObject.volume;
    let psReaded = cathegoryObject.ps;
    let dnReaded = cathegoryObject.dn;

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
    dnToEvaluate = dnReaded;
  }

  return {
    psXVToEvaluate,
    volumeToEvaluate,
    psToEvaluate,
    greaterPS,
    greaterVolume,
    dnToEvaluate,
    psXDNToEvaluate,
  };
}
