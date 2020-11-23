export enum Saboteur {
  A = 'Avoider',
  C = 'Controller',
  HA = 'Hyper-Achiever',
  HR = 'Hyper-Rational',
  HV = 'Hyper-Vigilant',
  J = 'Judge',
  P = 'Pleaser',
  R = 'Restless',
  S = 'Stickler',
  V = 'Victim'
}

export class Question {
  text: string;
  theme: Saboteur;
}
