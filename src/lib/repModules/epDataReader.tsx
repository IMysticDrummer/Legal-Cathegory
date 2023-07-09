import repRules from '../databases/rep.json';

/**
 * @return {string} return the Real Decret of Pressure Equipements
 */
export const epRD = repRules.RD;
const rules = repRules.rules;

/**
 * @return {array of strings} the types of Pressure Equipements contained in EP rules
 */
export const epTypes = Object.keys(rules);

/**
 *
 * @param {string} epType type of equipement
 * @returns {array of strings} the fluid states contained in the type of pressure equipement indicated
 */
export const fluidStates = (epType: string) =>
  Object.keys(rules[epType as keyof Object]);

/**
 *
 * @param {string} epType type of equipement
 * @param {string} fluidState state of the fluid contained in the pressure equipement
 * @returns {array of strings} possible cathegories. Always will return a one less cathegory. For example, if it's possible to have four cathegories, this function will return only three cathegories.
 */
export const fluidCathegories = (epType: string, fluidState: string) =>
  Object.keys(rules[epType as keyof Object][fluidState as keyof Object]);

/**
 *
 * @param {string} epType type of equipement
 * @param {string} fluidState state of the fluid contained in the pressure equipement
 * @param {string} fluidCathegory fluid cathegory
 * @returns {object} containing the data conditions to be in this cathegory
 */
export const fluidData = (
  epType: string,
  fluidState: string,
  fluidCathegory: string
) => {
  return rules[epType as keyof Object][fluidState as keyof Object][
    fluidCathegory as keyof Object
  ];
};

export const rep = rules;
