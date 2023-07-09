export interface CondElements {
  volume?: number | string;
  dn?: number;
  ps?: number | string | undefined;
  psXV?: number;
  psXDN?: number;
}

export interface Conditions {
  condition1?: CondElements;
  condition2?: CondElements;
  condition3?: CondElements;
  condition4?: CondElements;
}

export interface Cathegories {
  art43: Conditions;
  I: Conditions;
  II: Conditions;
  III: Conditions;
}

export interface MinConditions {
  square: number;
  volMin?: number | undefined;
  presMin: number;
  presToCatIV?: number;
  volMaxArt43?: number;
  dnMin?: number | undefined;
}

export interface FluidConditions {
  minConditions: MinConditions;
  cathegories: Cathegories;
}

export interface Fluid {
  fluidType1?: FluidConditions;
  fluidType2?: FluidConditions;
  fluidType: FluidConditions;
}

export interface REPType {
  gas?: Fluid;
  liquid?: Fluid;
  any?: Fluid;
}

export interface Rules {
  vessels?: REPType;
  flame?: REPType;
  pipes?: REPType;
}

export interface REPState {
  epType: string;
  fluidState: string;
  fluidCathegory: string;
  ps: number;
  volume: number;
  dn: number;
  minConditions: MinConditions;
  cathegories: Cathegories;
}
