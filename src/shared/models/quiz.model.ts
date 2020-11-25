export enum Saboteur {
  A = 'A',
  C = 'C',
  HA = 'HA',
  HR = 'HR',
  HV = 'HV',
  P = 'P',
  R = 'R',
  S = 'S',
  V = 'V'
}

export class Question {
  text: string;
  theme: Saboteur;
}
