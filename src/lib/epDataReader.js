import repRules from './databases/rep.json';

export const epTypes = Object.keys(repRules);

export const fluidStates = (epType) => Object.keys(repRules[epType]);

export const fluidCathegories = (epType, fluidState) =>
  Object.keys(repRules[epType][fluidState]);

export const fluidData = (epType, fluidState, fluidCathegory) => {
  return repRules[epType][fluidState][fluidCathegory];
};

export const rep = repRules;

// export function epDataReader() {
//   console.log(Object.keys(rep));
// }
