const textsObject = {
  vessels: 'Recipientes',
  tubes: 'Tuberías',
  flame: 'Equipo sometido a llama y ollas a presión',
  fluidType: 'Cualquier estado',
  fluidType1: 'Fluido tipo 1',
  fluidType2: 'Fluido tipo 2',
  gas: 'Gas',
  liquid: 'Líquido',
  any: 'Cualquiera',
};

export default function texts(key) {
  return textsObject[key];
}
