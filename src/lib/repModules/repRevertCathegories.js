export default function repRevertCathegories(cathegories) {
  const { art43, I, II, III } = cathegories;
  let reversedCathegories;
  if (III) reversedCathegories = { III };
  if (II) reversedCathegories = { ...reversedCathegories, II };
  if (I) reversedCathegories = { ...reversedCathegories, I };
  if (art43) reversedCathegories = { ...reversedCathegories, art43 };
  return reversedCathegories;
}
