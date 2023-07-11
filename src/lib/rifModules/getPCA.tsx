import pcaRules from '../databases/pca.json';

interface PCA {
  [propName: string]: number;
}

type RD = () => string;
type Refrigerants = () => string[];
type GetPCA = (refrigerant: string) => number;

export const getRD: RD = () => pcaRules.RD;

export const getRefrigerants: Refrigerants = () => Object.keys(pcaRules.PCA);

export const getPCA: GetPCA = (refrigerant: string) => {
  const pca: PCA = pcaRules.PCA;
  const selection = refrigerant as keyof Object;
  let value = 0;
  if (pca.hasOwnProperty(selection)) {
    value = pca[selection];
  }
  return value;
};
