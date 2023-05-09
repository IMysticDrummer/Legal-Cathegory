const textsObject = {
  vessels: 'Recipientes',
  tubes: 'Tuberías',
  fluidType1: 'Fluido tipo 1',
  fluidType2: 'Fluido tipo 2',
  gas: 'Gas',
  liquid: 'Líquido',
};

export default function texts(key) {
  return textsObject[key];
}
