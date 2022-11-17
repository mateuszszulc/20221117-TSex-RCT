/**
 * This file contains a list of declarations.
 *
 * It will not contain ANY data.
 * only information about types, i.e. what shape our data will have!
 *
 * Note that this is very convenient because the TypeScript service can use these files
 * in both JS and TS projects!.
 * */

export declare interface MathInterface {
    sum(a: number, b: number): number;
    divide(a: number, b :number | 0): number;
}

declare let mathOLib: MathInterface;

