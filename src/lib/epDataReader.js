import repRules from './databases/rep.json';

export const epTypes = Object.keys(repRules);

export const fluidTypes = (epType) => Object.keys(repRules[epType]);

export const fluidCathegories = (epType, fluidType) =>
  Object.keys(repRules[epType][fluidType]);

export const fluidData = (epType, fluidType, fluidCathegory) => {
  return repRules[epType][fluidType][fluidCathegory];
};

export const rep = repRules;

// export function epDataReader() {
//   console.log(Object.keys(rep));
// }
