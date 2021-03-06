import { Base1, Base2, Base3 } from './base.d';

type X = 'x' | 'y' | 'z';

export interface A<t=string> {
  base1: Base1<t, string, number>
  base2: Base2
  base3: Base3
  i: { x: number } & { y: string } & { z: boolean }
  obj: {
    union: '1' | 1 | 'value' | true | number
    objNumber: number
    objT: t
  }
}

// export type AliasForUnionOfPrimitiveTypes = number | string;
// 
// export type AliasWithRecursion<t> = { head : t, tail: AliasWithRecursion<t> } | null;


// export interface Final {
//   i: InterfaceWithAliasProps<string>
// }
// 
// type F = Final;
