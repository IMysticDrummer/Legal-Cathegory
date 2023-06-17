export default function repGetValuesToEvaluate(cathegoryObject) {
  let psXVToEvaluate;
  let volumeToEvaluate;
  let dnToEvaluate;
  let psToEvaluate;
  let psXDNToEvaluate;

  if (Object.hasOwn(cathegoryObject, 'psXV')) {
    psXVToEvaluate = cathegoryObject.psXV;
  }
  if (Object.hasOwn(cathegoryObject, 'psXDNToEvaluate')) {
    psXDNToEvaluate = cathegoryObject.psXDNToEvaluate;
  }
  if (
    Object.hasOwn(cathegoryObject, 'volume') ||
    Object.hasOwn(cathegoryObject, 'ps') ||
    Object.hasOwn(cathegoryObject, 'dn')
  ) {
    let volumeReaded = cathegoryObject.volume;
    let psReaded = cathegoryObject.ps;
    let dnReaded = cathegoryObject.dn;

    volumeToEvaluate = volumeReaded;
    psToEvaluate = psReaded;
    dnToEvaluate = dnReaded;
  }

  return {
    psXVToEvaluate,
    volumeToEvaluate,
    psToEvaluate,
    dnToEvaluate,
    psXDNToEvaluate,
  };
}
