import repRules from '../databases/rep.json';

export const epRD = repRules.RD;
const rules = repRules.rules;

export const epTypes = Object.keys(rules);

export const fluidStates = (epType) => Object.keys(rules[epType]);

export const fluidCathegories = (epType, fluidState) =>
  Object.keys(rules[epType][fluidState]);

export const fluidData = (epType, fluidState, fluidCathegory) => {
  return rules[epType][fluidState][fluidCathegory];
};

export const rep = rules;
