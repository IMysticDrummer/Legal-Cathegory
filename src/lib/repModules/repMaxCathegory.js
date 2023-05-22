import stringCathegoryConstants from '../databases/repConst';

export default function repMaxCathegory(reversedCathegories) {
  let result;
  if (!reversedCathegories) return;
  if (reversedCathegories.I) result = stringCathegoryConstants.II;
  if (reversedCathegories.II) result = stringCathegoryConstants.III;
  if (reversedCathegories.III) result = stringCathegoryConstants.IV;

  return result;
}
